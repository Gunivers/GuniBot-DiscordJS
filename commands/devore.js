exports.run = (client, message, args, level) => {

  const member = (!args[0]) ? message.member : message.mentions.members.first() || client.autocomplete(message, args.join(' '));

  const fortunes = [
    "jusqu'aux os.",
    "sans laisser de miettes.",
    "en laissant un bain de sang.",
    "et recraché parce qu'il n'est pas bon",
    "et en est délecté.",
    "juste pour le plaisir."
  ];
  if(member.id == message.author.id) return message.channel.send(`${message.member.displayName} s'est dévoré ... Encore un adepte de l'autocannibalisme.`);
  return message.channel.send(`${message.member.displayName} a dévoré ${member} ${fortunes[Math.floor(Math.random() * fortunes.length)]}`);

}

exports.conf = {
  enabled: true,
  guildOnly: true,
  log: false,
  aliases: [],
  permLevel: "Server Owner" // "User" "Mod" "Admin" "Server Owner" "Bot Support" "Bot Admin" "Bot Owner"
}

exports.help = {
  name: "devore",
  category: "Divers", // "Divers" "Moderation" "Système"
  description: "dévore quelqu'un",
  usage: "devore <membre>"
}
