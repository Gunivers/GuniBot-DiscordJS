exports.run = (client, message, args, level) => {

  const member = (!args[0]) ? message.member : message.mentions.members.first() || client.autocomplete(message, args.join(' '));

  const fortunes = [
    "jusqu'aux os.",
    "juste pour le plaisir.",
    "parce que c'est un(e) hérétique.",
    "pour se réchauffer.",
    "pour faire griller son steak.",
    "juste comme ça."

  ];

  if (member.id == message.author.id) return message.reply(`Tu as tenté de t'immoler ... Tu serais pas un peu con ?`);
  if (member.id === '250279569754423297') return message.channel.send(`${message.author} a essayé de brûler ${member} mais les dragons ne sont pas sensibles au feu`);
  if (member.id === '153254778682605569') return message.channel.send(`${message.author} a brûlé ${member} pour s'faire un kebab`);
  return message.channel.send(`${message.author} a brulé ${member} ${fortunes[Math.floor(Math.random() * fortunes.length)]}`);
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  log: false,
  aliases: [],
  permLevel: "Server Owner" // "User" "Mod" "Admin" "Server Owner" "Bot Support" "Bot Admin" "Bot Owner"
}

exports.help = {
  name: "brule",
  category: "Divers", // "Divers" "Moderation" "Système"
  description: "brule quelqu'un",
  usage: "brule <membre>"
}
