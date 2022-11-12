const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('user')
    .setDescription('Provides information about you.'),
  async execute(interaction) {
    console.log('[LOG] | "user.js" was used')
    // interaction.user is the object representing the User who ran the command
    // interaction.member is the GuildMember object, which represents the user in the specific guild
    await interaction.reply(`Username: ${interaction.user.username}, joined on ${interaction.member.joinedAt}.`);
  },
};