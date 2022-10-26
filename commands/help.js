const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('help!')
      .addStringOption(option =>
		option.setName('commandname')
			.setDescription('command name if uou need help with tht command (BETA, UNFINISHED!)')
			.setRequired(false)
			.addChoices(
				{ name: '/avatar', value: 'tes1' },
        { name: '/ayakavoiceline', value: 'tes18'},
				{ name: '/ban', value: 'tes2' },
				{ name: '/deadchat', value: 'tes3' },
        { name: '/hentai', value: 'tes4' },
        { name: '/how commands', value: 'tes5'},
        { name: '/hug', value: 'tes6' },
        { name: '/hutaovoiceline', value: 'tes7'},
        { name: '/kick', value: 'tes8' },
        { name: '/kiss', value: 'tes9' },
        { name: '/changelog', value: 'tes10'},
        { name: '/ping', value: 'tes11' },
        { name: '/randomip', value: 'tes12'},
        { name: '/server', value: 'tes13' },
        { name: '/sus', value: 'tes14' },
        { name: '/timeout', value: 'tes15'},
        { name: '/unban', value: 'tes16'},
        { name: '/user', value: 'tes17'},
        { name: '/joke', value: 'tes19'},
        { name: '/rhelp', value: 'tes20'}
			)),
    async execute(interaction) {
     const cmd = interaction.options.getString('commandname');
      console.log('[LOG] | "help.js" was used')
     if (interaction.options.getString('commandname') == 'tes1') {
       return interaction.reply('/avatar:\nsends the avatar link of your avatar or someone elses')
     }
     else if (interaction.options.getString('commandname') == 'tes2') {
       return interaction.reply('/ban:\nbans a user')
     }
     if (interaction.options.getString('commandname') == 'tes3') {
       return interaction.reply('/deadchat:\nsends a "dead chat" gif')
     }
     else if (interaction.options.getString('commandname') == 'tes4') {
       return interaction.reply('/hentai:\nsends a hentai picture. (channel must be an age restricted channel)')
     }
     if (interaction.options.getString('commandname') == 'tes5') {
       return interaction.reply('/howemo:\nmakes the bot guess how emo you are\n\n/howgay:\nmakes the bot guess how gay you are\n\n/howhorny:\nmakes the bot guess how horny you are\n\n/howsus:\nmakes the bot guess how sus you are')
     }
      else if (interaction.options.getString('commandname') == 'tes6') {
       return interaction.reply('/hug:\nhug someone!')
     }
     if (interaction.options.getString('commandname') == 'tes7') {
       return interaction.reply('/hutaovoiceline:\nsend a voiceline of "hu tao"')
     }
      else if (interaction.options.getString('commandname') == 'tes18') {
       return interaction.reply('/ayakavoiceline:\nsend a voiceline of Ayaka')
     }
     if (interaction.options.getString('commandname') == 'tes8') {
       return interaction.reply('/kick:\nkick someone out of the server')
     }
      else if (interaction.options.getString('commandname') == 'tes9') {
       return interaction.reply('/kiss:\nkiss someone...')
     }
     if (interaction.options.getString('commandname') == 'tes10') {
       return interaction.reply('/changelog:\nView the latest update of the bot')
     }
      else if (interaction.options.getString('commandname') == 'tes11') {
       return interaction.reply('/ping:\nCheck the bots latency')
     }
      if (interaction.options.getString('commandname') == 'tes12') {
       return interaction.reply('/randomip:\nsends a random ip address')
     }
      else if (interaction.options.getString('commandname') == 'tes13') {
       return interaction.reply('/server:\nsends server information')
     }
     if (interaction.options.getString('commandname') == 'tes14') {
       return interaction.reply('/sus:\n*sus.*')
     }
      else if (interaction.options.getString('commandname') == 'tes15') {
       return interaction.reply('/timeout:\ntimeout someone')
     }
      if (interaction.options.getString('commandname') == 'tes16') {
       return interaction.reply('/unban:\nUnban someone from the server (using their user id)')
     }
      else if (interaction.options.getString('commandname') == 'tes17') {
       return interaction.reply('/user:\nsends your user info')
     }
     if (interaction.options.getString('commandname') == 'tes19') {
       return interaction.reply('/joke:\nsends a *very funny* joke')
     }
      if (interaction.options.getString('commandname') == 'tes20') {
        return interaction.reply('/rhelp: sends help with something completely unrelated to the bot')
      }
    const messageEmbed = new EmbedBuilder()
	.setColor(`e4b400`)
	.setTitle(`All commands`)
	.setAuthor({ name: 'help command'})
	.setDescription(`**Fun, utilities**\n**/avatar**:\nsends an avatar url of your avatar or the specified user\n\n**/ban**:\nbans a user\n\n**/deadchat**:\nsends a "dead chat" gif\n\n**/help**:\nshows this embed\n\n**/hentai**:\nyou know what this command does...\n\n**/howemo**:\nmakes the bot guess how emotional you are\n\n**/howgay**:\nmakes the bot guess how gay you are\n\n**/howsus**:\nmakes the bot guess how sus you are\n\n**/howhorny**:\n:skull: (makes the bot guess how horny you are)\n\n**/kick**:\nkicks a user\n\n**/ping**:\nchecks the bot latency\n\n**/randomip**:\nsends a random IP address\n\n**/server**:\nsends information about the server\n\n**/sus**:\nsends a "sus" gif\n\n**/timeout**:\ntimes out a user\n\n**/unban:**\nunbans a user\n\n**/user**:\nsends info about you\n\n**/hug**:\nhug someone!\n\n**/kiss**:\nkiss someone...\n\n**/joke**:\nsends a joke\n\n/rhelp:\nsends help with something unrelated to the bot\n\n\n**Others**\n\n**/ayakavoiceline**:\nsends a random voiceline of Ayaka from the game "Genshin Impact"\n\n**/hutaovoiceline**:\nsends a random voiceline of Hu Tao from "Genshin Impact"`)
		return interaction.reply({ embeds: [messageEmbed], ephemeral: true});
    },
};