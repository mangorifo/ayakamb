const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const idcounthigh = require('./blacklist.json');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('howmuchskillissue')
    .setDescription('how much skill issue?')
    .addUserOption((option) =>
      option.setName("user").setDescription("if u wanna find out if the selected user has skill issues").setRequired(false)
    ),
  async execute(interaction) {

    const user = interaction.options.getMember("user") || interaction.user
    var skillissue = [Math.floor(Math.random() * 101)];
    const issue1 = new EmbedBuilder()
      .setColor(`e4b400`)
      .setTitle(`howmuchskillissue command`)
      .setDescription(`<@${interaction.user.id}> has ${skillissue}% skill issue <a:senti:1031904003866509382> (omg no skill issues??)`)
    const issue2 = new EmbedBuilder()
      .setColor(`e4b400`)
      .setTitle(`howmuchskillissue command`)
      .setDescription(`${user} has ${skillissue}% skill issues <a:senti:1031904003866509382>`)
    const issue3 = new EmbedBuilder()
      .setColor(`e4b400`)
      .setTitle(`howmuchskillissue command`)
      .setDescription(`${user} has ${skillissue}% skill issues <a:senti:1031904003866509382> (no skill issues?)`)
    const issue4 = new EmbedBuilder()
      .setColor(`e4b400`)
      .setTitle(`howmuchskillissue command`)
      .setDescription(`${user} has ${skillissue}% skill issues <a:senti:1031904003866509382> (skill issue overload)`)

const issuemax1 = new EmbedBuilder()
    .setColor(`FF0000`)
    .setTitle(`The bot has encountered an error...`)
    .setDescription(`Error: MAX_SAFE_INTEGER exceeded (max 19385919471047192838483829141273747477272827756864772832828374782919374829)\n\nMore details:\nCould not get variable "skillissue" (${user})`)
    const issuemax2 = new EmbedBuilder()
    .setColor(`FF0000`)
    .setTitle(`The bot has encountered an error...`)
    .setDescription(`Error: MAX_SAFE_INTEGER exceeded (max 19385919471047192838483829141273747477272827756864772832828374782919374829)\n\nMore details:\nCould not get variable "skillissue" (${interaction.user.id})`)
    const nspu = new EmbedBuilder()
    .setColor(`FF0000`)
    .setTitle(`The bot has encountered an error...`)
    .setDescription(`Error: MAX_SAFE_INTEGER exceeded (max 19385919471047192838483829141273747477272827756864772832828374782919374829)\n\nMore details:\nCould not get variable "skillissue" `)
    console.log('[LOG] | "hskill.js" was used')
    const usid = interaction.user.id
    // ok
    //    if (!user)
    //      return interaction.reply({ embeds: [issue1] })

    if (skillissue === 0) {
      return interaction.reply({ embeds: [issue3] })
    }
    if (skillissue < 10) {
      return interaction.reply({ embeds: [issue1] })
    }
    if (skillissue > 80) {
      return interaction.reply({ embeds: [issue4] })
  }
    if (skillissue === 100) {
      return interaction.reply({ embeds: [nspu] })
    }
    if (!user.id === !idcounthigh) {
      return interaction.reply({ embeds: [issuemax1] })
    }
    if (interaction.user.id === !idcounthigh) {
      return interaction.reply({ embeds: [issuemax2] })
    }
    return interaction.reply({ embeds: [issue2] })
  },
};
