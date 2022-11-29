const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { request } = require('undici');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('ayakavoiceline')
    .setDescription(`Sends a random voiceline of Ayaka from Genshin Impact.`),
  async execute(interaction) {
    const g = await request('https://discord.ayakads.cf/api/bot/avoi');
    const { response } = await g.body.json();
    const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('ayaka')
          .setLabel('Send me another one')
          .setStyle(ButtonStyle.Success),
      );
    const VoicelineEmbed = new EmbedBuilder()
      .setColor("#324ea8")
      .setAuthor({ name: `Kamisato Ayaka` })
      .setDescription(response)
    console.log('[LOG] | "ayakavl.js" was used')

    await interaction.reply({ embeds: [VoicelineEmbed], components: [row] })
    const filter = i => i.customId === 'ayaka' && i.user.id === interaction.user.id;

    const collector = interaction.channel.createMessageComponentCollector({ filter });

    collector.on('collect', async i => {
      const g2 = await request('https://discord.ayakads.cf/api/bot/avoi');
      const { response } = await g2.body.json();
      const VLE = new EmbedBuilder()
        .setColor("#324ea8")
        .setAuthor({ name: `Kamisato Ayaka` })
        .setDescription(response)
      return i.update({ embeds: [VLE], components: [row] })
    });
  }
}
