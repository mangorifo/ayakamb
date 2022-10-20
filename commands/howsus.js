const { SlashCommandBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('howsus')
		.setDescription('how sus are you???'),
	async execute(interaction) {
    console.log(`User ${interaction.member.user.tag} has used the howsus command in "${interaction.guild.name}"`)
    const sussy = [Math.floor(Math.random() * 101)];
		return interaction.reply(`you are: ${sussy}% sus <a:senti:1031904003866509382>`);
    console.log(`gay lv: ${sussy}%`)
	},
};