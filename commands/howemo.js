const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const idcounthigh = require('./blacklist.json')
module.exports = {
	data: new SlashCommandBuilder()
		.setName('howemo')
		.setDescription('how emo are you???')
		.addUserOption((option) =>
      option.setName("user").setDescription("if u wanna find out if the selected user is emo").setRequired(false)
    ),
	async execute(interaction) {
    const user = interaction.options.getMember("user");
    const emocount = [Math.floor(Math.random() * 101)];
    const emo1 = new EmbedBuilder()
	.setColor(`e4b400`)
	.setTitle(`how emo command`)
	.setDescription(`<@${interaction.user.id}> is ${emocount}% emo <a:senti:1031904003866509382>`)
    const emo2 = new EmbedBuilder()
	.setColor(`e4b400`)
	.setTitle(`how emo command`)
	.setDescription(`${user} is ${emocount}% emo <a:senti:1031904003866509382>`)
    console.log('[LOG] | "howemo.js" was used')
    const maxemo = new EmbedBuilder()
    .setColor('ff0000')
    .setTitle('The bot has encountered an error...')
    .setDescription(`Error: MAX_SAFE_INTEGER exceeded (max 19385919471047192838483829141273747477272827756864772832828374782919374829)\n\nMore details:\nCould not get constant "emocount" (${user})`)
    const maxemo2 = new EmbedBuilder()
    .setColor('ff0000')
    .setTitle('The bot has encountered an error...')
    .setDescription(`Error: MAX_SAFE_INTEGER exceeded (max 19385919471047192838483829141273747477272827756864772832828374782919374829)\n\nMore details:\nCould not get constant "emocount" (${interaction.user.id})`)
		if (!user.id === !idcounthigh) {
      return interaction.reply({ embeds: [maxemo] })
      if (!interaction.user.id === !idcounthigh) {
      return interaction.reply({ embeds: [maxemo2] })
    }
  else if (!user)
     return interaction.reply({ embeds: [emo1] })
		const whois = interaction.options.getString("who");
    
		return interaction.reply({ embeds: [emo2] })
	        }
       }
     }
  