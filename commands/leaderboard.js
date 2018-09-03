const Discord = require("discord.js")
exports.run = async (client, message, args) => {
  const filtered = client.usersDB.filterArray(p => (p.guild === message.guild.id && (message.guild.members.get(p.user) != undefined)));
  const sorted = filtered.sort((a, b) => b.points - a.points);

  const top10 = sorted.splice(0, 10);
  const embed = new Discord.RichEmbed()
    .setTitle("Leaderboard")
    .setDescription("");
  let users = '';
  let points = '';
  for(data of top10) {
    users += `${message.guild.members.get(data.user).displayName}\n`;
    points += `${data.points} points (level ${data.level})\n`;
  }

  embed.addField('Membre', users, true);
  embed.addField('Points', points, true);

  return message.channel.send({embed});
}


exports.conf = {
  enabled: true,
  guildOnly: true,
  log: false,
  aliases: [],
  permLevel: "User" // "User" "Mod" "Admin" "Server Owner" "Bot Support" "Bot Admin" "Bot Owner"
}

exports.help = {
  name: "leaderboard",
  category: "Divers", // "Divers" "Moderation" "Système"
  description: "Permet de voir le top des level",
  usage: "leaderboard"
}