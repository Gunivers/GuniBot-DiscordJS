exports.run = async (client, message, args, level) => {
let candidates = [];
message.guild.roles.forEach(member => {
      candidates.push(member.name)
    })
let rolelist = "= Liste des roles ="
  for (let i = 0; i < candidates.length; i++){
	  rolelist = rolelist + `\u200b\n- ${candidates[i]} :: ${message.guild.roles.find("name", candidates[i]).id}`
  }
message.channel.send(rolelist, {
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
  aliases: [],
  permLevel: "Bot Owner" // "User" "Mod" "Admin" "Server Owner" "Bot Support" "Bot Admin" "Bot Owner"
}

exports.help = {
  name: "rolelist",
  category: "Système", // "Divers" "Moderation" "Système"
  description: "Liste les roles",
  usage: "rolelist"
}