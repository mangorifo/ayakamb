const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { request } = require('undici');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('hutaovoiceline')
    .setDescription('Sends a random voiceline of Hu Tao from "Genshin Impact".'),
  async execute(interaction) {
    const g = await request('https://discord.ayakads.cf/api/bot/huvoi');
    const { response } = await g.body.json();
    const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('hutao')
          .setLabel('Send me another one')
          .setStyle(ButtonStyle.Secondary),
      );
    console.log('[LOG] | "hutaovl.js" was used')
    const VoicelineEmbed = new EmbedBuilder()
      .setColor("#a83d36")
      .setAuthor({ name: `Hu Tao` })
      .setDescription(response)
    await interaction.reply({ embeds: [VoicelineEmbed], components: [row] });
    const filter = i => i.customId === 'hutao' && i.user.id === interaction.user.id;

    const collector = interaction.channel.createMessageComponentCollector({ filter });

    collector.on('collect', async i => {
    const g2 = await request('https://discord.ayakads.cf/api/bot/huvoi');
    const { response } = await g2.body.json();
      const VLE = new EmbedBuilder()
        .setColor("#a83d36")
        .setAuthor({ name: `Hu Tao` })
        .setDescription(response)
      return i.update({ embeds: [VLE], components: [row] })
    });
  },
};