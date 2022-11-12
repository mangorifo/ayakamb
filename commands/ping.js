const { SlashCommandBuilder, EmbedBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('pong!'),
  async execute(interaction) {
    const sent = await interaction.reply({ content: 'please wait', fetchReply: true });
    const MessageEmbed = new EmbedBuilder()
      .setTitle('Bot ping')
      .setDescription(`Pong!\nUptime: ${Math.round(interaction.client.uptime / 60000)} minutes\n<a:hug:1031091693593833472> Websocket heartbeat: ${interaction.client.ws.ping}ms\n:round_pushpin: Roundtrip Latency: ${sent.createdTimestamp - interaction.createdTimestamp}ms`)
      .setFooter({ text: `bot made by rrryfoo#8618 (discord.js v14.6.0)` });
    console.log('[LOG] | "ping.js" was used')

    await interaction.followUp({ embeds: [MessageEmbed] })
  },
};