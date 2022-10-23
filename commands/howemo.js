const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('howemo')
		.setDescription('how emo are you???')
		.addUserOption((option) =>
      option.setName("user").setDescription("if u wanna find out if the selected user is emo").setRequired(false)
    ),
	async execute(interaction) {
    const user = interaction.options.getMember("user");
    const emoc = [Math.floor(Math.random() * 101)];
    const emo1 = new EmbedBuilder()
	.setColor(`00FF00`)
	.setTitle(`how emo command`)
	.setDescription(`<@${interaction.user.id}> is ${emoc}% emo <a:senti:1031904003866509382>`)
    const emo2 = new EmbedBuilder()
	.setColor(`00FF00`)
	.setTitle(`how emo command`)
	.setDescription(`${user} is ${emoc}% emo <a:senti:1031904003866509382>`)
    console.log('[LOG] | "howemo.js" was used')
		if (!user)
     return interaction.reply({ embeds: [emo1] })
		const whois = interaction.options.getString("who");
		return interaction.reply({ embeds: [emo2] })
	},
};