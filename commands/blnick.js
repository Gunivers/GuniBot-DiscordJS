exports.run = async (client, message, args, level) => {
  var member = message.mentions.members.first();
  if(!member) return message.channel.send(`Merci de spécifier un membre. Usage : \`${message.settings.prefix}blnick [@membre]\``);
  if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(`Vous n'avez pas les droits nécessaires.`);
  if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition)
    return message.channel.send('Vous ne pouvez pas blnick quelqu\'un ayant un rôle identique ou plus élevé que vous.');

  const key = `${message.guild.id}-${member.id}`;
  if (!client.usersDB.has(key)) {
    client.addUserToDB(key);
  }
  var blnick = client.usersDB.getProp(key, 'blnick');
  client.logger.debug(`key : ${key}`);
  client.logger.debug(`blnick : ${blnick}`);

  if(!blnick.on) {
    blnick.on = true;
    blnick.name = member.nickname;
    client.usersDB.setProp(key, 'blnick', blnick);
    return message.channel.send(`Le blnick a bien été activé pour ${member.displayName}`);
  } else {
    blnick.on = false;
    client.usersDB.setProp(key, 'blnick', blnick);
    return message.channel.send(`Le blnick a bien été désactivé pour ${member.displayName}`);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  log: false,
  aliases: [],
  permLevel: "Mod"
};

exports.help = {
  name: "blnick",
  category: "Modération",
  description: "Permet de forcer un pseudo ou d'arrêter de forcer un pseudo.",
  usage: "blnick [@membre]"
};
