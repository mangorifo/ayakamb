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
    const MsgEmbed = new EmbedBuilder()
      .setTitle(`${user?.tag}'s avatar`)
      .setImage(`${user?.displayAvatarURL()}?quality=lossless&size=1024`)
      .setColor("#000")
    console.log('[LOG] | "avatar.js" was used')


    interaction.reply({ embeds: [MsgEmbed] });
  },
};