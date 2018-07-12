exports.run = async (client, message, args, level) => {

  const key = `${message.guild.id}-memes`;
  if (!client.memes.has(key)) {
    client.memes.set(key, {});
  }

  if (!args[0]) return message.channel.send(`Indiquez un nom de meme. Usage : \`${message.settings.prefix}memedel [nom]\``);
  var meme = client.memes.getProp(key, args[0].toLowerCase());
  if(!meme) return message.channel.send(`Le meme ${args[0]} n'existe pas.`);
  await client.memes.deleteProp(key, args[0]);
  return message.channel.send(`Le meme ${args[0]} a été supprimé.`);
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  log: false,
  aliases: [],
  permLevel: "Mod" // "User" "Mod" "Admin" "Server Owner" "Bot Support" "Bot Admin" "Bot Owner"
}

exports.help = {
  name: "memedel",
  category: "Divers", // "Divers" "Moderation" "Système"
  description: "Supprime un meme pour la commande meme",
  usage: "memedel [nom]"
}
