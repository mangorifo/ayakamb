const { SlashCommandBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('hentai')
		.setDescription('sus'),
	async execute(interaction) {
		return interaction.reply("Dear **horny** users,\n\nthis command has been removed <:massivel:1030779685031923743>, due to people spamming it (:skull:) and when people spam it, the bot stops working. use a different bot if youre really desperate for hentai (ex. Horny bot)\n:sparkles: Hall of shame:\nJaxie#7429 - Spamming hentai command\n33_9I#9930 - Also spamming the hentai command\n\n\n**NOTE**\nthis command is coming back soon (when i find an api)");
    console.log('someone attempted to use the hentai command...')
	}
};