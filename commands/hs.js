exports.run = async (client, message, args, level) => {
	
	if(!args[0]) {
		message.channel.send(`:warning: VOUS VOUS TROUVEZ ACTUELLEMENT DANS LE SALON <#${message.channel.id}> , VEUILLEZ PASSER DANS LE SALON <#125723125685026816> AFIN DE CONTINUER VOTRE DISCUSSION :warning:`)
} else {
	if(args[0].startsWith("<#") && args[0].endsWith(">")) {
		message.channel.send(`:warning: VOUS VOUS TROUVEZ ACTUELLEMENT DANS LE SALON <#${message.channel.id}> , VEUILLEZ PASSER DANS LE SALON ${args[0]} AFIN DE CONTINUER VOTRE DISCUSSION :warning:`)
	} else return message.channel.send(`\`${args[0]}\` n'est pas un channel valide`)
}

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  log: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "hs",
  category: "Divers",
  description: "Envoie un message indiquant qu'il y'a une discution dans le mauvais channel",
  usage: "hs"
};
