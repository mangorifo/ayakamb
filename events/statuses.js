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
      { name: `you~ | “Inazuma Shogunate, Yashiro Commission, Kamisato Clan.” Widely known as one of the most distinguished clans in all of Inazuma, it is the branch of the Tri-Commission that manages ceremonial and cultural affairs. Since my parents passed, Brother and I assumed responsibility for all clan matters, big and small.`, type: ActivityType.Listening},
      { name: `you~ | Many look up to me as the Shirasagi Himegimi and as the daughter of the Kamisato Clan. But the object of their respect has everything to do with my position, and nothing at all to do with me, Ayaka. It makes me think that… maybe, there is only one person I know who is truly able to get close to me…`, type: ActivityType.Listening},
      { name: `you~ | Today, as in the past, I aspire to be somebody whom everyone can trust. But what motivates me is no longer the responsibilities I shoulder, or the expectations of other people. Rather, it is the act that you are this kind of person, too.`, type: ActivityType.Listening},
      { name: `you~ | If you’ve got time, shall we take a walk to Komore Teahouse? To chat about the art of tea on a pleasant day like this seems like the sophisticated thing to do.`, type: ActivityType.Listening},
      { name: `you~ | If I ever have the chance, I would very much like to experience the festivities of another nation with you one day. Though, I will need some guidance on local customs and etiquette, and advice on what gifts to bring... Could I trouble you to give me some guidance?`, type: ActivityType.Listening},
      { name: `you~ | Visions are a seal of approval for those who are most ambitious. As for my own ambitions, they shall remain private for now. It is nothing more than an insignificant dream.`, type: ActivityType.Listening},
      { name: `you~ | It is said that "the flavor of Zen is that of tea," and it is also said that "the power of Zen is that of the blade." One might then ask: What does that say about the relationship between tea and the blade?`, type: ActivityType.Listening},
      { name: `you~ | Have you ever noticed the withering sakura tree in the city? For me, there is a beauty to the withering, it brings back fond memories of the spring. Most people don't agree — sakura trees that will never bloom again are removed. But when I look at a tree, all I want is to see it blossom again... just one more time...`, type: ActivityType.Listening},
      { name: `you~ | Thoma is a dear friend. He always lifts my spirits with his sunny disposition. In a sense, I think of him as another brother, and as a full member of the Kamisato Clan.`, type: ActivityType.Listening},
      { name: `you~ | Kujou Sara of the Tenryou Commission is... not known to smile, and I have had my fair share of disputes with her. She is, however, a loyal servant to Inazuma, there is no question about that.`, type: ActivityType.Listening},
      { name: `you~ | Mr. Shikanoin belongs to the Tenryou Commission, just like Miss Kujou. He is very... principled, sometimes even more determinedly so than Miss Kujou. The only thing is, when it comes to the question of which matters should be governed by his principles, I believe only Mr. Shikanoin himself knows the answer...`, type: ActivityType.Listening},
      { name: `you~ | Ah, little Sayu. She hasn't been causing you any trouble lately, has she? Hehe, if you ever notice her slacking off, please let me know`, type: ActivityType.Listening},
      { name: `you~ | The Almighty Shogun? It would be improper of me to comment, given that I am one of her subjects. All I will say is that... I think that Her Excellency must get lonely on the road to eternity.`, type: ActivityType.Listening},
      { name: `you~ | To witness the Musou no Hitotachi and live to tell the tale is quite a remarkable feat. Even though I recognize her as our true deity with the power to change Inazuma's fate at will, if there is conflict between the two of you, then... I shall choose to side with you.`, type: ActivityType.Listening},
      { name: `you~ | I have always greatly enjoyed working with Guuji Yae. Organizing festival affairs generally takes a lot of effort and doesn't generate much income, but Guuji Yae's events always come off both elegant and profitable.`, type: ActivityType.Listening},
      { name: `you~ | As the head of the Kamisato Clan, brother always has a full schedule of places he needs to be. I do try my best to share his load, but there is no changing the pressure he is subjected to all year round, and the toll it takes upon him. *sigh* If you see him, remind him to take care of himself, for his sister's sake...`, type: ActivityType.Listening},
      { name: `you~ | Your request is quite unusual for me. Since I see you as a friend, it would only be fair to be open and honest with you, but if this means sharing secrets of the Kamisato Clan... I would ask that you keep anything I tell you in strict confidence.`, type: ActivityType.Listening},
      { name: `you~ | The Kamisato Clan once suffered a major blow when we failed to protect a swordsmith of national significance. We were harassed by the Fatui, we lost many of our people, and we received a great deal of criticism. It all aged Father greatly, and severely damaged the Kamisato Clan's standing within the Shogunate. Brother has worked tirelessly to reverse the trend since he assumed leadership, but although our clan's position is now restored and the Yashiro Commission is unified once more, we still rely on Brother to make the decisions on all matters of any importance.`, type: ActivityType.Listening},
      { name: `you~ | The art of blade forging taught by the Shogun varies based on astrology, application, materials used, the furnace conditions, individual personalities, and elemental changes. These differences between smiths is what gave rise to the Raiden Gokaden. Swordsmiths capable of forging renowned blades are seen as spiritual personnel with sacred abilities, and as such they should be managed by the Yashiro Commission, which oversees all cultural, artistic, and ceremonial affairs. So naturally, the swordsmith's betrayal is the fault of ineffectual management by the Kamisato Clan.`, type: ActivityType.Listening},
      { name: `you~ | My mother was the most incredible person. She was always so dignified and elegant, always smiling, no matter what situation she might be facing. She had so much to deal with in the clan on so many levels, but she took it all in stride — it was like nothing could ever faze her. Everything about her was perfect, and I say that without exaggerating. *sigh* But the moment she passed away, I realized... I couldn't hide behind my mother any longer. I wasn't little Ayaka any more.`, type: ActivityType.Listening},
      { name: `you~ | What I want to say next is perhaps not befitting of a member of the Inazuma Shogunate, Yashiro Commission, Kamisato Clan, but... unless I am mistaken, I trust that you will not take issue with this slight departure from convention on my part...
      That is to say... I'm a little tired, may I rest my head on your shoulder? Just for a moment.`, type: ActivityType.Listening},
      { name: `you~ | I have great affection for the arts: music, song, poetry, shougi, and dancing. And you?`, type: ActivityType.Listening},
      { name: `you~ | Troubles? Well, I mean... that's life, isn't it? There will always be things that don't go one's way. But I do not wish to worry those around me on account of things that are my concern alone... so, it is best if I keep them to myself.`, type: ActivityType.Listening},
      { name: `you~ | Openness is something I find very difficult. I constantly have to remind myself that as a lady of the Kamisato Clan, there are countless people watching and countless expectations to live up to. I must be a model of exemplary conduct at all times. But even so, shouldn't I still follow my dreams? Shouldn't I... share my true feelings with you?`, type: ActivityType.Listening},
      { name: `you~ | I'm fascinated by food from overseas. Though I don't get to try it very often... So, if I had to choose something from Inazuma, then probably... Chazuke. But not when anybody else is watching... So I tell you that in confidence.`, type: ActivityType.Listening},
      { name: `you~ | Though I do not eschew animal fat and organs entirely, they are far from my first choice.`, type: ActivityType.Listening},
      { name: `you~ | Come with me! We're not going far away — I promise it won't delay you too much.
      I managed to find out when your birthday was well in advance, so I could prepare in good time. Hopefully this wasn't assuming too much, but I guessed you might prefer this to an expensive gift.
      In honor of your birthday, please allow me to perform a fan dance for you.`, type: ActivityType.Listening},
      { name: `you~ | Thank you very much. It has been richly rewarding to learn from you so far, and I believe my skills with the blade can go even further still.`, type: ActivityType.Listening},
      { name: `you~ | Thank you for your guidance. With your assistance, I am gaining a more thorough understanding of my capabilities.`, type: ActivityType.Listening},
      { name: `you~ | I feel more competent now than ever before. I even have the time outside my work for the Yashiro Commission to try some new things. Would you like to try one of my home-made snacks? I just learned how to make them recently.`, type: ActivityType.Listening},
      { name: `you~ | "Though I cling to that which has given me the strength to hold on, the weight of letting go is ever-foreboding."
      My apologies, it should be a happy occasion, and yet it is such a sad phrase that comes to mind. Our time together has been so pleasant that I am fearful of losing what I have gained. I'm sorry, I must compose myself.`, type: ActivityType.Listening},

    ];
    let i = 120;
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
console.log('Statuses have been loaded.')