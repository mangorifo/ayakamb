const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const idcounthigh = require('./blacklist.json');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('how')
    .setDescription('hmm')
    .addUserOption((option) =>
      option.setName("user").setDescription("if u wanna find out if the mentioned user is gay").setRequired(false)
    ),
  async execute(interaction) {

    const user = interaction.options.getMember("user") || interaction.user

    const gay = [Math.floor(Math.random() * 101)];
    const gay1 = new EmbedBuilder()
      .setColor(`e4b400`)
      .setTitle(`how gay command`)
      .setDescription(`<@${interaction.user.id}> is ${gay}% gay <a:senti:1031904003866509382>`)
    const gay2 = new EmbedBuilder()
      .setColor(`e4b400`)
      .setTitle(`how gay command`)
      .setDescription(`${user} is ${gay}% gay <a:senti:1031904003866509382>`)
    const gaymax = new EmbedBuilder()
      .setColor(`e4b400`)
      .setTitle(`how gay command`)
      .setDescription(`${user} is 100% gay <a:senti:1031904003866509382> (so gay)`)
    console.log('[LOG] | "howgay.js" was used')
    const usid = interaction.user.id

    // ok
    if (user === idcounthigh) {
      return interaction.reply({ embeds: [gaymax] })
    }
    const whois = interaction.options.getString("who");
    return interaction.reply({ embeds: [gay2] })
  },
};