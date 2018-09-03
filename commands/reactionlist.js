const Discord = require("discord.js")
exports.run = async (client, message, args, level) => {

  const key = `${message.guild.id}-reaction`;
  if (!client.reaction.has(key)) {
    client.reaction.set(key, {});
  }

  let memes = Object.keys(client.reaction.get(key));
  memes.sort
  let ListReaction = "= Liste Des reaction =\n"
  for (let i = 0; i < memes.length; i++){
	  ListReaction = ListReaction + `\u200b\n- ${memes[i]}`
  }
 		return message.channel.send(ListReaction, {
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
  permLevel: "User" // "User" "Mod" "Admin" "Server Owner" "Bot Support" "Bot Admin" "Bot Owner"
}

exports.help = {
  name: "reactionlist",
  category: "Divers", // "Divers" "Moderation" "Système"
  description: "Liste les reaction",
  usage: "reactionlist"
}