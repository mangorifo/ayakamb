const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
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
            const MessageEmbed = new EmbedBuilder()
            .setTitle('Error')
            .setDescription(`${user} does not have any saved marks yet. Use </markcurrentinfo:1037988535275372555> to make one`)
            .setColor('FF0000')
            interaction.reply({ embeds: [MessageEmbed] })
          }
          if (data) {
            const MessageEmbed = new EmbedBuilder()
            .setTitle(`Success`)
            .setDescription(`${user}'s mark has been deleted.`)
            .setColor('00FF00')
            interaction.reply({ embeds: [MessageEmbed] })
         }})
  }
}