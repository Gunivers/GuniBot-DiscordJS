exports.run = async (client, message, args, level) => {
  const member = (!args[0]) ? message.member : message.mentions.members.first() || client.autocomplete(message, args.join(' '));
  if(!member.user.avatarURL) return message.channel.send('Aucun avatar à afficher.');
  var avatarLink = member.user.avatarURL;
  var hash = member.user.avatar;
  var id = member.user.id;
  var ext = '';
  if(/(jpg)/gi.test(avatarLink)) ext = "jpg";
  if(/(jpeg)/gi.test(avatarLink)) ext = "jpeg";
  if(/(png)/gi.test(avatarLink)) ext = "png";
  if(/(webp)/gi.test(avatarLink)) ext = "webp";
  if(/(gif)/gi.test(avatarLink)) ext = "gif";
  return message.channel.send({
    files: [`https://cdn.discordapp.com/avatars/${id}/${hash}.${ext}`]
  });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  log: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "avatar",
  category: "Divers",
  description: "Affiche l'avatar d'un membre.",
  usage: "avatar <membre>"
};
