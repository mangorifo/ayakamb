const { SlashCommandBuilder } = require("@discordjs/builders");
const { PermissionFlagsBits } = require("discord-api-types/v10");
const { EmbedBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("timeout")
    .setDescription("times out a user")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("the user to timeout")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("duration")
        .setDescription("timeout duration")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("reason")
        .setDescription("why u timed them out")
        .setRequired(false)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers),
  async execute(interaction) {
    const user = interaction.options.getMember("user");
    const reason = interaction.options.getString("reason");

    // convert duration to milliseconds
    const duration = interaction.options.getString("duration");
    const durationRegex = /(\d+)([smhdw])/;
    const durationMatch = durationRegex.exec(duration);
    if (!durationMatch) {
      return interaction.reply({
        content:
          "Invalid duration format. Please use the format `1s` for 1 second, `1m` for 1 minute, `1h` for 1 hour, `1d` for 1 day, or `1w` for 1 week.",
        ephemeral: true,
      });
    }
    const durationNumber = parseInt(durationMatch[1]);
    const durationUnit = durationMatch[2];
    let durationMilliseconds = 0;
    switch (durationUnit) {
      case "s":
        durationMilliseconds = durationNumber * 1000;
        break;
      case "m":
        durationMilliseconds = durationNumber * 1000 * 60;
        break;
      case "h":
        durationMilliseconds = durationNumber * 1000 * 60 * 60;
        break;
      case "d":
        durationMilliseconds = durationNumber * 1000 * 60 * 60 * 24;
        break;
      case "w":
        durationMilliseconds = durationNumber * 1000 * 60 * 60 * 24 * 7;
        break;
    }

    if (!user)
      return interaction.reply({
        content: "Cannot find this user!",
        ephemeral: true,
      });

    const userPosition = await user.roles.highest.position;
    const botPosition = await interaction.guild.members.me.roles.highest
      .position;
    const mePosition = await interaction.member.roles.highest.position;

    if (
      !interaction.guild.members.me.permissions.has(
        PermissionsBitField.Flags.ModerateMembers
      )
    )
      return interaction.reply({
        content: "I don't have the permission to Moderate members.",
        ephemeral: true,
      });

    if (userPosition >= mePosition) {
      return interaction.reply({
        content: `You cannot timeout ${user.user} because they have higher or equal role to you.`,
        ephemeral: true,
      });
    } else if (userPosition >= botPosition) {
      return interaction.reply({
        content: `I cannot timeout ${user.user} because they have higher or equal role to me.`,
        ephemeral: true,
      });
    } else {
      try {
        const dmEmbed = new EmbedBuilder()
          .setTitle("You have been timed out!")
          .setDescription(
            `You have been timed out ${
              reason ? `for the following reason: \n${reason}.` : ""
            }`
          )
          .setColor("#bdb3ce")
          .setFooter({
            text: interaction.guild.name,
            icon_url: interaction.guild.iconURL,
          });
        const embed = new EmbedBuilder()
          .setTitle("User has been timed out!")
          .setDescription(
            `${user.user.tag} has been timed out for ${duration} ${
              reason
                ? `for the following reason: \n${reason}.`
                : "for an unknown reason."
            }`
          )
          .setColor("#bdb3ce")
          .setTimestamp()
          .setFooter({
            text: interaction.user.tag,
            icon_url: interaction.user.avatarURL,
          });
        await user.user.send({ embeds: [dmEmbed] }).catch((err) => {
          console.log(err);
        });
        await user.timeout(durationMilliseconds, reason);
        const pchannel = await interaction.guild.systemChannel;
        if (pchannel) await pchannel.send({ embeds: [embed] });
        return interaction.reply({
          content: `${user.user} is now timed out`,
          ephemeral: true,
        });
      } catch (error) {
        console.log(error);
        return interaction.reply({
          content: `I could not timeout ${user.user}.`,
          ephemeral: true,
        });
      }
    }
  },
};
