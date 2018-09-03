const Discord = require("discord.js")
exports.run = async (client, message, args) => {
	  var member = (!args[0]) ? message.member : message.mentions.members.first() || client.autocomplete(message, args.join(' '));

	const key = `${message.guild.id}-${member.id}`
    if (!client.usersDB.has(key)) {
    client.usersDB.set(key, {
      user: member.id,
      guild: message.guild.id,
      points: 0,
      level: 1
    });
	}
	 let points = client.usersDB.getProp(key, "points");
	 let level = client.usersDB.getProp(key, "level");
	 
	 if(member.id == message.author.id) return message.reply(`Vous etes level ${level} et vous avez ${points} point(s)`)
	 if(member.id !== message.author.id) return message.channel.send(`${member.displayName} est level ${level} et a ${points} point(s)`)

}


exports.conf = {
  enabled: true,
  guildOnly: true,
  log: false,
  aliases: [],
  permLevel: "User" // "User" "Mod" "Admin" "Server Owner" "Bot Support" "Bot Admin" "Bot Owner"
}

exports.help = {
  name: "rank",
  category: "Divers", // "Divers" "Moderation" "Système"
  description: "Permet de voir son niveau ou le niveau d'un joueur",
  usage: "rank [user]"
}