const { SlashCommandBuilder } = require('discord.js');
const skill = [
  "https://tenor.com/view/skillissue-skill-issue-gif-22125481",
  "https://tenor.com/view/skill-issue-among-us-skill-issue-killer-bean-gif-24855216",
  "https://tenor.com/view/skill-issue-gif-19411985",
  "https://tenor.com/view/skill-issue-club-penguin-club-penguin-dance-skill-issue-gif-24610458",
  "https://tenor.com/view/skill-issue-neco-arc-melty-blood-gif-26530064",
  "https://tenor.com/view/skill-issue-massive-skill-issue-kiryu-skill-issue-gif-26368421",
  "https://tenor.com/view/spongebob-skill-issue-skill-gif-24485644",
  "https://tenor.com/view/skill-issue-skill-issue-tf2memes-spy-gif-25011666",
  "https://tenor.com/view/skill-tissue-skill-issue-gif-25574752"
]
module.exports = {
  data: new SlashCommandBuilder()
    .setName('skillissuegif')
    .setDescription('haha skill issue'),
  async execute(interaction) {
    console.log('[LOG] | "skillissue.js" was used')
    const issue = skill[Math.floor(Math.random() * skill.length)];
    return interaction.reply(issue);
  },
};