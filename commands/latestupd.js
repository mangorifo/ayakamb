const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { update, title } = require("../client/lt.json")
module.exports = {
  data: new SlashCommandBuilder()
    .setName('changelog')
    .setDescription('View latest bot update'),
  async execute(interaction) {
    const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setLabel('GitHub repository')
          .setStyle(ButtonStyle.Link)
          .setURL('https://github.com/mangorifo/ayakamb'),
      );
    const web = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setLabel('Web Changelog')
          .setStyle(ButtonStyle.Link)
          .setURL('https://discord.ayakads.cf/changelog'),
      );
    const messageEmbed = new EmbedBuilder()
      .setColor("#E4B400")
      .setTitle(title)
      .setAuthor({ name: 'latest update of AyakaMB' })
      .setDescription(update)
      .setFooter({ text: `If commands aren't listed here, that means they're not done/in beta/still testing/not much of a change` })
    await interaction.reply({ embeds: [messageEmbed], components: [row, web] });



  }
};