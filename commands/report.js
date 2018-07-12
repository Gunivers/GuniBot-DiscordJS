const Discord = require('discord.js');
exports.run = (client, message, args, member) => {
if(args.length == 0) return message.channel.send('Je ne peut pas faire un report nul! syntaxe : `/report personne raison`');

	var member = message.guild.members.get(message.author.id)
 	const embed = new Discord.RichEmbed()
			.setColor(member.displayHexColor)
			.setDescription(`${message.author} a report ${message.mentions.members.first()} pour la raison suivante :\n${args.slice(1).join(" ")}`)
			.setTimestamp()

    var channel = client.channels.get('172794644529152000')

	channel.send(embed)

	message.channel.send("La personne à bien été report")
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  log: false,
  aliases: [],
  permLevel: "User" // "User" "Mod" "Admin" "Server Owner" "Bot Support" "Bot Admin" "Bot Owner"
}

exports.help = {
  name: "report",
  category: "Moderation", // "Divers" "Moderation" "Système"
  description: "Reporter un non respect des regle",
  usage: "report [personne] [raison]"
}