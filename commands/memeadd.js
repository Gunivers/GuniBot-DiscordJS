exports.run = async (client, message, args, level) => {

  const key = `${message.guild.id}-memes`;
  if (!client.memes.has(key)) {
    client.memes.set(key, {});
  }

  if (!args[0]) return message.channel.send(`Indiquez un nom de meme. Usage : \`${message.settings.prefix}memeadd [nom] [url]\``);
  if (!args[1]) return message.channel.send(`Indiquez l'url de l'image ou du gif. Usage : \`${message.settings.prefix}memeadd [nom] [url]\``);
  client.memes.setProp(key, args[0].toLowerCase(), args[1]);
  return message.channel.send(`Le meme \`${args[0]}\` a bien été ajouté.`);
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  log: false,
  aliases: [],
  permLevel: "Mod" // "User" "Mod" "Admin" "Server Owner" "Bot Support" "Bot Admin" "Bot Owner"
}

exports.help = {
  name: "memeadd",
  category: "Divers", // "Divers" "Moderation" "Système"
  description: "Ajoute un meme pour la commande meme",
  usage: "memeadd [nom] [url]"
}
