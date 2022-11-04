const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const mongoose = require('mongoose');
const nSchemaIPRandom = require('./models/iplogs');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('randomip')
		.setDescription('random ip address'),
	async execute(interaction) {
    const user = interaction.options.getUser('target') || interaction.user
    console.log('[LOG] | "randomip.js" was used')
    const ip1 = [Math.floor(Math.random() * 255)];
    const ip2 = [Math.floor(Math.random() * 255)];
    const ip3 = [Math.floor(Math.random() * 255)];
    const ip4 = [Math.floor(Math.random() * 255)];
    const rnum = [Math.floor(Math.random() * 10000000000000)]
	nSchemaIPRandom.findOne({ keyowner: interaction.user.id }, async (err, data) => {

    var ipGenerateForLog = `${ip1}.${ip2}.${ip3}.${ip4}`
     
    new nSchemaIPRandom ({
      keyowner: interaction.user.id,
      keytitle: interaction.guild.id,
      Name: user,
      Generated: ipGenerateForLog,
      Id: `I:${rnum}`,
      Tag: interaction.user.tag
      
    }).save()
const messageEmbed = new EmbedBuilder()
	.setColor(`00FF00`)
	.setTitle('Generated IP Address')
	.setURL(`https://whatismyipaddress.com/ip/${ip1}.${ip2}.${ip3}.${ip4}`)
	.setAuthor({ name: 'Random IP Address'})
	.setDescription(`generated ip: ${ip1}.${ip2}.${ip3}.${ip4}\ncheck if ip is real: https://whatismyipaddress.com/ip/${ip1}.${ip2}.${ip3}.${ip4}`)
		return interaction.reply({ embeds: [messageEmbed] });
    }) 
    
	},
};