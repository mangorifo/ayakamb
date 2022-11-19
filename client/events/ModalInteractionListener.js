const { Client, Events, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.on(Events.InteractionCreate, async interaction => {
  if (interaction.type === InteractionType.ModalSubmit) {
  if (!interaction.isModalSubmit()) return;
    console.log(interaction)
  }
});
console.log("[EVENTS] ModalInteractionListener | Loaded modal interaction listener")