const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('info')
    .setDescription('Get info about a user or a server!')
    .addSubcommand(subcommand =>
      subcommand
        .setName('duser')
        .setDescription('Info about a user')
        .addUserOption(option => option.setName('target').setDescription('The user')))
    .addSubcommand(subcommand =>
      subcommand
        .setName('server')
        .setDescription('Info about the server')),
  async execute(interaction) {
if (interaction.options.getSubcommand() === 'duser') {
            interaction.reply('you picked user')
        }
    if (interaction.options.getSubcommand() === 'server') {
            interaction.reply('you picked serber')
        }
  }
}