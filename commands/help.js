const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('help!'),
    async execute(interaction) {
    return interaction.reply(`**help** for Ayaka-MB (hb, soon :skull:)\nhentai: sends hentai :skull:\nhowgay: how gay are you?\nping: sends bot's ping\navatar: sends URL of a member's avatar (or yours)\nsus: sends a sus gif\nrandip: random ip address\n\n\nYes, sadly the music commands are gone`);
    },
};