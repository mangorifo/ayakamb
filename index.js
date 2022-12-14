const fs = require('node:fs');
const path = require('node:path');
const {Client, Collection, Events, GatewayIntentBits, ActivityType} = require('discord.js');
const client = new Client({intents: [GatewayIntentBits.Guilds]});
require('dotenv').config();

client.commands = new Collection();
const commandsPath = path.join(__dirname, '/commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  client.commands.set(command.data.name, command);
}
// events handler
const eventsPath = path.join(__dirname, 'client/events');
const eventFiles = fs
    .readdirSync(eventsPath)
    .filter((file) => file.endsWith('.js'));

for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file);
  const event = require(filePath);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}
console.log('[NOTIFY] index | The bot might not be logged in if there is no message below this. ' + client?.user?.username);
client.once(Events.ClientReady, () => {
  console.log(`[CLIENT] index | Logged in as ${client.user.tag}! (${client.user.username}, ${client.user.id})`);
});


client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);

    return interaction.reply({
      content: `The bot has encountered an error. Report this error at the bot's [bug report page](https://discord.ayakads.cf/submit-bug/).\n\n**More info about the error:**\n${error}`,
      ephemeral: true,
    });
  }
});
client.login(process.env.token);
// login with token environment variable
