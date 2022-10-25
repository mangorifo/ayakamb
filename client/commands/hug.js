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
      `${user} hugs <@${interaction.user.id}> before <@${interaction.user.id}> hugged them. ❤️`,
      ]
    const huggif = [
    "https://tenor.com/view/enage-kiss-anime-hug-kisara-gif-26118528",
     "https://tenor.com/view/hug-gif-25588769",
    "https://tenor.com/view/aharensan-aharen-anime-hug-anime-hug-gif-25343437",
    "https://tenor.com/view/anime-gif-26077129",
      ]
      
    const hgm2 = hugmsg[Math.floor(Math.random() * hugmsg.length)];
    interaction.reply(hgm2)
    return interaction.reply(huggif);
  },
};
