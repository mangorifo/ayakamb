const { SlashCommandBuilder } = require('discord.js');
const ded = [
  "https://tenor.com/view/dead-chat-dead-chat-skeleton-gif-25954239",
  "https://tenor.com/view/dead-group-chat-gif-24956654",
  "https://tenor.com/view/dead-chat-xd-gif-25076264",
  "https://tenor.com/view/dead-chat-xd-dead-chat-gif-22992239",
  "https://tenor.com/view/chat-dead-dead-chat-dead-group-chat-group-dead-gif-25389150",
  "https://tenor.com/view/dead-chat-gif-24901904",
  "https://tenor.com/view/dead-chat-black-guy-dead-chat-gif-25572501",
  "https://tenor.com/view/chat-is-dead-chat-dead-dear-diary-today-chat-is-dead-today-chat-is-dead-dead-chat-gif-24222927",
  "https://tenor.com/view/morsmutual-mmi-mmi-server-discord-mmi-mmi-discord-gif-24038243",
  "https://tenor.com/view/dead-chat-dead-chat-dead-chat-xdxdxd-xdxdxd-gif-23903924",
  "https://tenor.com/view/dead-chat-toyota-4runner-ded-chat-xd-dead-chat-xd-gif-26294289",
  "https://tenor.com/view/dead-chat-gif-21393460",
  "https://tenor.com/view/meme-dead-chat-alive-chat-discord-meme-gif-22432215",
  "https://tenor.com/view/xqc-dies-chat-dead-gif-25041263",
]
module.exports = {
  data: new SlashCommandBuilder()
    .setName('deadchat')
    .setDescription('sends a random "dead chat" gif so that you dont have to find one'),
  async execute(interaction) {
    console.log('[LOG] | "dedchat.js" was used')
    const deadchat = ded[Math.floor(Math.random() * ded.length)];
    return interaction.reply(deadchat);
  },
};