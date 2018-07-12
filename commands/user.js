const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
moment.locale('fr');
const status = {
  online: "En ligne",
  idle: "Absent",
  dnd: "Ne pas déranger",
  offline: "Hors ligne/Invisible",
  invisible: "Hors ligne/Invisible"
};

exports.run = (client, message, args, level) => {
  var member = (!args[0]) ? message.member : message.mentions.members.first() || client.autocomplete(message, args.join(' '));
  let bot;
  if (member.user.bot === true) {
    bot = "Oui";
  } else {
    bot = "Non";
  }
  const key = `${message.guild.id}-${member.id}`;
  if (!client.usersDB.has(key)) {
    client.addUserToDB(key);
  }
  var userDesc = client.usersDB.getProp(key, 'userDesc');
  if (!userDesc) {
	  if(member.roles.has("356220216084004897")) userDesc = "Basically, they're a noob."
	  if(member.roles.has("448124982900555776")) userDesc = "They mostly spoke in the global channel. This specie is the nearest from flooders."
	  if(member.roles.has("448125392511827978")) userDesc = "They were once active, but have now fallen into the speechless death."
	  if(member.roles.has("335448407072309249")) userDesc = "What is that ?"
	  if(member.roles.has("448129838700560397")) userDesc = "This one had the guts to speak and participate in projects, reaching the upper levels. "
	  if(member.roles.has("448124702666391563")) userDesc = "They are at the peaks of basic peoples, and stand out of the crowd. They may soon become a project captain."
  }

  const embed = new Discord.RichEmbed()
    .setColor(member.displayHexColor)
    .addField("Pseudo :", `${member.nickname !== null ? `${member.nickname}` : "Pas de pseudo"}`, true)
    .addField("Bot ?", `${bot}`, true)
    .addField("Statut :", `${status[member.user.presence.status]}`, true)
    .addField("Joue à :", `${member.user.presence.game ? `${member.user.presence.game.name}` : "rien."}`, true)
    .addField("Compte créé le :", `${moment(member.user.createdAt).format("dddd Do MMMM YYYY à HH:mm:ss")}`, true)
    .addField("Ancienneté :", `${stotime((Date.now()-member.user.createdAt)/1000)}`, true)
    .addField("Guilde rejointe le :", `${moment(member.joinedAt).format("dddd Do MMMM YYYY à HH:mm:ss")}`, true)
    .addField("Ancienneté :", `${stotime((Date.now()-member.joinedAt)/1000)}`, true)
    .addField("Roles", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "Pas de rôles"}`)
    .setFooter(userDesc);

  if (!member.user.avatarURL) {
	embed.setThumbnail("https://pbs.twimg.com/profile_images/1016814904383139840/2CdaitAm_400x400.jpg")
    embed.setAuthor(`${member.user.tag} (${member.id})`, "https://pbs.twimg.com/profile_images/1016814904383139840/2CdaitAm_400x400.jpg");
  } else {
    embed.setThumbnail(`${member.user.avatarURL}`);
    embed.setAuthor(`${member.user.tag} (${member.id})`, `${member.user.avatarURL}`);
  }

  return message.channel.send({
    embed
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  log: false,
  aliases: ["uinfo"],
  permLevel: "User"
};

exports.help = {
  name: "user",
  category: "Divers",
  description: "Affiche les informations d'un membre",
  usage: "user <membre>"
};

function stotime(seconds) {
  var days = Math.floor(seconds / (24 * 60 * 60));
  seconds -= days * (24 * 60 * 60);
  var hours = Math.floor(seconds / (60 * 60));
  seconds -= hours * (60 * 60);
  var minutes = Math.floor(seconds / 60) + 1;
  return ((0 < days) ? (days + " jours ") : "") + ((0 < hours) ? (hours + " heures ") : "") + minutes + " minutes";
}
