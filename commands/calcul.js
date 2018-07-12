var math = require('mathjs');

exports.run = (client, message, args, member) => {
	try {	
		(message.channel.send("Le résultat du calcul `" + args.join(' ') + "` est `" + math.eval(args.join(' ')) + "`"));
	} catch (err) {
		console.error(err);
		message.channel.send( message.author + ", désolé ce calcul est impossible : `" + args + "`. Soit je ne suis pas en mesure de résoudre ce calcul, soit la syntaxe est incorrecte!")
	}
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  log: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "calcul",
  category: "Divers",
  description: "Besoin de faire un calcul ? Demandez au bot",
  usage: "calcul [calcul]"
};
