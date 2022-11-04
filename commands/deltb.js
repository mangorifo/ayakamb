const { SlashCommandBuilder } = require('discord.js');
const mongoose = require('mongoose');
const Schema = require('./models/keys');
module.exports = {
  data: new SlashCommandBuilder()
  .setName('deletemark')
  .setDescription('deletes your mark')
  async execute(interaction) {
    const within = interaction.client.ws.ping
		var currentdate = new Date(); 
   const user = interaction.options.getUser('target') || interaction.user
        Schema.findOneAndDelete({ keyowner: interaction.user.id }, async (err, data) => {})

    return interaction.reply(`deleted your key`)
    if (err) {
   console.log(`There is an error: ${err}`);
}
  }
} 