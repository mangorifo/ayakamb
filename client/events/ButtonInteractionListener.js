const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits, ActivityType } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on(Events.InteractionCreate, interaction => {
  if (!interaction.isButton()) return;
  console.log(interaction);
});