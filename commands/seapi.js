const { request } = require('undici');
const {
  SlashCommandBuilder,
  EmbedBuilder
} = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
  .setName('e')
  .setDescription('test for web api'),
async execute(interaction) {
    const g = await request('https://ayaka-website.theonesaya.repl.co/api/bot/test');
    const { num } = await g.body.json();
    return interaction.reply(num + " ")
  }
}