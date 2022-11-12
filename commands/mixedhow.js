const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const idcounthigh = require('./blacklist.json');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('how')
    .setDescription('hmm')

    .addSubcommand(subcommand =>
      subcommand
        .setName('gay')
        .setDescription('how gay are you?')
        .addUserOption((option) =>
          option.setName("user").setDescription("hm").setRequired(false))
          )
    .addSubcommand(subcommand =>
      subcommand
        .setName('sus')
        .setDescription('how sus are you?')
        .addUserOption((option) =>
          option.setName("user").setDescription("hm").setRequired(false))
          )
    .addSubcommand(subcommand =>
      subcommand
        .setName('horny')
        .setDescription('u horny fr')
        .addUserOption((option) =>
          option.setName("user").setDescription("hm").setRequired(false))
        )
        .addSubcommand(subcommand =>
          subcommand
             .setName('skillissue')
             .setDescription('skill tissue')
             .addUserOption((option) =>
                option.setName("user").setDescription("hm").setRequired(false))
              )
        .addSubcommand(subcommand =>
          subcommand
            .setName('emo')
            .setDescription('emotional')
           .  addUserOption((option) =>
              option.setName("user").setDescription("hm").setRequired(false))
            ),
      async execute(interaction) {

      const user = interaction.options.getMember("user") || interaction.user
    if(interaction.options.getSubcommand() === 'gay') {
  const gaycount = [Math.floor(Math.random() * 101)];
  const gay1 = new EmbedBuilder()
    .setColor(`e4b400`)
    .setTitle(`how gay command`)
    .setDescription(`<@${interaction.user.id}> is ${gaycount}% gay <a:senti:1031904003866509382>`)
  const gay2 = new EmbedBuilder()
    .setColor(`e4b400`)
    .setTitle(`how gay command`)
    .setDescription(`${user} is ${gaycount}% gay <a:senti:1031904003866509382>`)
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
}
if (interaction.options.getSubcommand() === 'sus') {
  const hs = [Math.floor(Math.random() * 101)];
  const sus1 = new EmbedBuilder()
    .setColor(`e4b400`)
    .setTitle(`how sus command`)
    .setDescription(`<@${interaction.user.id}> is ${hs}% sus <a:senti:1031904003866509382>`)
  const sus2 = new EmbedBuilder()
    .setColor(`e4b400`)
    .setTitle(`how sus command`)
    .setDescription(`${user} is ${hs}% sus <a:senti:1031904003866509382>`)

  interaction.reply({ embeds: [sus2] })

  console.log('[LOG] | "howsus.js" was used')
}
if (interaction.options.getSubcommand() === 'horny') {
  const horny = [Math.floor(Math.random() * 101)];
  const horn1 = new EmbedBuilder()
    .setColor(`e4b400`)
    .setTitle(`how horny command`)
    .setDescription(`<@${interaction.user.id}> is ${horny}% horny <a:senti:1031904003866509382>`)
  const horn2 = new EmbedBuilder()
    .setColor(`e4b400`)
    .setTitle(`how horny command`)
    .setDescription(`${user} is ${horny}% horny <a:senti:1031904003866509382>`)
  const horn3 = new EmbedBuilder()
    .setColor(`e4b400`)
    .setTitle(`how horny command`)
    .setDescription(`${user} is ${horny}% horny <a:senti:1031904003866509382> (fr dude ur so horny)`)
  console.log('[LOG] | "howhornyp.js" was used')
  if (horny === 100) {
    interaction.reply({ embeds: [horn3] })
  }
  interaction.reply({ embeds: [horn2] })
}
  if (interaction.options.getSubcommand() === 'skillissue') {
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
    if (skillissue == 0) {
      return interaction.reply({ embeds: [issue3] })
    }
    if (skillissue > 80) {
      return interaction.reply({ embeds: [issue4] })
    }
    interaction.reply({ embeds: [issue2] })
    }
    if (interaction.options.getSubcommand() === 'emo') {
      const emoc = [Math.floor(Math.random() * 101)];
      const emo1 = new EmbedBuilder()
        .setColor(`00FF00`)
        .setTitle(`how emo command`)
        .setDescription(`<@${interaction.user.id}> is ${emoc}% emo <a:senti:1031904003866509382>`)
      const emo2 = new EmbedBuilder()
        .setColor(`00FF00`)
        .setTitle(`how emo command`)
        .setDescription(`${user} is ${emoc}% emo <a:senti:1031904003866509382>`)
      const maxemo = new EmbedBuilder()
        .setColor(`FF0000`)
        .setTitle(`The bot has encountered an error...`)
        .setDescription(`MAX_SAFE_INTEGER has exceeded\n\n**More details:**\nCould not get constant "emoc" for ${user}`)
      console.log('[LOG] | "howemo.js" was used')
  
      if (user.id === idcounthigh) {
        return interaction.reply({ embeds: [maxemo] })
      }
  
      return interaction.reply({ embeds: [emo2] })
    }
  },
};