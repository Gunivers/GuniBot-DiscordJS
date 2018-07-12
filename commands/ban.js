exports.run = async (client, message, args, level) => {
  var member = message.mentions.members.first();
  if (!member) return message.channel.send(`Merci de spécifier un membre. Usage : \`${message.settings.prefix}ban [@membre] [raison]\``);
  var reason = args.slice(1).join(" ");
  if (reason.length == 0) return message.channel.send(`Merci de spécifier une raison. Usage : \`${message.settings.prefix}ban [@membre] [raison]\``);
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`Vous n'avez pas les droits nécessaires.`);
  if (!member.bannable) return message.channel.send('Je ne peux pas bannir ce membre ! A-t-il un rôle plus élevé ? Ai-je les permissions ?');
  if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition)
    return message.channel.send('Vous ne pouvez pas bannir quelqu\'un ayant un rôle identique ou plus élevé que vous.');

  const key = `${message.guild.id}-${member.id}`;
  if (!client.usersDB.has(key)) {
    client.addUserToDB(key);
  }
  var casier = client.usersDB.getProp(key, 'casier');
  var newFile = {
    motif: 'ban',
    time: Date.now(),
    executor: message.author.tag,
    reason: reason
  }
  casier.push(newFile);
  client.usersDB.setProp(key, 'casier', casier);
  client.sendToLogChannel(message, `- [BANNISSEMENT] pour ${member.displayName} (${member.id})\n+ Banni par ${message.member.displayName}\n*** ${reason}`, 'diff');
  await member.user.send(`- [BANNISSEMENT en provenance de ${message.guild.name}]\nDe ${message.member.displayName}\n${reason}`, {
    code: 'diff'
  }).catch(function(err) {
    client.logger.error(err);
  });
  member.ban({
    days: 1,
    reason: reason
  });
  return message.channel.send(`🔨 **Ban Hammer Has Spoken** 🔨`);
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  log: false,
  aliases: [],
  permLevel: "Admin"
};

exports.help = {
  name: "ban",
  category: "Modération",
  description: "Banni un membre.",
  usage: "ban [@membre] [raison]"
};
