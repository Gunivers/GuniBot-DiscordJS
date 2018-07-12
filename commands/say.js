const schedule = require('node-schedule');
exports.run = (client, message, args, member) => {
  let text = args.join(" ");
  if(text.length == 0) return message.channel.send('J\'ai rien à dire ...');
  
  
  var date = Date.now() + text.length * 25
  //if(text.length <= 20) date = Date.now() + 500;
  //if(text.length >= 21 && text.length <= 40 ) date = Date.now() + 1000;
  //if(text.length >= 41) date = Date.now() + 2000; 
  
 
  message.channel.startTyping();
  
  schedule.scheduleJob(date, function() {
	message.channel.send(text);
	message.channel.stopTyping(true);
  });
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  log: false,
  aliases: [],
  permLevel: "Mod" // "User" "Mod" "Admin" "Server Owner" "Bot Support" "Bot Admin" "Bot Owner"
}

exports.help = {
  name: "say",
  category: "Divers", // "Divers" "Moderation" "Système"
  description: "Fait dire quelque chose au bot",
  usage: "say [message]"
}