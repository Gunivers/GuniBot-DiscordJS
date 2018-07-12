exports.run = async (client, message, args, level) => {
  var member = message.mentions.members.first();
  if (!member) return message.channel.send(`Merci de spécifier un membre. Usage : \`${message.settings.prefix}avert [@membre] [raison]\``);
  var reason = args.slice(1).join(" ");
  if (reason.length == 0) return message.channel.send(`Merci de spécifier une raison. Usage : \`${message.settings.prefix}avert [@membre] [raison]\``);
  //if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition)
   // return message.channel.send('Vous ne pouvez pas avertir quelqu\'un ayant un rôle identique ou plus élevé que vous.');

  const key = `${message.guild.id}-${member.id}`;
  if (!client.usersDB.has(key)) {
    client.addUserToDB(key);
  }
  var casier = client.usersDB.getProp(key, 'casier');
  var newFile = {
    motif: 'avert',
    time: Date.now(),
    executor: message.author.tag,
    reason: reason
  }
  casier.push(newFile);
  client.usersDB.setProp(key, 'casier', casier);
  client.sendToLogChannel(message, `- [AVERTISSEMENT] pour ${member.displayName} (${member.id})\n+ Donné par ${message.member.displayName}\n*** ${reason}`, 'diff');
  return member.user.send(`- [AVERTISSEMENT en provenance de ${message.guild.name}]\nDe ${message.member.displayName}\n${reason}`, {
    code: 'diff'
  }).catch(function(err) {
    client.logger.error(err);
  });
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  log: false,
  aliases: [],
  permLevel: "Mod"
};

exports.help = {
  name: "avert",
  category: "Modération",
  description: "Ajoute un avertissement dans le casier d'un membre.",
  usage: "avert [@membre] [raison]"
};
