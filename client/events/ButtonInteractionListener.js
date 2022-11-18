const { Client, Events, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on(Events.InteractionCreate, interaction => {
  if (!interaction.isButton()) return;
  console.log(interaction);
});
console.log("[EVENTS] ButtonInteractionListener | Loaded button interaction listener")