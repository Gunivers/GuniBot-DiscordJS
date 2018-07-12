const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
moment.locale('fr');

exports.run = async (client, message, args, level) => {
  var member = (!args[0]) ? message.member : message.mentions.members.first() || client.autocomplete(message, args.join(' '));
  if (!member) member = message.member;
  const key = `${message.guild.id}-${member.id}`;
  if (!client.usersDB.has(key)) {
    client.addUserToDB(key);
  }
  var casier = client.usersDB.getProp(key, 'casier');
  var nbMutes = client.usersDB.getProp(key, 'nbMutes');
  if (!casier[0] && nbMutes === null)
    return message.channel.send(`${member.displayName} n'a pas encore de casier.`);
  if (!casier[0])
    return message.channel.send(`${member.displayName} a été muté ${nbMutes} fois.`);

  var embed = new Discord.RichEmbed()
    .setColor(0xFF0000);
  if (!member.user.avatarURL) {
    embed.setAuthor(`${member.user.tag} (${member.id})`);
  } else {
    embed.setThumbnail(`${member.user.avatarURL}`);
    embed.setAuthor(`${member.user.tag} (${member.id})`, `${member.user.avatarURL}`);
  }
  for (let i = 0; i < casier.length; i++) {
    embed.addField(`[${casier[i].motif.toUpperCase()}] le ${moment(casier[i].time).format("dddd Do MMMM YYYY à HH:mm:ss")}`, `${casier[i].reason}`);
  }
  if (nbMutes !== null) {
    embed.setFooter(`Nombre de mutes : ${nbMutes}`);
  }
  return message.channel.send({
    embed
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
  name: "casier",
  category: "Modération",
  description: "Affiche le casier d'un membre.",
  usage: "casier <membre>"
};
