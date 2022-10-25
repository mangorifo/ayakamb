const { SlashCommandBuilder } = require("discord.js");
const { EmbedBuilder } = require('discord.js')
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
    "https://media.tenor.com/J7eGDvGeP9IAAAAC/enage-kiss-anime-hug.gif",
"https://media.tenor.com/kCZjTqCKiggAAAAC/hug.gif",  "https://media.tenor.com/8o4fWGwBY1EAAAAd/aharensan-aharen.gif",   "https://media.tenor.com/8BqG6yTLCLEAAAAC/anime.gif",
      ]
      
    const hgm2 = hugmsg[Math.floor(Math.random() * hugmsg.length)];
    const hgifoutput = huggif[Math.floor(Math.random() * huggif.length)];
    const exampleEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('huggy')
	.setDescription(hgm2)
	.setImage(hgifoutput)

interaction.reply({ embeds: [exampleEmbed] });
  },
};
