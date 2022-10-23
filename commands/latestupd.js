const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('changelog')
        .setDescription('View latest bot update'),
    async execute(interaction) {
      const messageEmbed = new EmbedBuilder()
	.setColor(`blue`)
	.setTitle(`Changelog`)
	.setAuthor({ name: 'latest update of AyakaMBot'})
	.setDescription(`*New commands*\n/latestupd: shows bot's latest update\n\n/howemo: :skull:`)
        console.log('[LOG] | "latestupd.js" was used')
        return interaction.reply({ embeds: [messageEmbed] });
    },
};