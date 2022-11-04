const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const mongoose = require('mongoose');
const nSchemaMsgMark = require('./models/keys');
module.exports = {
  data: new SlashCommandBuilder()
  .setName('getmarkedkey')
  .setDescription('get the info that you stored in a database'),
  async execute(interaction) {
    var currentdate = new Date(); 
var datetime = "Date Time: " + currentdate.getDate() + "/"
    + (currentdate.getMonth()+1)  + "/" 
    + currentdate.getFullYear() + " @ "  
    + currentdate.getHours() + ":"  
    + currentdate.getMinutes() + ":" 
    + currentdate.getSeconds();
 const user = interaction.options.getUser('target') || interaction.user
    
    
    nSchemaMsgMark.findOne({ keyowner: interaction.user.id }, async (err, data) => {
  if (data) {
    const MsgEmbed = new EmbedBuilder()
    .setTitle('MongoDB Stored Information')
    .setDescription(`Your latest marked info is:\n\nMarked on Guild: (ID) ${data["keytitle"]} (Guild name: \nMarked on Channel: (ID) ${data["channel"]}\nKey Owner: ${data["Name"]} (or "${data["UserName"]}")\nKey ID: ${data["StoreId"]}.${data["channel"]}.${data["keytitle"]}`)
    return interaction.reply({ embeds: [MsgEmbed] })
  }
    if (!data) {
      return interaction.reply('You do not have an existing MongoDB key (mark)')
    }})
                   }
}