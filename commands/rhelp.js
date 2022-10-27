const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('rhelp')
        .setDescription('help with something unrelated to this bot')
      .addStringOption(option =>
		option.setName('search')
			.setDescription('what you want help with')
			.setRequired(true)
			.addChoices(
        { name: 'What is localhost?', value: 'lchostsearch'},
         { name: 'How do I make a discord bot?', value: 'htmdb'},
        { name: 'What is HTTP?', value: 'http'},
			)),
    async execute(interaction) {
     const src = interaction.options.getString('search');
      console.log('[LOG] | "rhelp.js" was used')
      const lhostEmbed = new EmbedBuilder()
	.setColor(`e4b400`)
	.setTitle(`Localhost`)
  .setURL('https://whatismyipaddress.com/ip/127.0.0.1')
	.setAuthor({ name: 'rhelp'})
	.setDescription(`In a computer network, localhost is a hostname that refers to the computer that is executing a program — you can think of it as meaning “this computer.” The term is used when making a loopback request to one's own device.\n\nThe localhost is the default name describing the local computer address also known as the loopback address. For example, typing: ping localhost would ping the local IP address of 127.0.0.1 (the loopback address).`)

      const htmdbEmbed = new EmbedBuilder()
	.setColor(`e4b400`)
	.setTitle(`How to make a discord bot`)
  .setURL('https://discordjs.guide')
	.setAuthor({ name: 'rhelp'})
	.setDescription(`To use discord.js, you'll need to install it via npm (Node's package manager). npm comes with every Node installation, so you don't have to worry about installing that. However, before you install anything, you should set up a new project folder.\nNavigate to a suitable place on your machine and create a new folder named discord-bot (or whatever you want). Next you'll need to open your terminal.
On Windows, either:\nShift + Right-click inside your project directory and choose the "Open command window here" option\nPress Win + R and run cmd.exe, and then cd into your project directory
On macOS, either:\n\nOpen Launchpad or Spotlight and search for "Terminal"\nIn your "Applications" folder, under "Utilities", open the Terminal app
On Linux, you can quickly open the terminal with Ctrl + Alt + T.\n\nWith the terminal open, run the node -v command to make sure you've successfully installed Node.js. If it outputs v16.9.0 or higher, great!\n\n**Installing discord.js**\nOn npm, type **npm install discord.js**.\nOn yarn, type **yarn add discord.js**.\nOn pnpm, type **pnpm add discord.js**.\n\nWhile you are coding, it's possible to run into numerous syntax errors or code in an inconsistent style. You should install a linter to ease these troubles. While code editors generally can point out syntax errors, linters coerce your code into a specific style as defined by the configuration. While this is not required, it is advised.\n\nContinue [here](https://discordjs.guide/preparations/setting-up-a-linter.html#installing-a-code-editor)`)
      const httpembed = new EmbedBuilder()
	.setColor(`e4b400`)
	.setTitle(`What is HTTP?`)
.setURL('https://developer.mozilla.org/en-US/docs/Web/HTTP')
	.setAuthor({ name: 'rhelp'})
	.setDescription(`The Hypertext Transfer Protocol (HTTP) is the foundation of the World Wide Web, and is used to load web pages using hypertext links. HTTP is an application layer protocol designed to transfer information between networked devices and runs on top of other layers of the network protocol stack. A typical flow over HTTP involves a client machine making a request to a server, which then sends a response message.\nWhat’s in an HTTP request?\nAn HTTP request is the way internet communications platforms such as web browsers ask for the information they need to load a website.\nEach HTTP request made across the Internet carries with it a series of encoded data that carries different types of information. A typical HTTP request contains:\n1. HTTP version type\n2. a URL\n3. an HTTP method\n4. HTTP request headers\n5. Optional HTTP body.`)
     if (interaction.options.getString('search') == 'lchostsearch') {
       return interaction.reply({ embeds: [lhostEmbed], ephemeral: false})
     }
      else if (interaction.options.getString('search') == 'htmdb') {
        return interaction.reply({ embeds: [htmdbEmbed], ephemeral: false })
      }
      if (interaction.options.getString('search') == 'http') {
       return interaction.reply({ embeds: [httpembed], ephemeral: false});
     }

    },
};