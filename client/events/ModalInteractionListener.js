const { Client, Events, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.on(Events.InteractionCreate, interaction => {
	if (!interaction.isModalSubmit()) return;
	console.log(interaction);
});
console.log("[EVENTS] ModalInteractionListener | Loaded modal interaction listener")