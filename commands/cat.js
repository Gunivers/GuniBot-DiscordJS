const snek = require('snekfetch');
const api = "http://aws.random.cat/meow";

exports.run = async (client, message, args, level) => {
  message.channel.startTyping();
  let failed = false;

  do
    try {
      let f = (await snek.get(api)).body.file;
      console.log(f);
      if (!f) return msg.edit("Meow~~ Le chat n'a pas été trouvé.");
      message.channel.stopTyping();
      return message.channel.send({
        files: [{
          attachment: f,
          name: f.split("/").pop()
        }]
      });

    } catch (e) {
      failed = true;
    }
  while (failed);
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  log: false,
  aliases: [],
  permLevel: "Bot Owner" // "User" "Mod" "Admin" "Server Owner" "Bot Support" "Bot Admin" "Bot Owner"
}

exports.help = {
  name: "cat",
  category: "Divers", // "Divers" "Moderation" "Système"
  description: "Affiche un chat. Meow ~~",
  usage: "cat"
}
