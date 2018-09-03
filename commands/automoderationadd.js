exports.run = async (client, message, args, level) => {
	
if(!args[0]) return message.channel.send("Syntaxe : /automoderationadd lien/role [lien/role]")
	if(args[0] == "antilien"){

  const key = `${message.guild.id}-antilien`;
  if (!client.antilien.has(key)) {
    client.antilien.set(key, {});
  }

  if (!args[1]) return message.channel.send(`Indiquez un lien interdit`);
  client.antilien.setProp(key, args[1], "true");
  return message.channel.send(`Le lien \`${args[1]}\` a bien été ajouté.`);
	} else if (args[0] == "role"){
		
const key = `${message.guild.id}-userbypass`;
  if (!client.antilien.has(key)) {
    client.antilien.set(key, {});
  }
  
  if (!args[1]) return message.channel.send(`Indiquez un role qui peut bypass l'antilien`);
  let role = message.mentions.roles.first()
  client.antilien.setProp(key, role.id, "true");
  return message.channel.send(`Le role \`${role.name}\` a bien été ajouté.`);
  
	}
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  log: false,
  aliases: ["automodadd"],
  permLevel: "Admin" // "User" "Mod" "Admin" "Server Owner" "Bot Support" "Bot Admin" "Bot Owner"
}

exports.help = {
  name: "automoderationadd",
  category: "Modération", // "Divers" "Moderation" "Système"
  description: "Ajoute un lien pour l'automoderation",
  usage: "automoderationadd [lien]"
}
