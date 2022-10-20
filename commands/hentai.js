const { SlashCommandBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('hentai')
		.setDescription('sus'),
	async execute(interaction) {
		return interaction.reply("This command is returning very soon...");
    console.log('someone attempted to use the hentai command...')
	}
};