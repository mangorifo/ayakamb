const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Get the avatar URL of the selected user, or your own avatar.')
		.addUserOption(option => option.setName('target').setDescription('The user\'s avatar to show')),
	async execute(interaction) {
    console.log(`User ${interaction.member.user.tag} has used the avatar command in "${interaction.guild.name}"`)
		const user = interaction.options.getUser('target');
		if (user) return interaction.reply(`${user.username}'s avatar:\n${user.displayAvatarURL()}`);
		return interaction.reply(`Your avatar: ${interaction.user.displayAvatarURL()}`);
	},
};