const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { vayakal } = require('./text/json/ayaka.json');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('ayakavoiceline')
		.setDescription(`Sends a random voiceline of Ayaka from Genshin Impact. (this command's output is written manually)`),
	async execute(interaction) {
    const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('ayaka')
					.setLabel('Send me another one')
					.setStyle(ButtonStyle.Secondary),
			);
    const voiceline = vayakal[Math.floor(Math.random() * vayakal.length)];
    const VoicelineEmbed = new EmbedBuilder()
      .setAuthor({ name: `Kamisato Ayaka`})
      .setDescription(voiceline)
    console.log('[LOG] | "ayakavl.js" was used')

		await interaction.reply({ embeds: [VoicelineEmbed], components: [row] })
    const filter = i => i.customId === 'ayaka' && i.user.id === interaction.user.id;

const collector = interaction.channel.createMessageComponentCollector({ filter });

collector.on('collect', async i => {
  const vl2 = vayakal[Math.floor(Math.random() * vayakal.length)];
    const VLE = new EmbedBuilder()
      .setAuthor({ name: `Kamisato Ayaka`})
      .setDescription(vl2)
	await i.update({ embeds: [VLE], components: [row] })});
  }
}
