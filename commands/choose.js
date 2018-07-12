exports.run = (client, message, args, member) => {

  if(!args[0] || !args[1]) return message.channel.send(`Merci de préciser vos choix. Usage : \`${message.settings.prefix}choose [choix 1] [choix 2]\``);

    var random = Math.floor((Math.random() * 100) + 1);

    if (random <= 46) {
        random = args[0];
    } else if (random <= 90) {
        random = args[1];
    } else if (random >= 91) {
		random = "de laisser le dieu <@250279569754423297> répondre à ma place.";
	}
    message.channel.send({
        embed: {
            color: 0xFF0000,
            title: message.member.displayName + " m'a demandé de faire un choix entre " + args[0] + " et " + args[1],
           description: "j'ai choisi : " + random,
       }
   })
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  log: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "choose",
  category: "Divers",
  description: "Vous n'arrivez pas à faire un choix ? Demandez au bot !",
  usage: "choose [choix 1] [choix 2]"
};
