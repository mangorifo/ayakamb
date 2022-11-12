const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('howsus')
    .setDescription('how sus are you???')
    .addUserOption((option) =>
      option.setName("user").setDescription("if u wanna find out how sus the selected user is").setRequired(false)
    ),
  async execute(interaction) {
    const hs = [Math.floor(Math.random() * 101)];
    const user = interaction.options.getMember("user");
    const sus1 = new EmbedBuilder()
      .setColor(`e4b400`)
      .setTitle(`how sus command`)
      .setDescription(`<@${interaction.user.id}> is ${hs}% sus <a:senti:1031904003866509382>`)
    const sus2 = new EmbedBuilder()
      .setColor(`e4b400`)
      .setTitle(`how sus command`)
      .setDescription(`${user} is ${hs}% sus <a:senti:1031904003866509382>`)
    if (!user)
      return interaction.reply({ embeds: [sus1] })
    const whois = interaction.options.getString("who");

    console.log('[LOG] | "howsus.js" was used')
    return interaction.reply({ embeds: [sus2] });
  },
};