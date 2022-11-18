const { Client, Events, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, () => {
  try {
  console.log(`[EVENTS] Login | Logged in as ${client.user.tag}!`)
  }
catch (error) {
  console.error(error)
}
})
client.login(process.env.token);