const {SlashCommandBuilder, EmbedBuilder} = require('discord.js');
const nSchemaMsgMark = require('./models/keys');
const Schema = require('./models/keys');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('mark')
        .setDescription('Create, delete, or view marks')
        .setDMPermission(false)
        .addSubcommand((subcommand) =>
            subcommand
                .setName('create')
                .setDescription('Create a new mark')
                .addUserOption((option) => option
                    .setName('target')
                    .setDescription('Mark their data (💀)')))
        .addSubcommand((subcommand) =>
            subcommand
                .setName('show')
                .setDescription('Shows the latest mark you made')
                .addUserOption((option) => option
                    .setName('target')
                    .setDescription('View their marked data if they have marked any')))
        .addSubcommand((subcommand) =>
            subcommand
                .setName('delete')
                .setDescription('Deletes your mark')),
    async execute(interaction) {
        const sc = interaction.options.getSubcommand();
        if (sc === 'create') {
            const user = interaction.options.getUser('target') || interaction.user || interaction.guild.user;
            const c = [Math.floor(Math.random() * 99999999999999)];
            nSchemaMsgMark.findOne({keyowner: user.id}, async (err, data) => {
                const NewMark = new EmbedBuilder()
                    .setTitle(`Created a new mark for ${user.username}`)
                    .setDescription(`Created a new mark for ${user.tag}, which contains most info the bot can get. Use </mark show:0> to see it`)
                    .setColor('#00FF00');
                const MarkAlreadyExists = new EmbedBuilder()
                    .setTitle('Error')
                    .setDescription(`${user} has already added data/already has data added to the MongoDB database. Use </mark delete:0> to delete it, or </mark show:0> to see it`)
                    .setColor('#FF0000');
                const AttemptedMarkBot = new EmbedBuilder()
                    .setTitle('Error')
                    .setDescription(`You cannot add marks to bots..`)
                    .setColor('#FF0000');
                if (data) {
                    return interaction.reply({embeds: [MarkAlreadyExists]});
                }
                if (user.bot === true) {
                    return interaction.reply({embeds: [AttemptedMarkBot]});
                }

                if (user) {
                    await new nSchemaMsgMark({
                        keyowner: user.id,
                        keymadeog: interaction.guild.id,
                        channel: interaction.channel.id,
                        Name: user,
                        StoreId: `${user.id}:${c}`,
                        UserName: user.tag,
                        GuildName: interaction.guild.name,
                        AvatarImg: user.displayAvatarURL() + '?quality=lossless&size=1024',
                        StoredAt: Date.now().toString().slice(0, -3),
                    }).save();
                    interaction.reply({embeds: [NewMark]});
                }
            });
        } else if (sc === 'show') {
            const user = interaction.options.getUser('target') || interaction.user;
            nSchemaMsgMark.findOne({keyowner: user.id}, async (err, data) => {
                if (data) {
                    const MsgEmbed = new EmbedBuilder()
                        .setColor('#e4b400')
                        .setTitle(`Marked information for ${user.username || interaction.guild.user.nickname}`)
                        .setDescription(`${user.username}'s latest marked info is:\n\nMarked on Guild: (ID) ${data['keymadeog']} (Guild name: ${data['GuildName']})\nMarked on Channel: (ID) ${data['channel']}\nKey Owner: ${data['Name']} (written username: "${data['UserName']}")\nMarked at: <t:${data['StoredAt']}:F>\nKey ID: ${data['StoreId']}`)
                        .setImage(data['AvatarImg'])
                        .setFooter({text: `Requested by ${interaction.user.username || interaction.guild.user.nickname}`, iconURL: interaction.user.displayAvatarURL()});
                    return interaction.reply({embeds: [MsgEmbed]});
                }
                if (!data) {
                    const MsgEmbed = new EmbedBuilder()
                        .setColor('#FF0000')
                        .setTitle(`Error`)
                        .setDescription(`${user.username} does not have an existing mark. Make one using </mark create:0>`)
                        .setFooter({text: `Requested by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL()});
                    return interaction.reply({embeds: [MsgEmbed]});
                }
            });
        } if (sc === 'delete') {
            Schema.findOneAndDelete({keyowner: interaction.user.id}, async (err, data) => {
                if (!data) {
                    const MessageEmbed = new EmbedBuilder()
                        .setTitle('Error')
                        .setDescription(`${interaction.user.username} does not have any saved marks yet. Use </mark create:0> to make one.`)
                        .setColor('#FF0000');
                    interaction.reply({embeds: [MessageEmbed]});
                }
                if (data) {
                    const MessageEmbed = new EmbedBuilder()
                        .setTitle(`Success`)
                        .setDescription(`${interaction.user.username}'s mark has been deleted.`)
                        .setColor('#00FF00');
                    interaction.reply({embeds: [MessageEmbed]});
                }
            });
        }
    },
};
