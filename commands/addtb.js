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
    const c = [Math.floor(Math.random() * 99999999999999)];
    const cget = c
    nSchemaMsgMark.findOne({ keyowner: interaction.user.id }, async (err, data) => {

      if (data) {
        return interaction.reply('You already added data to the MongoDB database. Use </deletemark:1038004712471003136> to delete it, or </getmarkedkey:1037988535275372555> to see it')
      }
    new nSchemaMsgMark ({
      keyowner: interaction.user.id,
      keytitle: interaction.guild.id,
      channel: interaction.channel.id,
      Name: user,
      StoreId: `${user.id}:${c}`,
      UserName: interaction.user.tag,
      HasNitro: interaction.user.premium,
      GuildName: interaction.guild.name,
    }).save()

    return interaction.reply(`Created a new mark, which contains most of info the bot can get. Use </getmarkedkey:1037988535275372555> to see it`)
    }) 
  }
}