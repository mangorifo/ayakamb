const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
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
      .setColor(`00FF00`)
      .setTitle(`Changelog`)
      .setAuthor({ name: 'latest update of AyakaMB' })
      .setDescription(`*new commands*\n\nAdd /httpcat command`)
      .setFooter({ text: `If commands aren't listed here, that means they're not done/in beta/still testing/not much of a change` })
    await interaction.reply({ embeds: [messageEmbed], components: [row, web] });



  }
};