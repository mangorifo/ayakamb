const { SlashCommandBuilder } = require("discord.js");
const nHentai = require('shentai')
const sHentai = new nHentai
const Discord = require('discord.js');
const doujin = await sHentai.getRandom()
module.exports = {
  data: new SlashCommandBuilder()
    .setName("hentai")
    .setDescription("Sends a hentai photo"),
  async execute(interaction) {
    return interaction.reply(doujin);
  },
};