const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const mongoose = require('mongoose');
const nSchemaMsgMark = require('./models/keys');
module.exports = {
  data: new SlashCommandBuilder()
  .setName('markcurrentinfo')
  .setDescription('puts all info the bot can find into a database')
  .setDMPermission(false)
  .addUserOption(option => option.setName('target').setDescription('Mark their data (💀)')),
  async execute(interaction) {
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}/${month}/${year}`;
     const user = interaction.options.getUser('target') || interaction.user
    const c = [Math.floor(Math.random() * 99999999999999)];
    nSchemaMsgMark.findOne({ keyowner: user.id }, async (err, data) => {
    const NewMark = new EmbedBuilder()
      .setTitle(`Created a new mark for ${user.username}`)
      .setDescription(`Created a new mark for ${user.tag}, which contains most of info the bot can get. Use </getmarkedkey:1037988535275372555> to see it`)
      .setColor('00FF00')
      const MarkAlreadyExists = new EmbedBuilder()
      .setTitle('Error')
      .setDescription(`${user} has already added data/already has data added to the MongoDB database. Use </deletemark:1038004712471003136> to delete it, or </getmarkedkey:1037988535275372555> to see it`)
      .setColor('FF0000')
      const AttemptedMarkBot = new EmbedBuilder()
      .setTitle('Error')
      .setDescription(`You cannot add marks to bots..`)
      .setColor('FF0000')
      if (data) {
        return interaction.reply({ embeds: [MarkAlreadyExists] })
      }
      if (user.bot === true) {
        return interaction.reply({ embeds: [AttemptedMarkBot] })
      }
      
    if (user) {
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
      AvatarImg: user.displayAvatarURL() + '?quality=lossless&size=1024',
      StoredAt: Date.now().toString().slice(0, -3),
    }).save()
    interaction.reply({ embeds: [NewMark] })
    }})    
  }
}