const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Provides information about the server.'),
	async execute(interaction) {
    console.log(`User ${interaction.member.user.tag} has used the server command in "${interaction.guild.name}"`)
		// interaction.guild is the object representing the Guild in which the command was run
		await interaction.reply(`Server name: ${interaction.guild.name}\nThis server has ${interaction.guild.memberCount} members.`);
	},
};