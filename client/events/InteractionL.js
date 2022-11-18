const { Client, Events, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);

    await interaction.reply({ content: "The bot has encountered an error. Report this error at the bot's [bug report page](https://discord.ayakads.cf/submit-bug/).\n\n**More info about the error:**\n" + error, ephemeral: true });
  }
})
console.log('[EVENTS] Interaction | Loaded interaction listener event')