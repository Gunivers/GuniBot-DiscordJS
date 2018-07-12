exports.run = async (client, message, args, level) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Vous n'avez pas les droits nécessaires.`);
  if (!args[0]) {
    args[0] = 1;
  }
  let messagecount = parseInt(args[0]);

  if (!messagecount || messagecount < 1 || messagecount > 100) {
    return message.reply("Merci d'indiquer un nombre inférieur à 100.");
  }
  messagecount++;
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  log: false,
  aliases: [],
  permLevel: "Mod" // "User" "Mod" "Admin" "Server Owner" "Bot Support" "Bot Admin" "Bot Owner"
}

exports.help = {
  name: "purge",
  category: "Modération", // "Divers" "Moderation" "Système"
  description: "Purgez les tous !",
  usage: "Purge <nombre>"
}
