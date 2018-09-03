const Discord = require('discord.js');
exports.run = (client, message, args, member) => {
	
  let split = ';';
  
  args = args.join(' ').split(split);
  
  for (var i = 0; i < args.length; i++) args[i] = args[i].trim()
	
if(!args[0]) return message.channel.send("je ne peut créer de choix vide! syntaxe : `/choose choix1 ; choix2 ..... choixX`")

	  if(!args[0]) return message.reply("Tu doit mettre des choix!")
		  if(!args[1]) return message.reply("Tu doit mettre 2 choix minimum!")
  
var choix = `J'ai du choisir entre:`
 for (var i = 0; i < args.length; i++) {
	 var diffchoix = []
	 diffchoix.push(args[i])
	 choix = choix + `\n${args[i]}` 
 }
  
  var member = message.guild.members.get(message.author.id)
  
	const embed = new Discord.RichEmbed()
			.setColor(member.displayHexColor)
			.setDescription(choix + `\n\nJ'ai choisi: ${diffchoix[Math.floor(Math.random() * diffchoix.length)]}`)
			.setFooter("Demande de " + message.author.tag)
			.setTimestamp()

	
	message.channel.send(embed);
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
  usage: "choose nbrchoix ; [choix 1] ; [choix 2]"
};

function isNumeric(val) {
  return Number(parseFloat(val)) === val;
}
