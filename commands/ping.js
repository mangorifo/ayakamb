const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('pong!'),
    async execute(interaction) {
        const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
        await interaction.editReply(`PING!!\nUptime: ${Math.round(interaction.client.uptime / 60000)} minutes\n<a:hug:1031091693593833472> Websocket heartbeat: ${interaction.client.ws.ping}ms\n:round_pushpin: Roundtrip Latency: ${sent.createdTimestamp - interaction.createdTimestamp}ms`);
    },
};