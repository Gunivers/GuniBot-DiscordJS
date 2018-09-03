const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
moment.locale('fr');

moment.updateLocale('fr', {
  durationLabelsStandard: {
    S: 'milliseconde',
    SS: 'millisecondes',
    s: 'seconde',
    ss: 'secondes',
    m: 'minute',
    mm: 'minutes',
    h: 'heure',
    hh: 'heures',
    d: 'jour',
    dd: 'jours',
    w: 'semaine',
    ww: 'semaines',
    M: 'mois',
    MM: 'mois',
    y: 'an',
    yy: 'ans'
  },
  durationLabelsShort: {
    S: 'msec',
    SS: 'msecs',
    s: 'sec',
    ss: 'secs',
    m: 'min',
    mm: 'mins',
    h: 'hr',
    hh: 'hrs',
    d: 'jr',
    dd: 'jrs',
    w: 'sem',
    ww: 'sems',
    M: 'mois',
    MM: 'mois',
    y: 'an',
    yy: 'ans'
  },
  durationTimeTemplates: {
    HMS: 'h:mm:ss',
    HM: 'h:mm',
    MS: 'm:ss'
  },
  durationLabelTypes: [{
      type: "standard",
      string: "__"
    },
    {
      type: "short",
      string: "_"
    }
  ],
  durationPluralKey: function(token, integerValue, decimalValue) {
    // Singular for a value of `1`, but not for `1.0`.
    if (integerValue === 1 && decimalValue === null) {
      return token;
    }

    return token + token;
  }
});
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
    if (!client.usersDB.has(key)) {
    client.usersDB.set(key, {
      user: member.id,
      guild: message.guild.id,
      points: 0,
      level: 1
    });
	}
  }
  var userDesc = client.usersDB.getProp(key, 'userDesc');
  if (!userDesc) {
	  userDesc = "Someone, a random"
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
    .addField("Ancienneté :", `${moment.duration(Date.now()-member.user.createdAt).format("Y __, M __, D __, hh:mm:ss")}`, true)
    .addField("Guilde rejointe le :", `${moment(member.joinedAt).format("dddd Do MMMM YYYY à HH:mm:ss")}`, true)
    .addField("Ancienneté :", `${moment.duration(Date.now()-member.joinedAt).format("Y __, M __, D __, hh:mm:ss")}`, true)
	.addField(`Roles [${member.roles.size - 1}]`, `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "Pas de rôles"}`)
    .setFooter(`${userDesc} | ${client.usersDB.getProp(key, "points")} points, Level ${client.usersDB.getProp(key, "level")}`);

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
