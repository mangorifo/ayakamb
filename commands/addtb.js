const { SlashCommandBuilder } = require('discord.js');
const mongoose = require('mongoose');
const nSchemaMsgMark = require('./models/keys');
module.exports = {
  data: new SlashCommandBuilder()
  .setName('markcurrentinfo')
  .setDescription('puts all info the bot can find into a database')
  .setDMPermission(false),
  async execute(interaction) {

      const user = interaction.options.getUser('target') || interaction.user
    const c = [Math.floor(Math.random() * 99999999)];
    const cget = c
    nSchemaMsgMark.findOne({ keyowner: interaction.user.id }, async (err, data) => {

      if (data) {
        return interaction.reply('You already added data to the MongoDB database. Use /deletemark to delete it, or /getmarkedkey to see it')
      }
    new nSchemaMsgMark ({
      keyowner: interaction.user.id,
      keytitle: interaction.guild.id,
      channel: interaction.channel.id,
      Name: user,
      StoreId: `${user.id}.${interaction.channel.id}.${interaction.guild.id}.${c}:`,
      UserName: interaction.user.tag
    }).save()

    return interaction.reply(`made a new mark/reset your current mark`)
    }) 
  }
}