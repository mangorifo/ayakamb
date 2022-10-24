const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('help!'),
    async execute(interaction) {
      console.log('[LOG] | "help.js" was used')
    const messageEmbed = new EmbedBuilder()
	.setColor(`e4b400`)
	.setTitle(`All commands`)
	.setAuthor({ name: 'help command'})
	.setDescription(`**Fun, utilities**\n**/avatar**:\nsends an avatar url of your avatar or the specified user\n\n**/ban**:\nbans a user\n\n**/deadchat**:\nsends a "dead chat" gif\n\n**/help**:\nshows this embed\n\n**/hentai**:\nyou know what this command does...\n\n**/howemo**:\nmakes the bot guess how emotional you are\n\n**/howgay**:\nmakes the bot guess how gay you are\n\n**/howsus**:\nmakes the bot guess how sus you are\n\n**/howhorny**:\n:skull: (makes the bot guess how horny you are)\n\n**/kick**:\nkicks a user\n\n**/ping**:\nchecks the bot latency\n\n**/randomip**:\nsends a random IP address\n\n**/server**:\nsends information about the server\n\n**/sus**:\nsends a "sus" gif\n\n**/timeout**:\ntimes out a user\n\n**/unban:**\nunbans a user\n\n**/user**:\nsends info about you\n\n**Others**\n\n**/ayakavoiceline**:\nsends a random voiceline of Ayaka from the game "Genshin Impact"\n\n**/hutaovoiceline**:\nsends a random voiceline of Hu Tao from "Genshin Impact"`)
		return interaction.reply({ embeds: [messageEmbed], ephemeral: true});
    },
};