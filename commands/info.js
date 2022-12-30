const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Get info about a user or a server!')
        .addSubcommand(subcommand =>
            subcommand
                .setName('user')
                .setDescription('Info about a user')
                .addUserOption(option => option.setName('user').setDescription('The user')))
        .addSubcommand(subcommand =>
            subcommand
                .setName('server')
                .setDescription('Info about this server')
        )
        .setDMPermission(false),
    async execute(interaction) {
        if (interaction.options.getSubcommand() === 'user') {
            const user = interaction.options.getUser('user') || interaction.user
            if (user.displayAvatarURL().endsWith(".gif") === true) {
                const d = new EmbedBuilder()
                    .setColor("#E4B400")
                    .setTitle(`${user.username}'s info`)
                    .setDescription(user.username + '\'s account was made at <t:' + user.createdTimestamp.toString().slice(0, -3) + ':F>.')
                    .setImage(user.displayAvatarURL().slice(0, -3) + 'gif?quality=lossless&size=1024')
                    .setColor("#E4B400")
                return interaction.reply({ embeds: [d] })
            }
            const d = new EmbedBuilder()
                .setColor("#E4B400")
                .setTitle(`${user.username}'s info`)
                .setDescription(user.username + '\'s account was made at <t:' + user.createdTimestamp.toString().slice(0, -3) + ':F>')
                .setImage(user.displayAvatarURL().slice(0, -4) + 'png?quality=lossless&size=1024')
                .setColor("#E4B400")
            return interaction.reply({ embeds: [d] })
        } else if (interaction.options.getSubcommand() === "server") {
            const serverembed = new EmbedBuilder()
                .setTitle(`server information`)
                .setAuthor({
                    name: interaction.guild.name,
                    iconURL: interaction.guild.iconURL()
                })
                .addFields(
                    { name: 'Server name', value: interaction.guild?.name },
                    { name: 'Member count', value: `This server has ${interaction.guild.memberCount} members.` },
                )
                .setColor("Random")
                .setImage(`${interaction.guild.iconURL()}?size=1024`)
                .setTimestamp()
                .setFooter({
                    text: `Requested by ${interaction.user.username}`,
                    iconURL: interaction.user.displayAvatarURL()
                })
            return interaction.reply({ embeds: [serverembed] });
        }
    }
}