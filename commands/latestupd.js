const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('changelog')
        .setDescription('View latest bot update'),
    async execute(interaction) {
      const messageEmbed = new EmbedBuilder()
	.setColor(`00FF00`)
	.setTitle(`Changelog`)
	.setAuthor({ name: 'latest update of AyakaMBot'})
	.setDescription(`*update commands*\n\nupdate help command to show help about one command only`)
        return interaction.reply({ embeds: [messageEmbed] });
    },
};