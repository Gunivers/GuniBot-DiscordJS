exports.run = (client, message, args, member) => {
var member = (!args[0]) ? message.member : message.mentions.members.first() || client.autocomplete(message, args[0]);

let texte = args.slice(1).join(" ");
let avatar 
  if (!member.user.avatarURL) {
	avatar = "https://pbs.twimg.com/profile_images/1016814904383139840/2CdaitAm_400x400.jpg"
  } else {
    avatar = member.user.avatarURL
  }

  if(!args[0]) return message.channel.send("Merci de preciser une personne, syntaxe : `imitate [user] [message]`")
  if(!args[1]) return message.channel.send("Merci de preciser un texte, syntaxe : `imitate [user] [message]`")

message.channel.createWebhook(member.displayName, avatar, "Commande WebHook")
	.then(webhook =>  {
	webhook.send(texte)
	webhook.delete()
	})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  log: false,
  aliases: [],
  permLevel: "Admin" // "User" "Mod" "Admin" "Server Owner" "Bot Support" "Bot Admin" "Bot Owner"
}

exports.help = {
  name: "imitate",
  category: "Divers", // "Divers" "Moderation" "Système"
  description: "Fait dire quelque chose au bot, par un webhook",
usage: "imitate [user] [message]"
}

function checkURL(url) { if(url.match(/\.(jpeg|jpg|gif|bmp|png|webp)$/) != null) return true; else return false;}