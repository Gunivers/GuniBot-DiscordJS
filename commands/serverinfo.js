const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
moment.locale('fr');

exports.run = (client, message, args, level) => {

  let roles = [];
  message.guild.roles.forEach(role => {
    roles[role.calculatedPosition] = role;
  });
  let highestRole = roles[roles.length - 1];

  var online = offline = idle = dnd = 0;
  message.guild.members.forEach(member => {
    if (member.presence.status == 'online') online++;
    if (member.presence.status == 'offline') offline++;
    if (member.presence.status == 'idle') idle++;
    if (member.presence.status == 'dnd') dnd++;
  });
  var textuel = vocal = category = 0
  message.guild.channels.forEach(channel => {
    if (channel.type == 'text') textuel++
      if (channel.type == 'voice') vocal++
        if (channel.type == 'category') category++
  })

  var footer = `Membres en ligne : ${online} - Membres hors ligne : ${offline} - Membres Absents : ${idle} - Membres en mode ne pas déranger : ${dnd}`;
  const embed = new Discord.RichEmbed()
    .setColor(message.member.displayHexColor)
    .setAuthor(`${message.guild.name} (${message.guild.id})`, `https://cdn.discordapp.com/icons/${message.guild.id}/${message.guild.icon}.png`)
		.addField("Serveur créé le :", `${moment(message.guild.createdAt).format("dddd Do MMMM YYYY à HH:mm:ss")}`)
		.addField('Indépendant depuis :', `${stotime((Date.now()-message.guild.createdAt)/1000)}`)
		.addField("Propriétaire du serveur :", `${message.guild.owner}`, true)
		.addField("Rôle le plus haut :", `${highestRole}`, true)
    .addField("Nombre de membres :", `${message.guild.members.size}`, true)
    .addField("Nombre de channels :", `${textuel} textuel | ${vocal} vocal`, true)
    .addField("Nombre de rôles :", `${message.guild.roles.size}`, true)
    .addField("Nombre d'emotes :", `${message.guild.emojis.size}`, true)
    .addField("Région du serveur :", `${message.guild.region}`)
    .setFooter(`${footer}`)
    .setThumbnail(`https://cdn.discordapp.com/icons/${message.guild.id}/${message.guild.icon}.png`);

  return message.channel.send({
    embed
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  log: false,
  aliases: ["sinfo"],
  permLevel: "User"
};

exports.help = {
  name: "serverinfo",
  category: "Divers",
  description: "Affiche les informations du serveur",
  usage: "serverinfo"
};

function stotime(seconds) {
  var days = Math.floor(seconds / (24 * 60 * 60));
  seconds -= days * (24 * 60 * 60);
  var hours = Math.floor(seconds / (60 * 60));
  seconds -= hours * (60 * 60);
  var minutes = Math.floor(seconds / 60) + 1;
  return ((0 < days) ? (days + " jours ") : "") + ((0 < hours) ? (hours + " heures ") : "") + minutes + " minutes";
}
