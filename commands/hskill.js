const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const idcounthigh = require('./blacklist.json');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('skillissue')
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
      .setDescription(`<@${interaction.user.id}> has ${skillissue}% skill issue <a:senti:1031904003866509382>`)
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
    const issue5 = new EmbedBuilder()
      .setColor(`e4b400`)
      .setTitle(`howmuchskillissue command`)
      .setDescription(`${user} has 100% skill issues <a:senti:1031904003866509382> (skill issue overload)`)
    console.log('[LOG] | "hskill.js" was used')
    const usid = interaction.user.id
// ok
//    if (!user)
//      return interaction.reply({ embeds: [issue1] })
    if (skillissue == 0) {
      return interaction.reply({ embeds: [issue3] })
    }
    if (skillissue > 80) {
      return interaction.reply({ embeds: [issue4] })
    }
    interaction.reply({ embeds: [issue2] })
  },
};
