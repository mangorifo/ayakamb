const { SlashCommandBuilder } = require("discord.js");
const HMtai = require("hmtai");
const hmtai = new HMtai();
const Discord = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("hentai")
    .setDescription("Sends a hentai photo"),
  async execute(interaction) {
    console.log(`User ${interaction.user.username} has used the hentai command in "${interaction.guild.name}"`)
    if (interaction.channel.nsfw) {
            return interaction.reply(await hmtai.nsfw.hentai());
        } else 
      return interaction.reply({
        content: `this command only works on nsfw channels`,
        ephemeral: true,
      }); 
  },
};