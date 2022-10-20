const { SlashCommandBuilder } = require('discord.js');
const sus = [
  "https://tenor.com/view/raccoon-sus-camera-ngl-thats-kinda-sus-bro-gif-22434863",
  "https://tenor.com/view/the-rock-rock-gif-21708339",
  "https://tenor.com/view/sus-gif-19042108",
  "https://tenor.com/view/among-us-sus-among-us-among-us-meme-sus-sussy-gif-25434008",
  "https://tenor.com/view/among-us-amogus-sus-impostor-freddy-gif-23523056",
  "https://tenor.com/view/sus-pizza-among-us-among-us-meme-sussy-gif-24581549",
  "https://tenor.com/view/amogus-mogus-gif-23074835",
  "https://tenor.com/view/sus-omgsooosus-gif-25629538",
  "https://tenor.com/view/the-rock-sus-the-rock-meme-the-rock-sus-meme-gif-23972805",
  "https://tenor.com/view/sus-among-us-gif-22210217",
  "https://tenor.com/view/sus-gif-20302681",
  "https://tenor.com/view/amogus-among-us-meme-impostor-sus-gif-20948491",
  "https://tenor.com/view/sus-omori-sussy-gif-gif-24107578",
  "https://tenor.com/view/when-the-impostor-is-sus-impostor-impostor-among-us-among-us-among-us-sus-gif-24712125",
]
module.exports = {
	data: new SlashCommandBuilder()
		.setName('sus')
		.setDescription('sus'),
	async execute(interaction) {
    const sussygif = sus[Math.floor(Math.random() * sus.length)];
		return interaction.reply(sussygif);
	},
};