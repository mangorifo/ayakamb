const { SlashCommandBuilder } = require('discord.js');
const mongoose = require('mongoose');
const Schema = require('./client/mongo/models/keys.js');
module.exports = {
  data: new SlashCommandBuilder()
  .setName('atodbtes')
  .setDescription('test for database'),

  async execute(interaction) {
  
    Schema.findOne({ Guild: interaction.guild.id }, async (err, data) => {
  if (data) {
    respond({"content": `This server's special key is: ${data["SpecialKey"]}!`});
  } else {
    new Schema ({
      Guild: interaction.guild.id,
      SpecialKey: "Examples ✨"
    }).save()

    respond({"content": `Woah! This server doesn't have a key yet 👀 I've just set yours to the default key instead!`});
  }
});
  }
}