const schedule = require('node-schedule');
exports.run = async (bot, message, args, member) => {
    const kickMember = message.mentions.members.first();
    if (message.mentions.users.size === 0) return message.channel.send("tu kick qui la ?")
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("ta pas la perm petit filou")
    if (kickMember.hasPermission("BAN_MEMBERS")) return message.channel.send("tu peut pas le ban petit filou")
    

	  var [mention, timer, ...reason] = args;
	  reason = reason.join(' ');
	  var date = Date.now() + timer*60*1000;
	    await kickMember.createDM().then(channel => {
        channel.send(`Tu a été tempban. \n les raison de ton tempban: ${reason}\nDurée du tempban ${timer} minutes`)
      })
      message.channel.send(`🔨 **Ban Hammer Has Spoken** 🔨`)
      var channel = bot.channels.get('399499437552173056')
      channel.send(`${kickMember.user.username} a été tempban par ` + message.author.username + " pour la raison :" + reason + `\nDurée du tempban ${timer} minutes`);
      message.delete()
      message.guild.ban(kickMember, reason)
  
  schedule.scheduleJob(date, function() {
	message.guild.unban(kickMember)  
	channel.send(`${kickMember.user.username} a été unban, le temps du tempban est ecoulé`)
  });
}