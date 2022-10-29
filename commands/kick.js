const { SlashCommandBuilder } = require("@discordjs/builders");
const { PermissionFlagsBits } = require("discord-api-types/v10");
const { EmbedBuilder, PermissionsBitField } = require("discord.js");

// totallt not srolen code
module.exports = {
  data: new SlashCommandBuilder()
    .setName("kick")
    .setDescription("kick a user")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("who to kick")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("reason")
        .setDescription("why you kicked them")
        .setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),
  async execute(interaction) {
    console.log('[LOG] | "kick.js" was used')
    const user = interaction.options.getMember("user");
    const reason = interaction.options.getString("reason");

    if (!user)
      return interaction.reply({
        content: "that user is not a user, sorry",
        ephemeral: true,
      });

    const userPosition = await user.roles.highest.position;
    const botPosition = await interaction.guild.members.me.roles.highest
      .position;
    const mePosition = await interaction.member.roles.highest.position;

    if (
      !interaction.guild.members.me.permissions.has(
        PermissionsBitField.Flags.KickMembers
      )
    )
      return interaction.reply({
        content: "i do not have permission to kick members",
        ephemeral: true,
      });

    if (userPosition >= mePosition) {
      return interaction.reply({
        content: `you cannot kick ${user.user} because they have higher or equal role to you.`,
        ephemeral: true,
      });
    } else if (userPosition >= botPosition) {
      return interaction.reply({
        content: `i cannot kick ${user.user} because they have higher or equal role to me.`,
        ephemeral: true,
      });
    } else {
      try {
        const dmEmbed = new EmbedBuilder()
          .setTitle("You have been kicked from the server!")
          .setDescription(
            `you have been kicked from the server because: \n${reason}`
          )
          .setColor("#bdb3ce")
          .setFooter({
            text: interaction.guild.name,
            icon_url: interaction.guild.iconURL,
          });
        const embed = new EmbedBuilder()
          .setTitle("User has been kicked")
          .setDescription(
            `${user.user.tag} has been kicked from the server because: \n${reason}`
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
        await user.kick(
          `kicked by ${interaction.user.tag} with reason: ${reason}`
        );
        const pchannel = await interaction.guild.systemChannel;
        if (pchannel) await pchannel.send({ embeds: [embed] });
        return interaction.reply({
          content: `${user.user} has been kicked`,
          ephemeral: false,
        });
      } catch (error) {
        console.log(error);
        return interaction.reply({
          content: `I was unable to kick ${user.user}.`,
          ephemeral: true,
        });
      }
    }
  },
};
