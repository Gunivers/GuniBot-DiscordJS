exports.run = async (client, message, args, level) => {

  const key = `${message.guild.id}-memes`;
  if (!client.memes.has(key)) {
    client.memes.set(key, {});
  }

  if (!args[0]) return message.channel.send(`Indiquez un nom de meme. Usage : \`${message.settings.prefix}memeadd [nom] [url]\``);
  if (!args[1]) return message.channel.send(`Indiquez l'url de l'image ou du gif. Usage : \`${message.settings.prefix}memeadd [nom] [url]\``);
  if(checkURL(args[1]) == true) {
  client.memes.setProp(key, args[0].toLowerCase(), args[1]);
  return message.channel.send(`Le meme \`${args[0]}\` a bien été ajouté.`);
  } else return message.channel.send(`Le lien n'est pas valide!`);
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  log: false,
  aliases: [],
  permLevel: "PTDR" // "User" "Mod" "Admin" "Server Owner" "Bot Support" "Bot Admin" "Bot Owner"
}

exports.help = {
  name: "memeadd",
  category: "Divers", // "Divers" "Moderation" "Système"
  description: "Ajoute un meme pour la commande meme",
  usage: "memeadd [nom] [url]"
}
function checkURL(url) { if(url.match(/\.(jpeg|jpg|gif|bmp|png|webp)$/) != null) return true; else return false;}
