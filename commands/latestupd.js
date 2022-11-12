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

    const messageEmbed = new EmbedBuilder()
      .setColor(`00FF00`)
      .setTitle(`Changelog`)
      .setAuthor({ name: 'latest update of AyakaMBot' })
      .setDescription(`*update commands*\n\nAdd "Send me another one" button in voiceline command stuff`)
      .setFooter({ text: `If commands aren't listed here, that means they're not done/in beta/still testing` })
    await interaction.reply({ embeds: [messageEmbed], components: [row] });



  }
};