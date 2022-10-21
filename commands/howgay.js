const { SlashCommandBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('howgay')
		.setDescription('how gay are you???')
		.addUserOption((option) =>
      option.setName("user").setDescription("if u wanna find out if the mentioned user is gay").setRequired(false)
    ),
	async execute(interaction) {
		if (!user)
      return interaction.reply({
        content: "that is not a user",
        ephemeral: true,
      });
		const whois = interaction.options.getString("who");
		
		console.log('[LOG] | "howgay.js" was used')
    const gay = [Math.floor(Math.random() * 101)];
		return interaction.reply(`you are: ${gay}% gay <a:senti:1031904003866509382>`);
	},
};