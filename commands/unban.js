const { SlashCommandBuilder } = require("@discordjs/builders");
const { PermissionFlagsBits } = require("discord-api-types/v10");
const { EmbedBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("unban")
    .setDescription("unbans a user")
    .addUserOption((option) =>
      option
        .setName("userid")
        .setDescription("user id of the member to unban")
        .setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
  async execute(interaction) {
    const user = interaction.options.getUser("userid");

    if (
      !interaction.guild.members.me.permissions.has(
        PermissionsBitField.Flags.BanMembers
      )
    )
      return interaction.reply({
        content: "i don't have permission to ban members",
        ephemeral: true,
      });

    // check if the user is banned
    const bannedUsers = await interaction.guild.bans.fetch();
    if (!bannedUsers.has(user.id))
      return interaction.reply({
        content: "that user is currently not banned",
        ephemeral: true,
      });

    try {
      const embed = new EmbedBuilder()
        .setTitle("user unbanned")
        .setDescription(`${user} has been unbanned`)
        .setColor("#bdb3ce")
        .setTimestamp()
        .setFooter({
          text: interaction.user.tag,
          icon_url: interaction.user.avatarURL,
        });

      await interaction.guild.members.unban(user);
      const pchannel = await interaction.guild.systemChannel;
      if (pchannel) await pchannel.send({ embeds: [embed] });
      return interaction.reply({
        content: `${user} has been unbanned.`,
        ephemeral: true,
      });
    } catch (error) {
      console.log(error);
      return interaction.reply({
        content: `i can't unban ${user.user.tag}.`,
        ephemeral: true,
      });
    }
  },
};
