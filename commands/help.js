const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('help!'),
    async execute(interaction) {
      console.log('[LOG] | "help.js" was used')
    const messageEmbed = new EmbedBuilder()
	.setColor(`blue`)
	.setTitle(`All commands`)
	.setAuthor({ name: 'help command'})
	.setDescription(`**Fun, utilities**\n/avatar: sends an avatar url of your avatar or the specified user\n/ban: bans a user\n/deadchat: sends a "dead chat" gif\n/help: shows this embed\n/hentai: you know what this command does...\n/howemo: makes the bot guess how emotional you are\n/howgay: makes the bot guess how gay you are\n/howsus: makes the bot guess how sus you are\n/kick: kicks a user\n/ping: checks the bot latency\n/randomip: sends a random IP address\n/server: sends information about the server\n/sus: sends a "sus" gif\n/timeout: times out a user\n/unban: unbans a user\n/user: sends info about you\n\n**Others**\n\n/ayakavoiceline: sends a random voiceline of Ayaka from the game "Genshin Impact"\n/hutaovoiceline: sends a random voiceline of Hu Tao from "Genshin Impact"`)
		return interaction.reply({ embeds: [messageEmbed] });
    },
};