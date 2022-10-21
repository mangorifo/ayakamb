const { SlashCommandBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('howgay')
		.setDescription('how gay are you???')
		.addUserOption((option) =>
      option.setName("user").setDescription("if u wanna find out if the selected user is gay").setRequired(false)
    ),
	async execute(interaction) {
		const gay = [Math.floor(Math.random() * 101)];
    const user = interaction.options.getMember("user");
	const notgay = [
		`1024548642750726144`,
		`716491639857872928`,
		`675108484341301275`,
	]
		if (!user)
      return interaction.reply({
        content: `${user} is ${gay}% gay <a:senti:1031904003866509382>`,
        ephemeral: true,
      });
	  if (!notgay)
	  return interaction.reply({
		content: `${user} is ${gay}% gay <a:senti:1031904003866509382>`
	  })
		const whois = interaction.options.getString("who");
		
		console.log('[LOG] | "howgay.js" was used')
    
		return interaction.reply(`${user} is 0% gay <a:senti:1031904003866509382>`);
	},
};