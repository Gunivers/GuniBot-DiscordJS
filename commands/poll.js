const Discord = require('discord.js');
exports.run = async (client, message, args, member) => {
	
  var question = args[0]
  let split = ';';
  
  args = args.join(' ').split(split);
  
  for (var i = 0; i < args.length; i++) args[i] = args[i].trim()
	
if(!args[0]) return message.channel.send("je ne peut pas creer de poll vide! syntaxe : `/choose question ; choix1 ; choix2 ..... choixX`")

	  if(!args[0]) return message.reply("Tu doit mettre une question!")
		  if(!args[2]) return message.reply("Tu doit mettre 2 choix minimum!")
			  if(args[16]) return message.reply("Tu doit mettre 15 choix max!")
  

var choix = question
var reaction = ["ptdr", ":zero:", ":one:", ":two:", ":three:", ":four:", ":five:", ":six:", ":seven:", ":eight:", ":nine:", ":regional_indicator_a:", ":regional_indicator_b:", ":regional_indicator_c:", ":regional_indicator_d:", ":regional_indicator_e:"]
 for (var i = 1; i < args.length; i++) {
	 var diffchoix = []
	 diffchoix.push(args[i])
	 choix = choix + `\n${reaction[i]}${args[i]}` 
 }
  
  var member = message.guild.members.get(message.author.id)
  
	const embed = new Discord.RichEmbed()
			.setColor(member.displayHexColor)
			.setDescription(choix)
			.setFooter("Demande de " + message.author.tag)
			.setTimestamp()

	
 const msgInter = await message.channel.send(embed);
 
  var reactionlist = ["ptdr", "\u0030\u20E3", "\u0031\u20E3", "\u0032\u20E3", "\u0033\u20E3", "\u0034\u20E3", "\u0035\u20E3", "\u0036\u20E3", "\u0037\u20E3", "\u0038\u20E3", "\u0039\u20E3", "🇦", "🇧", "🇨", "🇩", "🇪"]
  for (var i = 1; i < args.length; i++) {
  await msgInter.react(reactionlist[i]);
  }
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  log: false,
  aliases: [],
  permLevel: "User" // "User" "Mod" "Admin" "Server Owner" "Bot Support" "Bot Admin" "Bot Owner"
}

exports.help = {
  name: "poll",
  category: "Divers", // "Divers" "Moderation" "Système"
  description: "Creer un poll",
  usage: "poll [proposition]"
}

function isNumeric(val) {
  return Number(parseFloat(val)) === val;
}
