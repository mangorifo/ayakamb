const { SlashCommandBuilder, EmbedBuilder, WebhookClient, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { hookurl } = require('./text/bugapi.json')
module.exports = {
  data: new SlashCommandBuilder()
    .setName('bugreport')
    .setDescription('This command is for mobile users who can\'t view the bug report page in the website properly.')
    .addStringOption((option) =>
      option
        .setName("bugtitle")
        .setDescription("bug title")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("bugdesc")
        .setDescription("bug description")
        .setRequired(true)
    )
    .addAttachmentOption((option) => option
      .setRequired(false)
      .setName("image")
      .setDescription("Add an image to the bug report")),
  async execute(i) {
    const attachment = i.options.getAttachment("image")
    const title = i.options.getString("bugtitle");
    const desc = i.options.getString("bugdesc");
    const webhookClient = new WebhookClient({ url: hookurl });
    const confirm = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('conf')
          .setLabel('Send the bug report')
          .setStyle(ButtonStyle.Success),
      );
    const confirmfilter = i => i.customId === 'conf' && i.user.id === i.user.id;
    const confirmcollector = i.channel.createMessageComponentCollector({ confirmfilter });
    if (attachment) {
      const wembed = new EmbedBuilder()
        .setTitle('New bug report: ' + title)
        .setDescription(desc)
        .setColor('#E4B400')
        .setFooter({ text: `Sent by ${i.user.tag}, sent from /bugreport command (not from website)`, iconURL: i.user.displayAvatarURL() })
        .setImage(attachment.url)

      const confembed = new EmbedBuilder()
        .setTitle('New bug report: ' + title)
        .setDescription('Are you sure you want to send this bug report? (Dismiss the message to cancel)\n\n' + desc)
        .setColor('#E4B400')
        .setFooter({ text: `Sent by ${i.user.tag}, sent from /bugreport command (not from website)`, iconURL: i.user.displayAvatarURL() })
        .setImage(attachment.url)
      return i.reply({
        embeds: [confembed],
        components: [confirm],
        ephemeral: true
      })
    }
    else {
      const wembed = new EmbedBuilder()
        .setTitle('New bug report: ' + title)
        .setDescription(desc)
        .setColor('#E4B400')
        .setFooter({ text: `Sent by ${i.user.tag}, sent from /bugreport command (not from website)`, iconURL: i.user.displayAvatarURL() })
      const confembed = new EmbedBuilder()
        .setTitle('New bug report: ' + title)
        .setDescription('Would you like to sent this bug report? (Dismiss the message to cancel)\n\n' + desc)
        .setColor('#E4B400')
        .setFooter({ text: `Sent by ${i.user.tag}, sent from /bugreport command (not from website)`, iconURL: i.user.displayAvatarURL() })
      await i.reply({
        embeds: [confembed],
        ephemeral: true,
        components: [confirm]
      })
      return confirmcollector.on('collect', async i => {
        await i.reply({
          content: 'Sent bug report.',
          ephemeral: true
        })
        await webhookClient.send({
          embeds: [wembed],
        });
        return confirmcollector.stop();
      })
    }
  }
}