exports.run = (client, message, args, member) => {
	
  let split = /\s*;\s*/;
  args = args.join(' ').split(split);
  
  if(!args[0]) return message.channel.send("Merci de preciser un texte, syntaxe : `/webhook [message] ; [Nom Du WebHook] ; [Lien Image Du WebHook (Optionel)]`")
  if(!args[1]) return message.channel.send("Merci de preciser un nom, syntaxe : `/webhook [message] ; [Nom Du WebHook] ; [Lien Image Du WebHook (Optionel)]`")
  if(!args[2]){
message.channel.createWebhook(args[1], "https://pbs.twimg.com/profile_images/1016814904383139840/2CdaitAm_400x400.jpg", "Commande WebHook")
	.then(webhook =>  {
	webhook.send(args[0])
	webhook.delete()
	})
  } else {
	 if(checkURL(args[2]) == true) {
message.channel.createWebhook(args[1], args[2].replace(' ',''), "Commande WebHook")
	.then(webhook =>  {
	webhook.send(args[0])
	webhook.delete()
	})
 } else return message.channel.send("Le lien d'image est incorrect")
  }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  log: false,
  aliases: [],
  permLevel: "Admin" // "User" "Mod" "Admin" "Server Owner" "Bot Support" "Bot Admin" "Bot Owner"
}

exports.help = {
  name: "webhook",
  category: "Divers", // "Divers" "Moderation" "Système"
  description: "Fait dire quelque chose au bot, par un webhook",
usage: "webhook [message] ; [Nom Du WebHook] ; [Lien Image Du WebHook (Optionel)]"
}

function checkURL(url) { if(url.match(/\.(jpeg|jpg|gif|bmp|png|webp)$/) != null) return true; else return false;}