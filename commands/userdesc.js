exports.run = async (client, message, args, level) => {
  var member = message.mentions.members.first();
  if (!member) {
    member = message.member;
    var userDesc = args.join(" ");
  } else {
    var userDesc = args.slice(1).join(" ");
  }
  if ((member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition) && (member.id != message.member.id))
    return message.channel.send('Vous ne pouvez pas changer la description de quelqu\'un ayant un rôle identique ou plus élevé que vous.');
  const key = `${message.guild.id}-${member.id}`;
  if (!client.usersDB.has(key)) {
    client.addUserToDB(key);
  }

  client.usersDB.setProp(key, 'userDesc', userDesc);

  return message.channel.send('Description mise à jour.');

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  log: false,
  aliases: [],
  permLevel: "Mod" // "User" "Mod" "Admin" "Server Owner" "Bot Support" "Bot Admin" "Bot Owner"
};

exports.help = {
  name: "userdesc",
  category: "Modération", // "Divers" "Moderation" "Système"
  description: "Modifie la description du profil",
  usage: "userdesc <@membre> <description>"
};
