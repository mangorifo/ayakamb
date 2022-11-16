const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { img } = require('./text/json/httpcat.json');
const { isc } = require('./text/json/isExistingCode.json')
module.exports = {
  data: new SlashCommandBuilder()
    .setName('httpcat')
    .setDescription(`Sends a random HTTP cat photo.`)
    .addStringOption((option) =>
      option
        .setName("search")
        .setDescription("search for an error code")
        .setRequired(false)
    ),
  async execute(interaction) {
  const squery = interaction.options.getString("search");
    const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('cat')
          .setLabel('Send me another one')
          .setStyle(ButtonStyle.Secondary),
      );

    if (isc.includes(squery)) { 
      return interaction.reply(`https://http.cat/${squery}`);
    }
    if (!isc.includes(squery)) { 
      return interaction.reply(`That error code does not exist. (${squery})`);
    }
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
