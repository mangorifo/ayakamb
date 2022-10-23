const { ActivityType } = require("discord.js");

module.exports = {
  name: "ready",
  once: false,
  execute(client) {
    const activities = [
      { name: `you.`, type: ActivityType.Watching},
      { name: '😱', type: ActivityType.Competing},
      { name: 'you', type: ActivityType.Listening}
    ];
    let i = 10;
    setInterval(() => {
      client.user.setPresence({
        activities: [
          {
            name: activities[i].name,
            type: activities[i].type,
            url: activities[i].url,
          },
        ],
        status: "idle",
      });
      i = ++i % activities.length;
    }, 7000);
  },
};
console.log('[EVENTS] "statuses.js" - loaded statuses event')