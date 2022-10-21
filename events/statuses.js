const { ActivityType } = require("discord.js");

module.exports = {
  name: "ready",
  once: false,
  execute(client) {
    const activities = [
      { name: `you~ | Kamisato Ayaka, present!`, type: ActivityType.Listening},
      { name: `you~ | A blade embraces its duty, as a jeweler cherishes their gems.`, type: ActivityType.Listening},
      { name: `you~ | A blade is like a tea-leaf. Only those who sample it many times can appreciate its true qualities.`, type: ActivityType.Listening},
      { name: `you~ | I only wish life could be as leisurely as this a little more often… How greedy of me.`, type: ActivityType.Listening},
      { name: `you~ | So this is a day in the life of the Traveler… Hehe, I’m learning more about you all the time.`, type: ActivityType.Listening},
      { name: `you~ | Oh, good morning, Traveler. …When I see you in the morning, somehow, it makes me feel like… today is going to be a good day`, type: ActivityType.Listening},
      { name: `you~ | Close your eyes and face the wind… It feels wonderful, doesn’t it?`, type: ActivityType.Listening},
      { name: `you~ | There’s a pleasant breeze and glorious sunshine… So, where shall we go for a walk?`, type: ActivityType.Listening},
      { name: `you~ | “Snow that once adorned the world in silver, thaws to reveal the gleam of the fruit upon frost-laden branches.” *sigh* How picturesque! Only some tea would make this setting more complete.`, type: ActivityType.Listening},
      { name: `you~ | Her Excellency… What is she trying to communicate?`, type: ActivityType.Listening},
      { name: `you~ | Come with me, let us find shelter from the rain.`, type: ActivityType.Listening},
      { name: `you~ | Good afternoon. It is normal to feel drowsy after lunch, might I interest you in a game of Go to stimulate the mind?`, type: ActivityType.Listening},
      { name: `you~ | Greetings. An auspicious breeze blows this evening. Tonight will be peaceful.`, type: ActivityType.Listening},
      { name: `you~ | “Was it one’s thoughts that drew him to my dreams? Had I known it a dream, one would not have awakened.” Hehe, I love that poem.`, type: ActivityType.Listening},
      { name: `you~ | Thank you very much. It has been richly rewarding to learn from you so far, and I believe my skills with the blade can go even further still.`, type: ActivityType.Listening},
      { name: `you~ | Thank you for your guidance. With your assistance, I am gaining a more thorough understanding of my capabilities.`, type: ActivityType.Listening},
      { name: `you~ | I feel more competent now than ever before. I even have the time outside my work for the Yashiro Commission to try some new things. Would you like to try one of my home-made snacks? I just learned how to make them recently.`, type: ActivityType.Listening},
      { name: `you~ | "Though I cling to that which has given me the strength to hold on, the weight of letting go is ever-foreboding."
      My apologies, it should be a happy occasion, and yet it is such a sad phrase that comes to mind. Our time together has been so pleasant that I am fearful of losing what I have gained. I'm sorry, I must compose myself.`, type: ActivityType.Listening},

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