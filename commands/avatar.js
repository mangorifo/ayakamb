const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { Client, Collection, Events, GatewayIntentBits, ActivityType } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] }); // idk lol
module.exports = {
  data: new SlashCommandBuilder()
    .setName('avatar')
    .setDescription('Get the avatar URL of the selected user, or your own avatar.')
    .addUserOption(option => option.setName('target').setDescription('The user\'s avatar to show')),
  async execute(interaction) {
    const user = await interaction.client.users.fetch(
    interaction.options.getUser("target") || interaction.user,
    {
      force: true
    }
)
    if (user.displayAvatarURL().endsWith(".gif") == true) {
  const fl = new EmbedBuilder()
      .setTitle(`${user.username}'s avatar`)    .setImage(user.displayAvatarURL().slice(0, -3) + 'gif?quality=lossless&size=1024')

      .setColor("#000")
      await interaction.reply({ embeds: [fl]})
  }
     if (user.displayAvatarURL().endsWith(".webp") == true) {
      
const MEmbedTrue = new EmbedBuilder()
      .setTitle(`${user.username}'s avatar`)    .setImage(user.displayAvatarURL().slice(0, -4) + 'png?quality=lossless&size=1024')

      .setColor("#000")
      await interaction.reply({ embeds: [MEmbedTrue]})
    }
    console.log('[LOG] | "avatar.js" was used')


    
  },
};