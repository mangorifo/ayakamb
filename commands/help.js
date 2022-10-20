const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('help!'),
    async execute(interaction) {
      console.log(`User ${interaction.member.user.tag} has used the help command in "${interaction.guild.name}"`)
    const messageEmbed = new EmbedBuilder()
	.setColor(`blue`)
	.setTitle(`All commands`)
	.setAuthor({ name: 'help command'})
	.setDescription(`/avatar: sends an avatar url of your avatar or the specified user\n/ayakavoiceline: sends a random voiceline from Ayaka from the game "Genshin Impact"\n/ban: bans a user\n/deadchat: sends a "dead chat" gif\n/help: shows this embed\n/hentai: you know what this command does...\n/howgay: makes the bot guess how gay you are\n/howsus: makes the bot guess how sus you are\n/kick: kicks a user\n/ping: checks the bot latency\n/randomip: sends a random IP address\n/server: sends information about the server\n/sus: sends a "sus" gif\n/timeout: times out a user\n/unban: unbans a user\n/user: sends info about you`)
		return interaction.reply({ embeds: [messageEmbed] });
    },
};