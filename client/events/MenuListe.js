const { Client, Events, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });


client.on(Events.InteractionCreate, interaction => {
	if (!interaction.isSelectMenu()) return;
	console.log(interaction);
});