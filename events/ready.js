const schedule = require('node-schedule');
module.exports = async client => {
  // Log that the bot is online.
  client.logger.ready(`[READY] ${client.user.tag}, ready to serve ${client.users.size} users in ${client.guilds.size} servers.`);
  // Make the bot "play the game" which is the help command with default prefix.
  client.user.setActivity(`protéger le discord`, {type: "PLAYING"});
  //client.user.setStatus('invisible');
  
    // on definie le channel
  var channel = client.channels.get('464519401702424577')
  
  //on supprime les derniers message
  await channel.fetchMessages({limit: 6});
  
  var lovereset = schedule.scheduleJob('0 18 * * 0', function() {
	  client.love.delete("125723125685026816-love")
	  channel = client.channels.get('378606556276719616')
	  channel.send("Love reset")
  })
  

};
// ════╣ L A N G U A G E S ╠════\n🇫🇷 Français\n🇬🇧 English

//\u0031\u20E3
//\u0032\u20E3
//\u0033\u20E3
//\u0034\u20E3
//\u0035\u20E3
//\u0036\u20E3
//\u0037\u20E3
//\u0038\u20E3

//channel.send(" (FR) Bienvenue sur GUNIVERS " + member.displayName + " !\n- Avant de commencer, merci de prendre connaissance du salon #information-fr:pushpin: \n- Tu peux t'ajouter/retirer des rôles via le salon #roles \n- Participe à des évènements, projets ou simplement aux discussions pour évoluer dans la communauté ! :wink: \n\n(EN) Welcome to GUNIVERS " + member.displayName + " !\n- Before you begin, please read the #information-en:pushpin: \n- You can add/remove your own roles via the #roles channel\n- Participate in events, projects or simply discussions to evolve in the community! :wink:");
  