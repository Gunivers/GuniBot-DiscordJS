const Discord = require("discord.js");

exports.run = (client, message, args, level) => {

  const m = message.guild.members.get(client.user.id);
  const embed = new Discord.RichEmbed()
    .setColor(m.displayHexColor)
    .setDescription(`Faire un don :\n[Gunivers](http://patreon.com/gunivers)`)
    .setThumbnail(client.user.avatarURL);
    return message.channel.send({embed});
}


exports.conf = {
  enabled: true,
  guildOnly: true,
  log: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "don",
  category: "Divers",
  description: "Obtenir le patreon de gunivers",
  usage: "don"
};
