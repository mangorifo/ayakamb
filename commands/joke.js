const { SlashCommandBuilder } = require('discord.js');
const pgjk = [
"Eight bytes walk into a bar.  The bartender asks, “Can I get you anything?”\n“Yeah,” reply the bytes.  “Make us a double.”",
  "How did the programmer die in the shower?\nHe read the shampoo bottle instructions: Lather. Rinse. Repeat.",
  "How many programmers does it take to change a light bulb?\nNone – It’s a hardware problem",
  "Why do programmers always mix up Halloween and Christmas?\nBecause Oct 31 equals Dec 25.",
  "There are only 10 kinds of people in this world: those who know binary and those who don’t.",
  "A programmer walks to the butcher shop and buys a kilo of meat.  An hour later he comes back upset that the butcher shortchanged him by 24 grams.",
 "“Knock, knock.”\n“Who’s there?”\n*very long pause….*\n“Java.”",
  "Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science.",
  "Programming is like sex:\nOne mistake and you have to support it for the rest of your life.",
  "A man is smoking a cigarette and blowing smoke rings into the air.  His girlfriend becomes irritated with the smoke and says, “Can’t you see the warning on the cigarette pack?  Smoking is hazardous to your health!”\nTo which the man replies, “I am a programmer.  We don’t worry about warnings; we only worry about errors.”",
  "There are three kinds of lies: Lies, damned lies, and benchmarks.",
  "A programmer is walking along a beach and finds a lamp.  He rubs the lamp, and a genie appears.  “I am the most powerful genie in the world.  I can grant you any wish, but only one wish.”\n\nThe programmer pulls out a map, points to it and says, “I’d want peace in the Middle East.”\n\nThe genie responds, “Gee, I don’t know.  Those people have been fighting for millennia.  I can do just about anything, but this is likely beyond my limits.”\n\nThe programmer then says, “Well, I am a programmer, and my programs have lots of users.  Please make all my users satisfied with my software and let them ask for sensible changes.”\nAt which point the genie responds, “Um, let me see that map again.”",
  "All programmers are playwrights, and all computers are lousy actors.",
  "Have you heard about the new Cray super computer?  It’s so fast, it executes an infinite loop in 6 seconds.",
  "The generation of random numbers is too important to be left to chance.",
  "“I just saw my life flash before my eyes and all I could see was a close tag…”",
  "The computer is mightier than the pen, the sword, and usually, the programmer.",
  "Debugging: Removing the needles from the haystack.",
  "Two strings walk into a bar and sit down. The bartender says, “So what’ll it be?”\n\nThe first string says, “I think I’ll have a beer quag fulk boorg jdk^CjfdLk jk3s d#f67howe%^U r89nvy~~owmc63^Dz x.xvcu”\n\n“Please excuse my friend,” the second string says, “He isn’t null-terminated.”",
  "From the Random Shack Data Processing Dictionary:\n\nEndless Loop: n., see Loop, Endless.\nLoop, Endless: n., see Endless Loop.",
  "The three most dangerous things in the world are a programmer with a soldering iron, a hardware engineer with a software patch, and a user with an idea.  – The Wizardry Compiled by Rick Cook",
  "One hundred little bugs in the code\nOne hundred little bugs.\nFix a bug, link the fix in,\nOne hundred little bugs in the code.",
 "A computer science student is studying under a tree and another pulls up on a flashy new bike.  The first student asks, “Where’d you get that?”\n\nThe student on the bike replies, “While I was studying outside, a beautiful girl pulled up on her bike.  She took off all her clothes and said, ‘You can have anything you want’.”\n\nThe first student responds, “Good choice!  Her clothes probably wouldn’t have fit you.”",
  "CD-ROM: Consumer Device, Rendered Obsolete in Months",
  "PCMCIA: People Can’t Memorize Computer Industry Acronyms",
  "WINDOWS: Will Install Needless Data On Whole System",
  "DOS: Defunct Operating System",
  "MIPS: Meaningless Indication of Processor Speed",
  "SCSI: System Can’t See It",
  "WYSIWYMGIYRRLAAGW: What You See Is What You Might Get If You’re Really Really Lucky And All Goes Well.",
  "Hardware (noun.)\nThe part of a computer that you can kick.",
  "What do you call a programmer from Finland?\n\nNerdic",
"What is a programmer's favorite hangout place?\n\nFoo bar",
  "0 is false and 1 is true, right?\n\n1",
  "What do computers and air conditioners have in common?\n\nThey both become useless when you open windows."
]
const njoke = [
  "What’s the best thing about Switzerland?\n\nI don’t know, but the flag is a big plus.",
 "I invented a new word!\nPlagiarism!",
  "Did you hear about the mathematician who’s afraid of negative numbers?\n\nHe’ll stop at nothing to avoid them.",
  "Why do we tell actors to “break a leg?”\nBecause every play has a cast.",
  "Helvetica and Times New Roman walk into a bar.\n“Get out of here!” shouts the bartender. “We don’t serve your type.”",
  "Yesterday I saw a guy spill all his Scrabble letters on the road. I asked him, “What’s the word on the street?”\nOnce my dog ate all the Scrabble tiles. For days he kept leaving little messages around the house.",
  "Hear about the new restaurant called Karma?\nThere's no menu: You get what you deserve.",
  "A woman in labor suddenly shouted, “Shouldn’t! Wouldn’t! Couldn’t! Didn’t! Can’t!”\n“Don’t worry,” said the doctor. “Those are just contractions.”",
  "A bear walks into a bar and says, “Give me a whiskey and … cola.”\n“Why the big pause?” asks the bartender. The bear shrugged. “I’m not sure; I was born with them.”",
  "Did you hear about the actor who fell through the floorboards?\nHe was just going through a stage.",
  "Did you hear about the claustrophobic astronaut?\nHe just needed a little space.",
  "Why don’t scientists trust atoms?\n\nBecause they make everything.",
  "Why did the chicken go to the séance?\n\nTo get to the other side.",
  "Where are average things manufactured?\n\nThe Satisfactory.",
  "How do you drown a hipster?\n\nThrow him in the mainstream.",
  "What sits at the bottom of the sea and twitches?\n\nA nervous wreck.",
  "What does a nosy pepper do?\n\nGets jalapeño business!",
  "How does Moses make tea?\n\nHe brews.",
  "Why can’t you explain puns to kleptomaniacs?\n\nThey always take things literally.",
  "How do you keep a bagel from getting away?\n\nPut lox on it.",
  "A man tells his doctor, “Doc, help me. I’m addicted to Twitter!”\n\nSorry... I don't follow you.",
  "What kind of exercise do lazy people do?\n\nDiddly-squats.",
  "Why don’t Calculus majors throw house parties?\n\nBecause you should never drink and derive.",
  "What do you call a parade of rabbits hopping backwards?\n\nA receding hare-line.",
]
module.exports = {
	data: new SlashCommandBuilder()
		.setName('joke')
		.setDescription('haha verry funny')
    .addStringOption(option =>
		option.setName('joketype')
			.setDescription('what kind of joke?')
			.setRequired(true)
			.addChoices(
				{ name: 'Programming', value: 'prgjk' },
        { name: 'Normal joke', value: 'njk'}
        )),
	async execute(interaction) {
     const PGJKFind = pgjk[Math.floor(Math.random() * pgjk.length)];
    console.log('[LOG] | "joke.js" was used')
    const JKFind = njoke[Math.floor(Math.random() * njoke.length)];
    if (interaction.options.getString('joketype') == 'prgjk') {
		return interaction.reply('**Programming Joke**\n\n' + PGJKFind);
    }
    else if (interaction.options.getString('joketype') == 'njk') {
      return interaction.reply('**Normal Joke**:\n\n' + JKFind)
    }
	},
};