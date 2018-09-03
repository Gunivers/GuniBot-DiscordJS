exports.run = async (client, message, args, level) => {

  const key = `${message.guild.id}-reaction`;
  if (!client.reaction.has(key)) {
    client.reaction.set(key, {});
  }
  
  let split = /\s*;\s*/;
  args = args.join(' ').split(split);

  if (!args[0]) return message.channel.send(`Indiquez une reaction. Usage : \`${message.settings.prefix}reactiondel [nom]\``);
  var meme = client.reaction.getProp(key, args[0].toLowerCase());
  if(!meme) return message.channel.send(`La reaction ${args[0]} n'existe pas.`);
  await client.reaction.deleteProp(key, args[0]);
  return message.channel.send(`La reaction \`${args[0]}\` a été supprimé.`);
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  log: false,
  aliases: [],
  permLevel: "Mod" // "User" "Mod" "Admin" "Server Owner" "Bot Support" "Bot Admin" "Bot Owner"
}

exports.help = {
  name: "reactiondel",
  category: "Divers", // "Divers" "Moderation" "Système"
  description: "Supprime une reaction",
  usage: "reactiondel [nom]"
}
