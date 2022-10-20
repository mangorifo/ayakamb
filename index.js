const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits, ActivityType } = require('discord.js');
const { token } = process.env.token;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  client.commands.set(command.data.name, command);
}

client.once(Events.ClientReady, () => {
  console.log('Client is: ready');;
  console.log(`Logging in...`)
  console.log(`Logged in as ${client.user.tag}!`)
  client.user.setPresence({
    activities: [
      {
        name: "you~",
        type: ActivityType.Listening,
      },
    ],
  });
})

// stop fking Gay UWUWHSZHJDJX Hi havw skill issue 
client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({ content: 'Sorry, the bot has encountered an error...', ephemeral: true });
  }
})

client.login(process.env.token);