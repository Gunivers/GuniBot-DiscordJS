exports.run = async (client, message, args, level) => {
  var member = message.mentions.members.first();
  if (!member) return message.channel.send(`Merci de spécifier un membre. Usage : \`${message.settings.prefix}mute [@membre] [raison]\``);
  var reason = args.slice(1).join(" ");
  if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition)
    return message.channel.send('Vous ne pouvez pas muter quelqu\'un ayant un rôle identique ou plus élevé que vous.');

  const key = `${message.guild.id}-${member.id}`;

  var muteID = '423228044376014858';
  if (member.roles.has(muteID)) {
    //il est mute donc on le démute
    let roles = client.usersDB.getProp(key, 'rolesB4Mute');
    member.setRoles(roles);
    client.sendToLogChannel(message, `- [UNMUTE] pour ${member.displayName} (${member.id})\n+ Appliqué par ${message.member.displayName}`, 'diff');
    return member.user.send(`- [UNMUTE en provenance de ${message.guild.name}]\nPar ${message.member.displayName}`, {
      code: 'diff'
    }).catch(function(err) {
      client.logger.error(err);
    });
  }

  if (reason.length == 0) return message.channel.send(`Merci de spécifier une raison. Usage : \`${message.settings.prefix}mute [@membre] [raison]\``);

  if (!client.usersDB.has(key)) {
    client.addUserToDB(key);
  }
  var nbMutes = client.usersDB.getProp(key, 'nbMutes');
  if (nbMutes === null) {
    nbMutes = 0;
  }
  nbMutes++;
  client.usersDB.setProp(key, 'nbMutes', nbMutes);
  let roles = Array.from(member.roles.keys());
  client.usersDB.setProp(key, 'rolesB4Mute', roles);
  member.setRoles(new Array(muteID));
  client.sendToLogChannel(message, `- [MUTE] pour ${member.displayName} (${member.id})\n+ Appliqué par ${message.member.displayName}\n*** ${reason}`, 'diff');
  return member.user.send(`- [MUTE en provenance de ${message.guild.name}]\nDe ${message.member.displayName}\n${reason}`, {
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
  permLevel: "Mod" // "User" "Mod" "Admin" "Server Owner" "Bot Support" "Bot Admin" "Bot Owner"
}

exports.help = {
  name: "mute",
  category: "Modération", // "Divers" "Moderation" "Système"
  description: "Permet de mute/unmute un membre",
  usage: "mute [@membre]"
}
