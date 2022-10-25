const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kiss")
    .setDescription("kiss.")
  	.addUserOption((option) =>
      option.setName("user").setDescription("who to kiss?").setRequired(true)
    ),
  async execute(interaction) {
    const user = interaction.options.getMember("user");
    const kismsg = [
      `<@${interaction.user.id}> kisses ${user} and ${user} slaps <@${interaction.user.id}>`,
      `<@${interaction.user.id}> tried to kiss ${user}...`,
      `<@${interaction.user.id}> kisses ${user}.`,
      `<@${interaction.user.id}> kissed ${user} and ${user} started to have a crush on the-`,
      `gay.`,
  
      ]
    const hgm2 = kismsg[Math.floor(Math.random() * kismsg.length)];
    return interaction.reply(hgm2);
  },
};