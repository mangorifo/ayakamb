const { ActivityType } = require("discord.js");

module.exports = {
  name: "ready",
  once: false,
  execute(client) {
    const activities = [
      { name: `you.`, type: ActivityType.Watching},
      { name: `😱`, type: ActivityType.Listening},
      { name: `you`, type: ActivityType.Listening},
      { name: `text`, type: ActivityType.Watching},
    ];
      client.user.setPresence({
        activities: [
          {
            name: `😱`,
            ActivityType: `LISTENING`,
          },
        ],
        status: "idle",
      });
  },
};
console.log('[EVENTS] "statuses.js" - loaded statuses event')