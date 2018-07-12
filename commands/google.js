
const encode = require('strict-uri-encode');

exports.run = (bot, message, args, member) => {
    message.channel.send("**<https://www.lmgtfy.com/?q=" + encode(args.join(' ')) + ">**");
}

exports.conf = {
  enabled: false,
  guildOnly: true,
  log: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "google",
  category: "Divers",
  description: "Demande à ton seul ami, Google!",
  usage: "google [question]"
};
