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
        { name: 'What is HTTP?', value: 'httpmbed'},
			)),
    async execute(interaction) {
     const src = interaction.options.getString('search');
      console.log('[LOG] | "rhelp.js" was used')
      const lhostEmbed = new EmbedBuilder()
	.setColor(`e4b400`)
	.setTitle(`Localhost`)
  .setURL('https://whatismyipaddress.com/ip/127.0.0.1')
	.setAuthor({ name: 'rhelp'})
	.setDescription(`In a computer network, localhost is a hostname that refers to the computer that is executing a program — you can think of it as meaning “this computer.” The term is used when making a loopback request to one's own device.\n\nThe localhost is the default name describing the local computer address also known as the loopback address. For example, typing: ping localhost would ping the local IP address of 127.0. 0.1 (the loopback address).`)

      const htmdbEmbed = new EmbedBuilder()
	.setColor(`e4b400`)
	.setTitle(`How to make a discord bot`)
  .setURL('https://discordjs.guide')
	.setAuthor({ name: 'rhelp'})
	.setDescription(`can't explain how to make a discord bot here in one embed. go [here](https://discordjs.guide) for a guide of how.`)
      const httpmbed = new EmbedBuilder()
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
      if (interaction.options.getString('search') == 'httpm') {
        return interaction.reply({ embeds: [httpmbed], ephemeral: true })
      }

		return interaction.reply('wat how');
    },
};