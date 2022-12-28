const { createCanvas, GlobalFonts, loadImage } = require("@napi-rs/canvas");
const { SlashCommandBuilder } = require("discord.js");
const { join } = require("path");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("create")
    .setDescription("Create a sekai sticker with your own text")
    .addStringOption((option) =>
      option
        .setName("text")
        .setDescription("The text you want to put on the sticker")
        .setRequired(true)
    )
    .addStringOption(option =>
      option.setName('imagename')
        .setDescription('Image to use on the sticker')
        .setRequired(true)
        .addChoices(
          { name: 'Emu 1', value: './assets/Emu/Emu_01.png' },
          { name: 'Emu 2', value: './assets/Emu/Emu_02.png' },
          { name: 'Emu 3', value: './assets/Emu/Emu_03.png' },
          { name: 'Emu 4', value: './assets/Emu/Emu_04.png' },
          { name: 'Emu 5', value: './assets/Emu/Emu_06.png' },
          { name: 'Emu 6', value: './assets/Emu/Emu_06.png' },
          { name: 'Emu 7', value: './assets/Emu/Emu_07.png' },
          { name: 'Emu 8', value: './assets/Emu/Emu_08.png' },
          { name: 'Emu 9', value: './assets/Emu/Emu_09.png' },
          { name: 'Emu 10', value: './assets/Emu/Emu_11.png' },
          { name: 'Emu 11', value: './assets/Emu/Emu_12.png' },
          { name: 'Emu 12', value: './assets/Emu/Emu_13.png' },
          { name: 'Emu 13', value: './assets/Emu/Emu_14.png' },
          { name: 'Emu 14', value: './assets/Emu/Emu_16.png' },
        )
    )
    .addStringOption(option =>
      option
        .setName('fontsize')
        .setDescription('The font size of the text (ex. 32px)')
    )
    .addStringOption((option) =>
      option
        .setName("texthexcolor")
        .setDescription("Hex color of the text for the sticker. (ex. #000000) If this field is empty, it will use default")
        .setRequired(false)
    )
    .addStringOption((option) =>
      option
        .setName("x_axis")
        .setDescription("X Axis of the sticker text (ex. 100)")
        .setRequired(false)
    )
    .addStringOption((option) =>
      option
        .setName("z_axis")
        .setDescription("Z Axis of the sticker text. (ex. 70)")
        .setRequired(false)
    ),
  async execute(interaction) {
    GlobalFonts.registerFromPath(
      join(__dirname, "..", "assets", "YurukaStd.woff2"),
      "YurukaStd"
    );
    const iname = interaction.options.getString("imagename")
    const img = await loadImage(iname);
    var fiz = interaction.options.getString("fontsize");
    const text = interaction.options.getString("text");
    // axis
    const x = interaction.options.getString("x_axis");
    const z = interaction.options.getString("z_axis");
    const hxcol = interaction.options.getString("texthexcolor");
    const canvas = createCanvas(296, 256);
    const ctx = canvas.getContext("2d")
    try {
      ctx.drawImage(img, 0, 0, img.width, img.height);
      if (fiz) {
        ctx.font = fiz + "YurukaStd";
      } else
        ctx.font = "32px YurukaStd";
      if (hxcol) {
        ctx.fillStyle = hxcol;
      } else
        ctx.fillStyle = "#FF00BB";
      ctx.stroke();
      ctx.textAlign = "center";
      ctx.strokeStyle = "white";
      if (z && x) {
        ctx.strokeText(text, x, z);
        ctx.fillText(text, x, z);
      } else if (z) {
        ctx.strokeText(text, 148, z);
        ctx.fillText(text, 148, z);
      } else if (x) {
        ctx.fillText(text, x, 70);
        ctx.fillText(text, x, 70);
      } else
        ctx.strokeText(text, 148, 70);
      ctx.fillText(text, 148, 70);
      ctx.lineWidth = 9;
      const buffer = canvas.toBuffer("image/png");
      if (hxcol) {
        return interaction.reply({
          files: [buffer],
          content: 'Generated a sticker!\n\nSticker text: `' + text + '`\nSticker text hexcolor: `' + hxcol + '`'
        });
      } else {
        return interaction.reply({
          files: [buffer],
          content: `Generated a sticker!\n\nSticker text: \`${text}\``
        });
      }
    } catch (err) {
      console.error(err);
      return interaction.reply({
        content: "There was an error while creating the sticker!",
        ephemeral: true,
      });
    }
  }
}