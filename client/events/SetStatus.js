const { ActivityType } = require("discord.js");

module.exports = {
  name: "ready",
  once: false,
  execute(client) {
    client.user.setPresence({
      activities: [
        {
          name: `you`,
          type: ActivityType.Listening,
        },
      ],
      status: "idle",
    });
  },
};
console.log('[EVENTS] SetStatus | Activity (status) ready')