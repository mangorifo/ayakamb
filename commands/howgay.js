const { SlashCommandBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('howgay')
		.setDescription('how gay are you???'),
	async execute(interaction) {
    const gay = [Math.floor(Math.random() * 101)];
		return interaction.reply(`you are: ${gay}% gay <a:senti:1031904003866509382>`);
    console.log(`gay lv: ${gay}%`)
	},
};