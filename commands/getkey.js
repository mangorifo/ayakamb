const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const mongoose = require('mongoose');
const nSchemaMsgMark = require('./models/keys');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('getmarkedkey')
    .setDescription('get the info that you stored in a database')
    .addUserOption(option => option.setName('target').setDescription('View their marked data if they have marked it')),
  async execute(interaction) {
    var currentdate = new Date();
    var datetime = "Date Time: " + currentdate.getDate() + "/"
      + (currentdate.getMonth() + 1) + "/"
      + currentdate.getFullYear() + " @ "
      + currentdate.getHours() + ":"
      + currentdate.getMinutes() + ":"
      + currentdate.getSeconds();
    const user = interaction.options.getUser('target') || interaction.user


    nSchemaMsgMark.findOne({ keyowner: user.id }, async (err, data) => {
      if (data) {
        const MsgEmbed = new EmbedBuilder()
          .setColor('e4b400')
          .setTitle(`Marked information for ${user.username}`)
          .setDescription(`${user.username}'s latest marked info is:\n\nMarked on Guild: (ID) ${data["keymadeog"]} (Guild name: ${data["GuildName"]})\nMarked on Channel: (ID) ${data["channel"]}\nKey Owner: ${data["Name"]} (written username: "${data["UserName"]}")\nMarked at: <t:${data["StoredAt"]}:F>\nKey ID: ${data["StoreId"]}`)
          .setImage(data["AvatarImg"])
          .setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() })
        return interaction.reply({ embeds: [MsgEmbed] })
      }
      if (!data) {
        const MsgEmbed = new EmbedBuilder()
          .setColor('FF0000')
          .setTitle(`Error`)
          .setDescription(`${user.username} does not have an existing mark. Make one using </markcurrentinfo:1037988535275372555>`)
        .setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() })
        return interaction.reply({ embeds: [MsgEmbed] })
      }
    })
  }
}