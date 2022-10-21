const { SlashCommandBuilder } = require("discord.js");
const HMtai = require("hmtai");
const hmtai = new HMtai();
const Discord = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("hentai")
    .setDescription("Sends a hentai photo"),
  async execute(interaction) {
    console.log('[LOG] | "hentai.js" was used')
    if (interaction.channel.nsfw) {
            return interaction.reply(await hmtai.nsfw.hentai());
        } else 
      return interaction.reply({
        content: `this command only works on nsfw channels ("age-restricted channel)"`,
        ephemeral: true,
      }); 
  },
};