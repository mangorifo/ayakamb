const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const vl = [
  `**Hello**\n\nYoh, now just why might you be looking for me, hm? Oh, you didn't know? I'm the 77th Director of the Wangsheng Funeral Parlor, Hu Tao. Though by the looks of you... Radiant glow, healthy posture... Yes, you're definitely here for something other than that which falls within my regular line of work, aren't you?`,
  `**Chat: Wangsheng Funeral Parlor**\n\nWanna come over for tea?`,
  `**Chat: Customers**\n\nOne client, two clients, three clients!`,
  `**Chat: Taking a Break**\n\nWhen the sun's out, bathe in sunlight. But when the moon's out, bathe in moonlight~`,
  `**When it Rains**\n\n*sigh* What a bummer...`,
  `**When Thunder Strikes**\n\nLightning! Let's bolt!`,
  `**When it Snows**\n\nSnow!`,
  `**When it's Windy**\n\n Ahhhh~ What a nice breeze~`,
  `**When the Wind is Blowing**\n\nMy hat's gonna get blown away!`,
  `**Good Morning**\n\n Well are those who rise in the early morn, while those late to bed I shall forewarn~`,
  `**Good Afternoon**\n\nYo! Afternoon! Had lunch?`,
  `**Good Evening**\n\nHee-hee, moon's out, and so am I!`,
  `**Good Night**\n\nOh, you sleepy? Get some rest, I'm gonna take a walk by myself...`,
  `**About Hu Tao: Name**\n\nHu as in "Who put me in this coffin?" and Tao as in "I can't geT OUt!" Hehe... No, not funny?`,
  `**About Hu Tao: Favorite Tricks**\n\nLemme show you some fire tricks. First... Fire! And then... Whoosh! Fire butterfly! Be free!`,
  `**About Us: Curiosity**\n\nYou've been all over, so you must've seen a lot. When you've got the time, tell me your story, yea?`,
  `**About Us: Night**\n*Unlocked at Friendship Lv.6*\n\nRun around all you like during the day, but you should be careful during the night. When I'm not around, best keep your wits about you.`,
  `**About Us: Helper**\n*Unlocked at Friendship Lv.6*\n\nNeed a hand, need a hand? I'm here! If you need some assistance, I'm here to give it my all to the very end! Hee-hee...`,
  `**About Us: Battle**\n*Unlocked at Friendship Lv.6*\n\nFighting's a pain. For me, it's not an objective so much as a means to an end. Using the means to reach the end, to fight for that which I will not compromise on — it's in this way that you and I are the same.`,
  `**About the Vision**\n*Unlocked at Friendship Lv.4*\n\nVision... Vision...? Oh, this thing? Yeah, whatever...`,
  `**Something to Share**\n\nWe are entrusted by the people to loyally see out their wishes. Wangsheng Funeral Parlor is special, in that it carries a dual responsibility, to those both of this realm, and the next.`,
  `**Interesting Things**\n\nSome plants only grow in gloomier spots with ample moonlight. You ever seen any? Oh, no? Well, I'll have to show you next time.`,
  `**About Zhongli**\n*Unlocked at Friendship Lv.4*\n\nZhongli looks young, but his personality is a bit dusty. Knows everything, but doesn't fret over anything. Hmm... Couldn't be that he's a... Hehe, forget it, whatever.`,
  `**About Qiqi**\n*Unlocked at Friendship Lv.4*\n\nHave you seen Qiqi? Tell me where she is, quickly. I need to go seal her away, hee-hee!`,
  `**About Baizhu**\n*Unlocked at Friendship Lv.4*\n\nBaizhu? Ugh, that guy...`,
  `**About Ningguang**\n*Unlocked at Friendship Lv.4*\n\nTianquan Ningguang... Well-off, a radiant gaze, exquisite face, in the know and capable of anything!`,
  `**About Beidou**\n*Unlocked at Friendship Lv.4*\n\nBeidou is well-known in Liyue. She doesn't know me, but that's cool, me just knowing about her is enough. Aw man... I really do wanna make friends with her.`,
  `**About Xingqiu**\n*Unlocked at Friendship Lv.4*\n\nI hear master Xingqiu is writing a book? Standard novella, or a ghost story? I think I should go tell him about all the things I run into — that'd make for a really good read!`,
  `**About Chongyun**\n*Unlocked at Friendship Lv.4*\n\nPositive energies is unity between yin and yang... Who knew such people existed in this world.`,
  `**About Xiao**\n*Unlocked at Friendship Lv.4*\n\nWhat would I know of the adepti? Ai-yai-yai, that kind of stuff is top-secret! Don't come asking me about it!`,
  `**About Keqing**\n*Unlocked at Friendship Lv.4*\n\nThe Yuheng, Keqing... she's quite hard to talk to. She's so uptight, hehe... Really makes me wanna mess with her. She wouldn't knock me in the head with her sword though, right? Or would she...?`,
  `**About Xiangling**\n*Unlocked at Friendship Lv.4*\n\nXiangling's a riot! Only a little "boo" and she jumps, she's so easy to scare! Being in the industry that I am, I just love these kinds of people the most. Gotta keep it in check though, in case Guoba ends up toasting me instead.`,
  `**About Yun Jin**\n*Unlocked at Friendship Lv.4*\n\nYun Jin always appears so graceful on formal occassions, but you'd be surprised how friendly she is in private! I made a bet with her once, and the loser had to sing lyrics of the winner's choice in their own singing style. My my, I wish you could have heard her operatic version of the Hilitune!`,
  `**About Shenhe**\n*Unlocked at Friendship Lv.4*\n\nShe is quite the fascinating individual, completely different from anyone else I've encountered. Do you think if I started eating divine herbs and drinking the dew of the mountains every single day, I'd be able to look as pure and pristine as she does? Hehe...`,
  `**More About Hu Tao: I**\n\n♪Silly-churl, billy-churl, silly-billy hilichurl. Frilly-churl, willy-churl, frilly-willy hilichurl♪ Ah, hehe...`,
  `**More About Hu Tao: II**\n*Unlocked at Friendship Lv.3*\n\nVersemonger of the darkest alleys — that's me!`,
  `**More About Hu Tao: III**\n*Unlocked at Friendship Lv.4*\n\nIf you ask me, there's nothing hard or scary about working at Wangsheng Funeral Parlor, it's just a pain is all. It's a shame — others see us going out to work at night and just don't understand — and that's what scares them. *sigh* You all just don't understand!`,
  `**More About Hu Tao: IV**\n*Unlocked at Friendship Lv.5*\n\n'm Wangsheng Funeral Parlor's 77th Funeral Director, my grandfather was the 75th. First thing I took over was funeral affairs. Haha, surprising huh? And just like that, it's already been a few years... Time really does go by so quickly.`,
  `**More About Hu Tao: V**\n*Unlocked at Friendship Lv.6\n\nBalance must be maintained, and yet destinies remain variable. Death has its own rules, and yet is still hard to predict. Remember — no matter where, no matter when, no matter what the reason — one should never poke fun at death. Only once you know and respect death can you truly understand the value of life.`,
  `**Hu Tao's Hobbies**\n\nA bright moon aloft amid the vast, clear skies... Moments like these are just perfect for writing poetry.`,
  `**Hu Tao's Troubles**\n\n*sigh* I gotta find something fun to do... Sitting around doing nothing is a fate worse than death.`,
  `**Favorite Food**\n\n♪La~la~la~ Steamed fish with a side of prawn dumplings~`,
  `**Least Favorite Food**\n\nQingxin Slime Condensate... Bleugh... Surely this is Xiangling getting payback...`,
  `**Recieving a Gift: I**\n*if you give Hu Tao food she likes*\n\nSplendid, splendid! Now, allow me to compose a poem in loving memory of this dish.`,
  `**Recieving a Gift: II**\n*if you give Hu Tao food she kind of likes*\n\nSure you don't want my help? C'mon, it's a great deal: cook twice the amount in the same time!`,
  `**Recieving a Gift: III**\n*if you give Hu Tao food she dislikes*\n\nUgh, I declare this dish dead, rest in peace.`,
  `**Birthday**\n\nTonight the stars are dazzling and the moon majestic, it must be a special day... But just what day could it be... Haha, I know, I know! It's your birthday! It really is a great day.`,
  `**Feelings about Ascension: Intro**\n*Ascension Phase 1*\n\nO-ya? O-ya-ya-ya?`,
  `**Feelings about Ascension: Building Up**\n*Ascension Phase 2*\n\nYeah, this is good, thanks!`,
  `**Feelings about Ascension: Climax**\n*Ascension Phase 4*\n\nI never imagined that I, Hu Tao, could ever be like this. Energy like a rushing torrent, a heart soaring like a gliding eagle! I feel great!`,
  `**Feelings about Ascension: Conclusion**\n*Ascension Phase 6*\n\nIf I reach my full physical potential, then the next test is of the heart. It's largely thanks to you that I've been able to step foot into this uncharted territory. It is here that heart and soul are as one like clouds. Death is a constant for all among the multitudes that sit beneath the heavens.`,
  // combat
  `**Elemental Skill: I**\n\nHuh!`,
  `**Elemental Skill: II**\n\nChi!`,
  `**Elemental Skill: III**\n\nSuh!`,
  `**Elemental Burst: I**\n\nTime to go!`,
  `**Elemental Burst: II**\n\nCross over!`,
  `**Elemental Burst: III**\n\nPyre, pyre, pants on fire!`,
  `**Sprint Start: I**\n\nHuyoh!`,
  `**Sprint Start: II**\n\nGo~`,
  `**Sprint Start: III**\n\nHyu~`,
  `**Deploying Wind Glider**\n\nWith the wind~`,
  `**Opening Treasure Chest: I**\n\nJackpot!`,
  `**Opening Treasure Chest: II**\n\nWhat a cute treasure coffin!`,
  `**Opening Treasure Chest: III**\n\nIf we bury it, maybe it'll spring back to life!`,
  `**Low HP: I**\n\nAyaya!`,
  `**Low HP: II**\n\nEeeeeee!`,
  `**Low HP: III**\n\nThis isn't good!`,
  `**Ally at Low HP: I**\n\nTake it easy!`,
  `**Ally at Low HP: II**\n\nLemme have a go!`,
  `**Fallen: I**\n\nIs it... my time?`,
  `**Fallen: II**\n\nI'll remember that...`,
  `**Fallen: III**\n\nArgh...`,
  `**Heavy Hit Taken: I**\n\nQuit it!`,
  `**Joining Party: I**\n\nOh? Is it time for me to join you?`,
  `**Joining Party: II**\n\nGood eye!`,
  `**Joining Party: III**\n\nSend one, send 'em all!`,
  `**Idle: I**\n\n♪Silly-churl, billy-churl, silly-billy hilichurl... Woooh~`,
  `**Idle: II**\n\nAh? ... *chuckles* Toodle-oo!`,
]
module.exports = {
  data: new SlashCommandBuilder()
    .setName('hutaovoiceline')
    .setDescription('Sends a random voiceline of Hu Tao from "Genshin Impact".'),
  async execute(interaction) {
    const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('hutao')
          .setLabel('Send me another one')
          .setStyle(ButtonStyle.Secondary),
      );
    console.log('[LOG] | "hutaovl.js" was used')
    const voiceline = vl[Math.floor(Math.random() * vl.length)];
    const VoicelineEmbed = new EmbedBuilder()
      .setAuthor({ name: `Hu Tao` })
      .setDescription(voiceline)
    await interaction.reply({ embeds: [VoicelineEmbed], components: [row] });
    const filter = i => i.customId === 'hutao' && i.user.id === interaction.user.id;

    const collector = interaction.channel.createMessageComponentCollector({ filter });

    collector.on('collect', async i => {
      const vl2 = vl[Math.floor(Math.random() * vl.length)];
      const VLE = new EmbedBuilder()
        .setAuthor({ name: `Hu Tao` })
        .setDescription(vl2)
      return i.update({ embeds: [VLE], components: [row] })
    });
  },
};