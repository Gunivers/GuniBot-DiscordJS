exports.run = async (client, message, args, level) => {// eslint-disable-line no-unused-vars
  if (!args || args.length < 1) return message.reply("Vous devez fournir une commande à recharger. Derp.");

  let response = await client.unloadCommand(args[0]);
  if (response) return message.reply(`Erreur lors du déchargement : ${response}`);

  response = client.loadCommand(args[0]);
  if (response) return message.reply(`Erreur lors du chargement : ${response}`);

  message.reply(`La commande \`${args[0]}\` a été rechargée.`);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  log: false,
  aliases: [],
  permLevel: "Bot Admin"
};

exports.help = {
  name: "reload",
  category: "Système",
  description: "Recharge une commande qui a été modifiée.",
  usage: "reload [commande]"
};
