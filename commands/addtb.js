const { SlashCommandBuilder } = require('discord.js');
const mongoose = require('mongoose');
const nSchemaMsgMark = require('./models/keys');
module.exports = {
  data: new SlashCommandBuilder()
  .setName('markcurrentinfo')
  .setDescription('puts all info the bot can find into a database')
  .setDMPermission(false)
  .addUserOption(option => option.setName('target').setDescription('Mark their data (💀)')),
  async execute(interaction) {

      const user = interaction.options.getUser('target') || interaction.user
    const c = [Math.floor(Math.random() * 99999999999999)];
    const cget = c
    nSchemaMsgMark.findOne({ keyowner: user.id }, async (err, data) => {

      if (data) {
        return interaction.reply(`${user} has already added data/already has data added to the MongoDB database. Use </deletemark:1038004712471003136> to delete it, or </getmarkedkey:1037988535275372555> to see it`)
      }
      if (user.bot === true) {
        return interaction.reply('You can\'t add marks to bots...')
      }
    new nSchemaMsgMark ({
      keyowner: user.id,
      keymadeog: interaction.guild.id,
      channel: interaction.channel.id,
      Name: user,
      StoreId: `${user.id}:${c}`,
      UserName: user.tag,
      HasNitro: user.premium,
      GuildName: interaction.guild.name,
      AcMadeAt: user.createdTimestamp.toString().slice(0, -3),
    }).save()

    return interaction.reply(`Created a new mark for ${user.tag}, which contains most of info the bot can get. Use </getmarkedkey:1037988535275372555> to see it`)
    }) 
  }
}