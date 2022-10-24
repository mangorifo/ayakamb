const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('howhorny')
		.setDescription('how horni are you???')
		.addUserOption((option) =>
      option.setName("user").setDescription("if u wanna find out if the selected user is horny").setRequired(false)
    ),
	async execute(interaction) {
    const user = interaction.options.getMember("user");
    const horny = [Math.floor(Math.random() * 101)];
    const horn1 = new EmbedBuilder()
	.setColor(`e4b400`)
	.setTitle(`how horny command`)
	.setDescription(`<@${interaction.user.id}> is ${horny}% horny <a:senti:1031904003866509382>`)
    const horn2 = new EmbedBuilder()
	.setColor(`e4b400`)
	.setTitle(`how horny command`)
	.setDescription(`${user} is ${horny}% horny <a:senti:1031904003866509382>`)
    console.log('[LOG] | "howhornyp.js" was used')
		if (!user)
     return interaction.reply({ embeds: [horn1] })
		const whois = interaction.options.getString("who");
		return interaction.reply({ embeds: [horn2] })
	},
};