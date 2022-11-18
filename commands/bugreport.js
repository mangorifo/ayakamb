const { SlashCommandBuilder, WebhookClient, EmbedBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require('discord.js');
const { hookurl } = require('./text/bugapi.json');

module.exports = {
  data: new SlashCommandBuilder()
  .setName('bugreport')
  .setDescription('bugreport - in beta'),
  async execute(interaction) {
    const webhookClient = new WebhookClient({ url: hookurl })
    const modal = new ModalBuilder()
			.setCustomId('report')
			.setTitle('Bug report for AyakaMB');
		const title = new TextInputBuilder()
			.setCustomId('title')
			.setLabel("Bug title")
			.setStyle(TextInputStyle.Short);

		const description = new TextInputBuilder()
			.setCustomId('desc')
			.setLabel("Explain the bug below")
			.setStyle(TextInputStyle.Paragraph);

		const firstActionRow = new ActionRowBuilder().addComponents(title);
		const secondActionRow = new ActionRowBuilder().addComponents(description);
		modal.addComponents(firstActionRow, secondActionRow);
  
		await interaction.showModal(modal);
    
    if (interaction.isModalSubmit() !== true) {
    
      const titlebug = interaction.fields.getTextInputValue('title');
	const message = interaction.fields.getTextInputValue('desc');
console.log(title + message)
      const embed = new EmbedBuilder()
    .setTitle('new bug report sent')
    .setDescription('Title: ' + titlebug + '\n\nDescription:\n' + message)
      .setColor("#E4B400")
      webhookClient.send({
	embeds: [embed],
});
return interaction.followUp({ content: "Bug report sent.", ephemeral: true })
      }
  }
}