const { SlashCommandBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('say')
    .setDescription('say something...')
    .addStringOption((option) =>
      option
        .setName("text")
        .setDescription("what to say")
        .setRequired(true)
    ),
  async execute(interaction) {
    const t = interaction.options.getString("text");
    return interaction.reply(t)
  }
}