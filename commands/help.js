const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
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
          { name: '/ayakavoiceline', value: 'tes18' },
          { name: '/ban', value: 'tes2' },
          { name: '/deadchat', value: 'tes3' },
          { name: '/how commands', value: 'tes5' },
          { name: '/hug', value: 'tes6' },
          { name: '/hutaovoiceline', value: 'tes7' },
          { name: '/kick', value: 'tes8' },
          { name: '/kiss', value: 'tes9' },
          { name: '/changelog', value: 'tes10' },
          { name: '/ping', value: 'tes11' },
          { name: '/randomip', value: 'tes12' },
          { name: '/server', value: 'tes13' },
          { name: '/sus', value: 'tes14' },
          { name: '/timeout', value: 'tes15' },
          { name: '/unban', value: 'tes16' },
          { name: '/skillissuegif', value: 'skill' },
          { name: 'Marking', value: 'marks' },
          { name: '/say', value: 'say' },
          { name: '/httpcat', value: 'catht' },
          { name: '/bugreport', value: 'bug' },
        )),
  async execute(interaction) {
    const op = interaction.options.getString('commandname');
    console.log('[LOG] | "help.js" was used')
    if (op === 'tes1') {
      return interaction.reply('/avatar:\nsends the avatar link of your avatar or someone elses')
    }
    else if (op === 'tes2') {
      return interaction.reply('/ban:\nbans a user')
    }
    if (op === 'tes3') {
      return interaction.reply('/deadchat:\nsends a "dead chat" gif')
    }
    else if (op === 'tes4') {
      return interaction.reply('/hentai:\nsends a hentai picture. (channel must be an age restricted channel)')
    }
    if (op === 'tes5') {
      return interaction.reply('/how emo:\nmakes the bot guess how emo you are\n\n/how gay:\nmakes the bot guess how gay you are\n\n/how horny:\nmakes the bot guess how horny you are\n\n/howsus:\nmakes the bot guess how sus you are\n\n/how skillissue:\nhow much skill issue?\n\n/how bigispp:\nbot will guess how big ur pp is')
    }
    else if (op === 'tes6') {
      return interaction.reply('/hug:\nhug someone!')
    }
    if (op === 'tes7') {
      return interaction.reply('/hutaovoiceline:\nsend a voiceline of "hu tao"')
    }
    else if (op === 'tes18') {
      return interaction.reply('/ayakavoiceline:\nsend a voiceline of Ayaka')
    }
    if (op === 'tes8') {
      return interaction.reply('/kick:\nkick someone out of the server')
    }
    else if (op === 'tes9') {
      return interaction.reply('/kiss:\nkiss someone...')
    }
    if (op === 'tes10') {
      return interaction.reply('/changelog:\nView the latest update of the bot')
    }
    else if (op === 'tes11') {
      return interaction.reply('/ping:\nCheck the bots latency')
    }
    if (op === 'tes12') {
      return interaction.reply('/randomip:\nsends a random ip address')
    }
    else if (op === 'tes13') {
      return interaction.reply('/info server:\nsends server information')
    }
    if (op === 'tes14') {
      return interaction.reply('/sus:\n*sus.*')
    }
    else if (op === 'tes15') {
      return interaction.reply('/timeout:\ntimeout someone')
    }
    if (op === 'tes16') {
      return interaction.reply('/unban:\nUnban someone from the server (using their user id)')
    }
    else if (op === 'tes17') {
      return interaction.reply('/info user:\nsends your user info')
    }
    if (op === 'skill') {
      return interaction.reply('/skillissuegif:\nLmao skill issue tbh')
    }
    else if (op === 'skills') {
      return interaction.reply('/skillissue:\nHow much skikl issue?')
    }
    if (op === 'marks') {
      return interaction.reply('/mark create:\nCreates a new mark\n/mark delete:\nDeletes your latest (only) mark\n/mark show:\nYk it shows your mark');
    }
    else if (op === 'say') {
      return interaction.reply('/say:\nsay text you specify')
    }
    if (op === 'catht') {
      return interaction.reply('/httpcat:\nsends a random photo of a cat but as a http error code. from [http.cat](https://http.cat)')
    }
    else if (op === 'bug') {
      return interaction.reply('/bugreport:\nSend a bug report. This command is for mobile users who can\'t view the bot\'s [bug report page.](https://discord.ayakads.cf/submit-bug)')
    }
    const CommandWebAyakaList = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setLabel('Full command list')
          .setURL('https://discord.ayakads.cf/commands')
          .setStyle(ButtonStyle.Link),
      );
    const BugReportButton = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setLabel('Bug report page (may look bad on mobile screens)')
          .setURL('https://discord.ayakads.cf/submit-bug')
          .setStyle(ButtonStyle.Link),
      );
    const messageEmbed = new EmbedBuilder()
      .setColor(`#e4b400`)
      .setTitle(`All commands`)
      .setAuthor({ name: 'help command' })
      .setURL('https://discord.ayakads.cf/commands')
      .setDescription(`**Fun, utilities**
      \n**/avatar**:\nsends an avatar url of your avatar or the specified user\n
      **/ban**:\nbans a user
      \n**/deadchat**:\nsends a "dead chat" gif
      \n**/help**:\nshows this embed
      \n**/howemo**:\nmakes the bot guess how emotional you are
      \n**/howgay**:\nmakes the bot guess how gay you are
      \n**/howsus**:\nmakes the bot guess how sus you are
      \n**/howhorny**:\n:skull: (makes the bot guess how horny you are)
      \n**/kick**:\nkicks a user
      \n**/ping**:\nchecks the bot latency
      \n**/randomip**:\nsends a random IP address
      \n**/server**:\nsends information about the server
      \n**/sus**:\nsends a "sus" gif
      \n**/timeout**:\ntimes out a user
      \n**/unban:**\nunbans a user
      \n**/user**:\nsends info about you
      \n**/hug**:\nhug someone!
      \n**/kiss**:\nkiss someone...
      \n**/say**:\nrepeats the text you specify.
      \n**/how skillissue**\nSkill issue fr
      \n**/skillissuegif**:\nSkill issues
      \n**/mark** commands:\nUse "/help commandname: Marking" to get help for this
      \n**/httpcat**:\nsends a random photo of a cat but as a http error code. from [http.cat](https://http.cat)
      \n**/say**:\nRepeats what you say.
      \n**/bugreport**:\nSends a bug report
      \n**/how bigispp**:\nYou know what this does :skull:
      \n\n**Others**\n
      \n**/ayakavoiceline**:
      \nsends a random voiceline of Ayaka from the game "Genshin Impact"
      \n**/hutaovoiceline**:\nsends a random voiceline of Hu Tao from "Genshin Impact"
      `)
      .setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() })
    return interaction.reply({ embeds: [messageEmbed], ephemeral: true, components: [CommandWebAyakaList, BugReportButton] });
  },
};