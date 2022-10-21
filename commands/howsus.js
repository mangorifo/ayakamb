const { SlashCommandBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('howsus')
		.setDescription('how sus are you???')
		.addUserOption((option) =>
      option.setName("user").setDescription("if u wanna find out how sus the selected user is").setRequired(false)
    ),
	async execute(interaction) {
    const user = interaction.options.getMember("user");
		if (!user)
      return interaction.reply({
        content: "that person is not a user",
        ephemeral: true,
      });
		const whois = interaction.options.getString("who");
		
		console.log('[LOG] | "howgay.js" was used')
    const hs = [Math.floor(Math.random() * 101)];
		return interaction.reply(`${user} is ${hs}% gay <a:senti:1031904003866509382>`);
	},
};