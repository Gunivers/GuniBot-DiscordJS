const Discord = require("discord.js");
var request = require('request');
const moment = require("moment");



exports.run = (client, message, args, level) => {
	
var url
var url1
var ip
var syntaxe = "syntaxe : `/mc (server/skin/tete/status/name) NomDuJoueur/IpDuServeur (port du serveur)`"
const m = message.guild.members.get(message.author.id);

if(!args[0]) return message.channel.send("Indique ce que tu veux voir, " + syntaxe)
if(args[0] == "name" ){
	if(!args[1]) return message.channel.send("Indique le nom du joueur dont tu veux voir l'historique des pseudo, " + syntaxe)
		
	url = "https://api.mojang.com/users/profiles/minecraft/" + args[1]
		try {
		request(url, function(err, response, body) {
			body = JSON.parse(body);
			url = "https://api.mojang.com/user/profiles/" + body.id + "/names"
			request(url, function(err, response, body) {
				body = JSON.parse(body)
				var namehistorique = "Historique des nom :"
				for (let i = 0; i < body.length; i++){
					if(i !== 0) namehistorique = namehistorique + "\n\n`" + body[i].name + "`, Pseudo mis le " + moment(new Date (body[i].changedToAt).toISOString()).format("dddd Do MMMM YYYY à HH:mm")
				    if (i == 0) namehistorique = namehistorique + "\n\n`" + body[i].name + "`, Premier pseudo"
			}
			const embed = new Discord.RichEmbed()
			    .setColor(m.displayHexColor)
				.setAuthor("historique de nom de " + args[1], "https://cravatar.eu/helmhead/" + args[1] + ".png")
				.setDescription(namehistorique)
				.setFooter("from mojang API")
				.setTimestamp()
				
			message.channel.send(embed)
			})
		})
		} catch (err) {message.channel.send("Ce joueur n'existe pas!")}
	
	
}else if(args[0] == "status"){
	url = "https://status.mojang.com/check"
	 request(url, function(err, response, body) {
            if(err) {
                console.log(err);
                return message.reply('Error getting Minecraft server status...');
            }
			
            body = JSON.parse(body);
			var status = `minecraft.net : ${body[0]["minecraft.net"]}\nsession.minecraft.net : ${body[1]["session.minecraft.net"]}\naccount.mojang.com : ${body[2]["account.mojang.com"]}\nauthserver.mojang.com : ${body[3]["authserver.mojang.com"]}\nsessionserver.mojang.com : ${body[4]["sessionserver.mojang.com"]}\napi.mojang.com : ${body[5]["api.mojang.com"]}\ntextures.minecraft.net : ${body[6]["textures.minecraft.net"]}\nmojang.com : ${body[7]["mojang.com"]}`
			var regex = /\b(green)\b/g;
			var regex1 = /\b(yellow)\b/g;
			var regex2 = /\b(red)\b/g;
			status = status.replace(regex, "🔵")
			status = status.replace(regex1, "🔴")
			status = status.replace(regex2, "⚫")
			
			  
			  const embed = new Discord.RichEmbed()
			    .setAuthor("Minecraft/Mojang Status", "https://images-ext-2.discordapp.net/external/kJlGHWJ6b37N0UioK2DAf06MLaESzL7j-DWL-my9sE8/https/pbs.twimg.com/profile_images/623422129502056448/9ehvGDEy.png")
                .setColor(m.displayHexColor)
				.setDescription(status + "\n\n🔵 = service normal, 🔴 = quelque problème , ⚫ = service mort")
				.setThumbnail("https://images-ext-2.discordapp.net/external/kJlGHWJ6b37N0UioK2DAf06MLaESzL7j-DWL-my9sE8/https/pbs.twimg.com/profile_images/623422129502056448/9ehvGDEy.png")
				.setFooter("API : https://status.mojang.com/check")
				.setTimestamp()
			
			message.channel.send(embed)
	 })
	
}else if(args[0] == "tete"){
	if(!args[1]) return message.channel.send("Indique le joueur dont tu veux voir la tête, " + syntaxe)
		var playerhead = "https://cravatar.eu/helmhead/" + args[1] + ".png"
		try{
	message.channel.send(`\`${args[1]}\` tête`, {
	files : [playerhead]
	})
		} catch (err) {message.channel.send("Ce joueur n'existe pas!")}
	
} else if (args[0] == "skin"){
		if(!args[1]) return ("indique le joueur dont tu veux voir le skin, " + syntaxe)
		url = "https://api.mojang.com/users/profiles/minecraft/" + args[1]
		try {
		request(url, function(err, response, body) {
			body = JSON.parse(body);
			var playerskin = "https://crafatar.com/skins/" + body.id + ".png"
	return message.channel.send(`\`${args[1]}\` skin`, {
    files: [playerskin]
  });		
		})
		} catch (err) {message.channel.send("Ce joueur n'existe pas!")}
	} else if(args[0] == "server") {

if (!args[1]) return message.channel.send("Donne une ip de serveur, " + syntaxe)
var mcIP = args[1]
if (!args[2]) {
 url = "https://api.minetools.eu/ping/" + mcIP
 url1 = "https://api.minetools.eu/favicon/" + mcIP
 ip = `Information du serveur ${mcIP}`
} else {
 var mcPort = args[2]
 url = "https://api.minetools.eu/ping/" + mcIP + "/" + mcPort
 url1 = "https://api.minetools.eu/favicon/" + mcIP + "/" + mcPort
 ip = `Information du serveur ${mcIP}:${mcPort}`
}
 request(url, function(err, response, body) {
            if(err) {
                console.log(err);
                return message.reply('Error getting Minecraft server status...');
            }
			
            body = JSON.parse(body);
			if (!args[2]) {
				if(body.error) return message.channel.send("Le serveur `" + mcIP + "` n'est pas allumé ")
			} else if(body.error) return message.channel.send("Le serveur `" + mcIP + ":" + mcPort + "` n'est pas allumé ")
			var Joueur
		    var JoueurCo = body.players.sample
			if(body.players.sample.length == 1){
			Joueur = JoueurCo[0].name
			} else if(body.players.sample.length >= 2) {
			Joueur = JoueurCo[0].name
			for (let i = 1; i < JoueurCo.length; i++){
				var reg = /(_)/g;
				Joueur = Joueur + ", " + JoueurCo[i].name.replace(reg, "\_")
			}
			} else {
				if(body.players.online == "0") {
					Joueur = "Personne"
				} else Joueur = "Cachée"
			}
			
			var regex = /§\w/g;
  
  const embed = new Discord.RichEmbed()
    .setColor(m.displayHexColor)
	.addField("Version", body.version.name, true)
	.addField("Nombre de joueurs", `${body.players.online}/${body.players.max}`, true)
	.addField("Liste des joueurs connectés", Joueur)
	.addField("Latence", body.latency, true)
	.addField("Description", body.description.replace(regex, ""), true)
	.setFooter("From api.minetools.eu")
	.setTimestamp()	
	
	if(body.favicon !== null){
	embed.setThumbnail(url1)
	embed.setAuthor(ip, url1)
	} else {
		embed.setAuthor(ip)
	}

    return message.channel.send({embed});
        });
} else return message.channel.send(syntaxe)
}


exports.conf = {
  enabled: true,
  guildOnly: true,
  log: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "mc",
  category: "Divers",
  description: "Obtenir les info de quelque chose en rapport avec mc",
usage: "mcserver (server/status) [serveur ip] [server port]"
};
