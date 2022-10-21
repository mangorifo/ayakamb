const { SlashCommandBuilder } = require("@discordjs/builders");
const { PermissionFlagsBits } = require("discord-api-types/v10");
const { EmbedBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ban")
    .setDescription("bans a user")
    .addUserOption((option) =>
      option.setName("user").setDescription("who you want to ban").setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("reason")
        .setDescription("why you banned tehm")
        .setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
  async execute(interaction) {
    console.log('[LOG] | "ban.js" was used')
    const user = interaction.options.getMember("user");
    const reason = interaction.options.getString("reason");

    if (!user)
      return interaction.reply({
        content: "that is not a user",
        ephemeral: true,
      });

    const userPosition = await user.roles.highest.position;
    const botPosition = await interaction.guild.members.me.roles.highest
      .position;
    const mePosition = await interaction.member.roles.highest.position;

    if (
      !interaction.guild.members.me.permissions.has(
        PermissionsBitField.Flags.BanMembers
      )
    )
      return interaction.reply({
        content: "i don't have permission to ban members",
        ephemeral: true,
      });

    if (userPosition >= mePosition) {
      return interaction.reply({
        content: `You cannot ban ${user.user} because they have higher or equal role to you.`,
        ephemeral: true,
      });
    } else if (userPosition >= botPosition) {
      return interaction.reply({
        content: `I cannot ban ${user.user} because they have higher or equal role to me.`,
        ephemeral: true,
      });
    } else {
      try {
        const dmEmbed = new EmbedBuilder()
          .setTitle("you have been banned from the server")
          .setDescription(
            `You have been banned from the server for the following reason: \n${reason}.`
          )
          .setColor("#bdb3ce")
          .setFooter({
            text: interaction.guild.name,
            icon_url: interaction.guild.iconURL,
          });
        const embed = new EmbedBuilder()
          .setTitle("a user has been banned")
          .setDescription(
            `${user.user.tag} has been banned for the following reason: \n${reason}`
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
        await user.ban({
          days: 0,
          reason: `banned by ${interaction.user.tag} with reason: ${reason}`,
        });
        const pchannel = await interaction.guild.systemChannel;
        if (pchannel) await pchannel.send({ embeds: [embed] });
        return interaction.reply({
          content: `${user.user.tag} has been banned.`,
          ephemeral: false,
        });
      } catch (error) {
        console.log(error);
        return interaction.reply({
          content: `I was unable to ban ${user.user.tag}.`,
          ephemeral: true,
        });
      }
    }
  },
};
