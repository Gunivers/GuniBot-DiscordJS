const Discord = require("discord.js")
exports.run = async (client, message, args, level) => {

  const key = `${message.guild.id}-antilien`;
  if (!client.antilien.has(key)) {
    client.antilien.set(key, {});
  }

  let lien = Object.keys(client.antilien.get(key));
  lien.sort()
  let ListAutoMod = `\u200b= Liste Des Lien interdit =\n`
  for (let i = 0; i < lien.length; i++){
	  ListAutoMod = ListAutoMod + `\u200b\n- ${lien[i]}`
  }
  
    const key1 = `${message.guild.id}-userbypass`;
  if (!client.antilien.has(key1)) {
    client.antilien.set(key1, {});
  }
    let rolelist = Object.keys(client.antilien.get(key1));
  rolelist.sort()
  ListAutoMod = `${ListAutoMod}\n\n\u200b= Liste Des role bypass =\n`
  for (let i = 0; i < rolelist.length; i++){
	  ListAutoMod = ListAutoMod + `\u200b\n- ${message.guild.roles.get(rolelist[i]).name}`
  }
 		return message.channel.send(ListAutoMod, {
      code: "asciidoc",
      split: {
        char: "\u200b"
      }
    }).catch(function(err) {
      client.logger.error(err);
    });
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  log: false,
  aliases: ["automodlist"],
  permLevel: "Admin" // "User" "Mod" "Admin" "Server Owner" "Bot Support" "Bot Admin" "Bot Owner"
}

exports.help = {
  name: "automoderationlist",
  category: "Modération", // "Divers" "Moderation" "Système"
  description: "Liste les lien et role de l'automoderation",
  usage: "automoderationlist"
}