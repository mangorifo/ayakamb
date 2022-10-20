const { SlashCommandBuilder } = require("discord.js");
const HMtai = require("hmtai");
const hmtai = new HMtai();
const Discord = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("hentai")
    .setDescription("Sends a hentai photo"),
  async execute(interaction) {
    return interaction.reply(await hmtai.nsfw.hentai());
  },
}