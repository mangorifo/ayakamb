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
	.setDescription(`*new commands*\n\/skillissue: skill issue haha`)
  .setFooter(`If commands aren't listed here, that means they're not done/in beta/still testing`)
        return interaction.reply({ embeds: [messageEmbed] });
    },
};