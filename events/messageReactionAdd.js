const Discord = require('discord.js');

module.exports = async (client, reaction, user) => {
	
	//on definie le message
  const message = reaction.message;
  // si l'autheur du message n'est pas un bot on stop
  if(message.author.id !== "376723809790853140") return
  //on transforme user en guildmember
  var member = message.guild.members.get(user.id)

  //si le message est celui des language alors ...
  if (message.id == "466610375429849094"){
	  //on ajoute le role correspondant a la reaction
	if (reaction.emoji.name === '🇫🇷') member.addRole("364149859407888387")
	if (reaction.emoji.name === '🇬🇧') member.addRole("379350468280713216")
  }
  if (message.id == "466610376495071242"){
	  //on ajoute le role correspondant a la reaction
	if (reaction.emoji.name === '🔨') member.addRole("335448839194673152")
	if (reaction.emoji.name === '🛋') member.addRole("335449255839924227")
	if (reaction.emoji.name === '✒') member.addRole("335455622139215872")
	if (reaction.emoji.name === '💻') member.addRole("351413297221861399")
	if (reaction.emoji.name === '🗡') member.addRole("374233656232902666")
	if (reaction.emoji.name === '📽') member.addRole("379315272592523264")
	if (reaction.emoji.name === '📢') member.addRole("379315826173673472")
	if (reaction.emoji.name === '🖌') member.addRole("379315917797982209")
	if (reaction.emoji.name === '🗿') member.addRole("379316039634124801")
	if (reaction.emoji.name === '⚙') member.addRole("379316070609321984")
	if (reaction.emoji.name === '🏔') member.addRole("379316189219782656")
	if (reaction.emoji.name === '📜') member.addRole("387019880941223937")
	if (reaction.emoji.name === '🎮') member.addRole("419467691317919745")
  }

if (message.id == "466610377300508692"){
	  //on ajoute le role correspondant a la reaction
	if (reaction.emoji.name === '\u0031\u20E3') member.addRole("379345658601144321")
	if (reaction.emoji.name === '\u0032\u20E3') member.addRole("379345748304592896")
	if (reaction.emoji.name === '\u0033\u20E3') member.addRole("387218176242352129")
	if (reaction.emoji.name === '\u0034\u20E3') member.addRole("427923193588613140")
	if (reaction.emoji.name === '\u0035\u20E3') member.addRole("458672233968041985")
  }

if (message.id == "466610378143432704"){
	  //on ajoute le role correspondant a la reaction
	if (reaction.emoji.name === '\u0031\u20E3') member.addRole("435886889598451712")
	if (reaction.emoji.name === '\u0032\u20E3') member.addRole("456824306844958722")
  }
if (message.id == "466610378818846730"){
	  //on ajoute le role correspondant a la reaction
	if (reaction.emoji.name === '\u0031\u20E3') member.addRole("436208761703497740")
	if (reaction.emoji.name === '\u0032\u20E3') member.addRole("438646771170934786")
	if (reaction.emoji.name === '\u0033\u20E3') member.addRole("438647702029467649")
	if (reaction.emoji.name === '\u0034\u20E3') member.addRole("438647860855177216")
	if (reaction.emoji.name === '\u0035\u20E3') member.addRole("438648070503137281")
	if (reaction.emoji.name === '\u0036\u20E3') member.addRole("438648161964130305")
	if (reaction.emoji.name === '\u0037\u20E3') member.addRole("438648223511609356")
	if (reaction.emoji.name === '\u0038\u20E3') member.addRole("438649199832334366")
  }
if (message.id == "466610402684567562"){
	  //on ajoute le role correspondant a la reaction
	if (reaction.emoji.name === '\u0031\u20E3') member.addRole("464770889339240458")
	if (reaction.emoji.name === '\u0032\u20E3') member.addRole("464771094893690881")
	if (reaction.emoji.name === '\u0033\u20E3') member.addRole("464771181044563968")
	if (reaction.emoji.name === '\u0034\u20E3') member.addRole("466602389315649546")
  }
};