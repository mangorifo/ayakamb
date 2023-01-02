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
        .setDescription("search for an error code (IN NUMBERS!)")
        .setRequired(false)
    )
    .addStringOption((option) =>
      option
        .setName("listall")
        .setDescription("type in 'true' to show all. Any other input will send a normal image.")
        .setRequired(false)
    ),
  async execute(interaction) {
    var listallcodes = `All codes:\n"100", "101", "102", "200", "201", "202", "203", "204", "206", "207", "300", "301", "302", "303", "304", "305", "307", "308", "400", "401", "402", "403", "404", "405", "406", "407", "408", "409", "410", "411", "412", "413", "414", "415", "416", "417", "418", "420", "421", "422", "423", "424", "425", "426", "429", "431", "444", "450", "450", "451", "497", "498", "499", "500", "501", "502", "503", "504", "506", "507", "508", "509", "510", "511", "521", "522", "523", "525", "599"`
    const squery = interaction.options.getString("search");
    const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('cat')
          .setLabel('Send me another one')
          .setStyle(ButtonStyle.Secondary),
      );
    if (squery) {
      if (isc.includes(squery)) {
        const mc1 = new EmbedBuilder()
          .setTitle(`HTTP Cat`)
          .setURL(`https://http.cat/${squery}`)
          .setImage('https://http.cat/' + squery)
          .setDescription('HTTP Error code searched: ' + squery)
          .setColor('#e4b400')
        return interaction.reply({ embeds: [mc1] });
      }
      if (!isc.includes(squery)) {
        return interaction.reply(`That error code does not exist. (${squery})`);
      }
    }
    if (interaction.options.getString("listall") == "true") {
      return interaction.reply(listallcodes)
    }
    if (!squery) {
      const catgenerator = img[Math.floor(Math.random() * img.length)];
      const cat1 = new EmbedBuilder()
        .setTitle(`HTTP Cat`)
        .setURL(catgenerator.toString().slice(0, -4))
        .setImage(catgenerator)
        .setColor('#e4b400')
      console.log('[LOG] | "httpcat.js" was used')

      await interaction.reply({ embeds: [cat1], components: [row] })
      const filter = i => i.customId === 'cat' && i.user.id === interaction.user.id;

      const collector = interaction.channel.createMessageComponentCollector({ filter });

      collector.on('collect', async i => {
        const catgenerator2 = img[Math.floor(Math.random() * img.length)];
        const cat2 = new EmbedBuilder()
          .setTitle(`HTTP Cat`)
          .setURL(catgenerator2.toString().slice(0, -4))
          .setImage(catgenerator2)
          .setColor('#e4b400')
        await i.update({ embeds: [cat2], components: [row] })
      });
    }
  }
}
