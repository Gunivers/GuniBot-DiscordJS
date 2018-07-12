exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  await message.reply("Redémarrage en cours !");
  client.commands.forEach(async cmd => {
    await client.unloadCommand(cmd.help.name);
  });
  await client.settings.close();
  await client.usersDB.close();
  await client.memes.close();
  process.exit(1);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  log: false,
  aliases: [],
  permLevel: "Bot Admin"
};

exports.help = {
  name: "reboot",
  category: "Système",
  description: "Reboot le bot",
  usage: "reboot"
};
