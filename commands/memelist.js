exports.run = async (client, message, args, level) => {

  const key = `${message.guild.id}-memes`;
  if (!client.memes.has(key)) {
    client.memes.set(key, {});
  }

  var memes = Object.keys(client.memes.get(key));
  memes.sort();
 // return message.channel.send(`Liste des meme :\n\`${memes.toString().replace(/[,]/g, '` - `')}\``);
  		return message.channel.send(`= Liste des meme =\n\n\- ${memes.toString().replace(/[,]/g, `\n\-\ `)}`, {
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
  name: "memelist",
  category: "Divers", // "Divers" "Moderation" "Système"
  description: "Liste les meme utilisables avec la commande meme",
  usage: "memelist"
}
