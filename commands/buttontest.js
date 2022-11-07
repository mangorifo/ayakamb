const wait = require('node:timers/promises').setTimeout;
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
  .setName('buttontests')
  .setDescription('.')
  .addUserOption(option => option.setName('target').setDescription('who')),
  async execute(interaction) {
  const user = await interaction.client.users.fetch(
    interaction.options.getUser("target") || interaction.user,
    )
  const filter = i => i.customId === 'primary' && i.user.id === interaction.user.id;

const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });

collector.on('collect', async i => {
  
	await i.update({ content: 'this command works', components: [] });

});

collector.on('end', collected => console.log(`Collected ${collected.size} items`));
   const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('primary')
					.setLabel('Click me!')
					.setStyle(ButtonStyle.Primary),
			);
    interaction.reply({ content: 'Ok', components: [row] })
  }
}