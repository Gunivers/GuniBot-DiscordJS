exports.run = async (client, message, args, level) => {

  const key = `${message.guild.id}-memes`;
  if (!client.memes.has(key)) {
    client.memes.set(key, {});
  }
  if (!args[0]) return message.channel.send(`Indiquez un nom de meme. Usage : \`${message.settings.prefix}meme [nom]\``);
  var meme = client.memes.getProp(key, args[0].toLowerCase());
  var memename
  if(!meme){
	  meme = "https://cdn.discordapp.com/attachments/369148909345308682/432104268493750292/11fjj7.jpg";
	  memename = "`Meme Inexistant`"
  }else {
	memename = "`" + args[0] + "`"
  }

  return message.channel.send(`${memename}`, {
    files: [meme]
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
  name: "meme",
  category: "Divers", // "Divers" "Moderation" "Système"
  description: "Affiche un meme",
  usage: "meme [nom]"
}
