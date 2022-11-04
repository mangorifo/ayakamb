const { SlashCommandBuilder } = require('discord.js');
const mongoose = require('mongoose');
const Schema = require('./models/keys');
module.exports = {
  data: new SlashCommandBuilder()
  .setName('deletemark')
  .setDescription('deletes your mark'),
  async execute(interaction) {
    const within = interaction.client.ws.ping
		var currentdate = new Date(); 
   const user = interaction.options.getUser('target') || interaction.user
        Schema.findOneAndDelete({ keyowner: interaction.user.id }, async (err, data) => {
          if (!data) {
            interaction.reply('You do not have any saved marks yet')
          }
          if (data) {
            interaction.reply(`Your key has been deleted from the database.`)
          }})
  }
}