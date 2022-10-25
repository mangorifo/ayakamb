const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("hug")
    .setDescription("Hug.")
  	.addUserOption((option) =>
      option.setName("user").setDescription("who to hug?").setRequired(true)
    ),
  async execute(interaction) {
    const user = interaction.options.getMember("user");
    const hugmsg = [
      `<@${interaction.user.id}> hugs ${user} and ${user} hugs them back.`,
      `<@${interaction.user.id}> tried to hug ${user}, but ${user} didn't want to hug them...`,
      `<@${interaction.user.id}> hugs ${user}.`,
      `<@${interaction.user.id}> hugs ${user}, and ${user} tells <@${interaction.user.id}> to take a shower`,
      `<@${interaction.user.id}> hugs ${user} and they become best friends!`,
      `<@${interaction.user.id}> asks ${user} for hug, and ${user} hugs them`,
  
      ]
    const hgm2 = hugmsg[Math.floor(Math.random() * hugmsg.length)];
    return interaction.reply(hgm2);
  },
};