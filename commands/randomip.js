const { SlashCommandBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('randomip')
		.setDescription('random ip address'),
	async execute(interaction) {
    const ip1 = [Math.floor(Math.random() * 255)];
    const ip2 = [Math.floor(Math.random() * 255)];
    const ip3 = [Math.floor(Math.random() * 255)];
    const ip4 = [Math.floor(Math.random() * 255)];
		return interaction.reply(`generated ip: ${ip1}.${ip2}.${ip3}.${ip4}\ncheck if ip is real: https://whatismyipaddress.com/ip/${ip1}.${ip2}.${ip3}.${ip4}`);
	},
};