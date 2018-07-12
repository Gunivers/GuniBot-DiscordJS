exports.run = async (client, message, args, level) => {
  if(args.length == 0) return message.channel.send(`L'inversion du vide n'a pas encore été scientifiquement approuvé. Usage : \`${message.settings.prefix}reverse [phrase]\``);
  content = args.join(' ');
  return message.channel.send(content.split('').reverse().join(''));
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  log: false,
  aliases: [],
  permLevel: "User" // "User" "Mod" "Admin" "Server Owner" "Bot Support" "Bot Admin" "Bot Owner"
}

exports.help = {
  name: "reverse",
  category: "Divers", // "Divers" "Moderation" "Système"
  description: "Le nom dit tout ...",
  usage: "reverse [phrase]"
}
