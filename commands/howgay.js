const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('howgay')
		.setDescription('how gay are you???')
		.addUserOption((option) =>
      option.setName("user").setDescription("if u wanna find out if the mentioned user is gay").setRequired(false)
    ),
	async execute(interaction) {
    const user = interaction.options.getMember("user");
    const gay = [Math.floor(Math.random() * 101)];
    const gay1 = new EmbedBuilder()
	.setColor(`00FF00`)
	.setTitle(`how gay command`)
	.setDescription(`<@${interaction.user.id}> is ${gay}% gay <a:senti:1031904003866509382>`)
    const gay2 = new EmbedBuilder()
	.setColor(`00FF00`)
	.setTitle(`how gay command`)
	.setDescription(`${user} is ${gay}% gay <a:senti:1031904003866509382>`)
    console.log('[LOG] | "howgay.js" was used')
		if (!user)
     return interaction.reply({ embeds: [gay1] })
		const whois = interaction.options.getString("who");
		return interaction.reply({ embeds: [gay2] })
	},
};