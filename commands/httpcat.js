const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { img } = require('./text/json/httpcat.json');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('httpcat')
    .setDescription(`Sends a random HTTP cat photo.`),
  async execute(interaction) {
    const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('cat')
          .setLabel('Send me another one')
          .setStyle(ButtonStyle.Secondary),
      );
    const catgenerator = img[Math.floor(Math.random() * img.length)];
    const cat1 = new EmbedBuilder()
      .setTitle(`HTTP Cat`)
      .setURL('https://http.cat')
      .setImage(catgenerator)
    console.log('[LOG] | "httpcat.js" was used')

    await interaction.reply({ embeds: [cat1], components: [row] })
    const filter = i => i.customId === 'cat' && i.user.id === interaction.user.id;

    const collector = interaction.channel.createMessageComponentCollector({ filter });

    collector.on('collect', async i => {
      const catgenerator2 = img[Math.floor(Math.random() * img.length)];
      const cat2 = new EmbedBuilder()
        .setTitle(`HTTP Cat`)
        .setURL('https://http.cat')
        .setImage(catgenerator2)
      return i.update({ embeds: [cat2], components: [row] })
    });
  }
}
