exports.run = async (client, message, args, level) => {

  const key = `${message.guild.id}-reaction`;
  if (!client.reaction.has(key)) {
    client.reaction.set(key, {});
  }
  
  let split = /\s*;\s*/;
  args = args.join(' ').split(split);

  if (!args[0]) return message.channel.send(`Indiquez un message de reaction. Usage : \`${message.settings.prefix}reactionadd [message a reagir] ; [reponse](possible : {user} {guild} {channel} {time} {date} {emojialea} {membrealea} {channelalea}) \``);
  if (!args[1]) return message.channel.send(`Indiquez la reponse. Usage : \`${message.settings.prefix}reactionadd [message a reagir] ; [reponse](possible : {user} {guild} {channel} {time} {date} {emojialea} {membrealea} {channelalea}) \``);
  client.reaction.setProp(key, args[0].toLowerCase(), args[1]);
  return message.channel.send(`La reaction \`${args[0]}\` a bien été ajouté.`);

}

exports.conf = {
  enabled: true,
  guildOnly: true,
  log: false,
  aliases: [],
  permLevel: "PTDR" // "User" "Mod" "Admin" "Server Owner" "Bot Support" "Bot Admin" "Bot Owner"
}

exports.help = {
  name: "reactionadd",
  category: "Divers", // "Divers" "Moderation" "Système"
  description: "Ajoute une reactionadd",
  usage: "reactionadd [message a reagir] ; [reponse](possible : {user} {guild} {channel} {time} {date} {emojialea} {membrealea} {channelalea}) "
}
