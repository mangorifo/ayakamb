const { ActivityType } = require("discord.js");

module.exports = {
  name: "ready",
  once: false,
  execute(client) {
      client.user.setPresence({
        activities: [
          {
            name: `with you`,
            ActivityType: "playing",
          },
        ],
        status: "idle",
      });
  },
};
console.log('[EVENTS] statuses.js | loaded statuses event')