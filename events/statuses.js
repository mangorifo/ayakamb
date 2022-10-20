const { ActivityType } = require("discord.js");

module.exports = {
  name: "ready",
  once: false,
  execute(client) {
    const activities = [
      { name: `you~ | switched to slash commands`, type: ActivityType.Listening},
      { name: `you~ | being ran on replit`, type: ActivityType.Listening},
      { name: `you~ | Kamisato Ayaka, present!`, type: ActivityType.Listening},
      { name: `you~ | A blade embraces its duty, as a jeweler cherishes their gems.`, type: ActivityType.Listening},
      { name: `you~ | A blade is like a tea-leaf. Only those who sample it many times can appreciate its true qualities.`, type: ActivityType.Listening},
      { name: `you~ | I only wish life could be as leisurely as this a little more often… How greedy of me.`, type: ActivityType.Listening},
      { name: `you~ | So this is a day in the life of the Traveler… Hehe, I’m learning more about you all the time.`, type: ActivityType.Listening},
    ];
    let i = 0;
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
