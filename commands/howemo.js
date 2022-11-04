const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const idcounthigh = require('./blacklist.json');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('howemo')
    .setDescription('how emo are you???')
    .addUserOption((option) =>
      option.setName("user").setDescription("if u wanna find out if the selected user is emo").setRequired(false)
    ),
  async execute(interaction) {
    const user = interaction.options.getMember("user") || interaction.user;
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
  },
};