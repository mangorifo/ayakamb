const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('info')
    .setDescription('Get info about a user or a server!')
    .addSubcommand(subcommand =>
      subcommand
        .setName('user')
        .setDescription('Info about a user')
        .addUserOption(option => option.setName('user').setDescription('The user')))
    .addSubcommand(subcommand =>
      subcommand
        .setName('server')
        .setDescription('Info about the server')),
  async execute(interaction) {
if (interaction.options.getSubcommand() === 'user') {
         const user = interaction.options.getUser('user') || interaction.user
   if (user.displayAvatarURL().endsWith(".gif") == true) {
      const d = new EmbedBuilder()
        
        .setTitle(`${user.username}'s info`)
        .setDescription(user.username + '\'s account was made at <t:' + user.createdTimestamp.toString().slice(0, -3) + ':F>.')
        .setImage(user.displayAvatarURL().slice(0, -3) + 'gif?quality=lossless&size=1024')
        .setColor("#E4B400")
      return interaction.reply({ embeds: [d] })
    }
       const d = new EmbedBuilder()
        .setTitle(`${user.username}'s info`)
        .setDescription(user.username + '\'s account was made at <t:' + user.createdTimestamp.toString().slice(0, -3) + ':F>')
      .setImage(user.displayAvatarURL().slice(0, -4) + 'png?quality=lossless&size=1024')
      .setColor("#E4B400")
            return interaction.reply({ embeds: [d] })
        }
    if (interaction.options.getSubcommand() === 'server') {
            interaction.reply('you picked serber')
        }
  }
}