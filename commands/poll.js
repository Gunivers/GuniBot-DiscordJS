const Discord = require('discord.js');
exports.run = async (client, message, args, member) => {
	
  let split = ';';
  
  args = args.join(' ').split(split);
  
  for (var i = 0; i < args.length; i++) args[i] = args[i].trim()
	
if(!args[0]) return message.channel.send("je ne peut pas creer de poll vide! syntaxe : `/poll nbrchoix ; question ; choix1 ; choix2 ..... choixX` (5 choix max)")
  
  var nbrpoll = +args[0]
  
   if (!isNumeric(nbrpoll)) {
    return message.reply(`Desolé mais tu peut pas mettre` + nbrpoll + ` choix! C'est pas un chiffre quoi`);
  }
  
   if (nbrpoll < 2 || nbrpoll > 5) return message.reply('Tu peut mettre seulement entre 2 et 5 choix');
  
  if(!args[1]) return message.reply("Tu doit mettre une question!")
	  if(!args[2]) return message.reply("Tu doit mettre des choix!")
		  if(!args[3]) return message.reply("Tu doit mettre 2 choix minimum!")
  
  
  var choix
  
if(nbrpoll == "2") choix = `:one: ${args[2]}\n:two: ${args[3]}`
if(nbrpoll == "3") choix = `:one: ${args[2]}\n:two: ${args[3]}\n:three: ${args[4]}`
if(nbrpoll == "4") choix = `:one: ${args[2]}\n:two: ${args[3]}\n:three: ${args[4]}\n:four: ${args[5]}`
if(nbrpoll == "5") choix = `:one: ${args[2]}\n:two: ${args[3]}\n:three: ${args[4]}\n:four: ${args[5]}\n:five: ${args[6]}`
  
  var member = message.guild.members.get(message.author.id)

	const embed = new Discord.RichEmbed()
			.setColor(member.displayHexColor)
			.setTitle(args[1])
			.setDescription(choix)
			.setFooter("Poll de " + message.author.tag)
			.setTimestamp()

	
 const msgInter = await message.channel.send(embed);
  await msgInter.react("\u0031\u20E3");
  await msgInter.react("\u0032\u20E3");
  if(nbrpoll >= "3") await msgInter.react("\u0033\u20E3"); 
  if(nbrpoll >= "4") await msgInter.react("\u0034\u20E3");
  if(nbrpoll >= "5") await msgInter.react("\u0035\u20E3");
  
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