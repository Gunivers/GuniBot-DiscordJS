const Discord = require('discord.js');

module.exports = async (client, reaction, user) => {
	
	//on definie le message
  const message = reaction.message;
  
if (!client.rolereact.has("125723125685026816-rolereact")) {
 client.rolereact.set(key, {});
  }
  // si l'autheur du message n'est pas un bot on stop
  if(message.author.id !== "376723809790853140") return
  //on transforme user en guildmember
  var member = message.guild.members.get(user.id)
  if(member.id == "376723809790853140") return
      const key = `125723125685026816-rolereact`;
  //si le message est celui des language alors ...
 var id1 = client.rolereact.getProp(key, "rolereact1")
 var id2 = client.rolereact.getProp(key, "rolereact2")
 var id3 = client.rolereact.getProp(key, "rolereact3")
 var id4 = client.rolereact.getProp(key, "rolereact4")
 var id5 = client.rolereact.getProp(key, "rolereact5")
 var id6 = client.rolereact.getProp(key, "rolereact6")
 
  if (message.id == id1){
	  //on ajoute le role correspondant a la reaction
	if (reaction.emoji.name === '🇫🇷') member.removeRole("364149859407888387")
	if (reaction.emoji.name === '🇬🇧') member.removeRole("379350468280713216")
  }
  if (message.id == id2){
	  //on ajoute le role correspondant a la reaction
	if (reaction.emoji.name === '🔨') member.removeRole("335448839194673152")
	if (reaction.emoji.name === '🛋') member.removeRole("335449255839924227")
	if (reaction.emoji.name === '✒') member.removeRole("335455622139215872")
	if (reaction.emoji.name === '💻') member.removeRole("351413297221861399")
	if (reaction.emoji.name === '🗡') member.removeRole("374233656232902666")
	if (reaction.emoji.name === '📽') member.removeRole("379315272592523264")
	if (reaction.emoji.name === '📢') member.removeRole("379315826173673472")
	if (reaction.emoji.name === '🖌') member.removeRole("379315917797982209")
	if (reaction.emoji.name === '🗿') member.removeRole("379316039634124801")
	if (reaction.emoji.name === '⚙') member.removeRole("379316070609321984")
	if (reaction.emoji.name === '🏔') member.removeRole("379316189219782656")
	if (reaction.emoji.name === '📜') member.removeRole("387019880941223937")
	if (reaction.emoji.name === '🎵') member.removeRole("481049885345447955")
	if (reaction.emoji.name === '🎙') member.removeRole("481049963200118806")
	if (reaction.emoji.name === '🌍') member.removeRole("484697293203701760")	
  }

  if (message.id == id3){
	  //on ajoute le role correspondant a la reaction
	if (reaction.emoji.name === '\u0031\u20E3') member.removeRole("379345658601144321")
	if (reaction.emoji.name === '\u0032\u20E3') member.removeRole("379345748304592896")
	if (reaction.emoji.name === '\u0033\u20E3') member.removeRole("387218176242352129")
	if (reaction.emoji.name === '\u0034\u20E3') member.removeRole("427923193588613140")
	if (reaction.emoji.name === '\u0035\u20E3') member.removeRole("458672233968041985")
	if (reaction.emoji.name === '\u0036\u20E3') member.removeRole("377150058908614666")
	if (reaction.emoji.name === '\u0037\u20E3') member.removeRole("365571969942290433")
  }

  if (message.id == id4){
	  //on ajoute le role correspondant a la reaction
	if (reaction.emoji.name === '\u0031\u20E3') member.removeRole("435886889598451712")
	if (reaction.emoji.name === '\u0032\u20E3') member.removeRole("456824306844958722")
	if (reaction.emoji.name === '\u0033\u20E3') member.removeRole("476747214438400000")
  }
  if (message.id == id5){
	  //on ajoute le role correspondant a la reaction
	if (reaction.emoji.name === '\u0031\u20E3') member.removeRole("436208761703497740")
	if (reaction.emoji.name === '\u0032\u20E3') member.removeRole("438646771170934786")
	if (reaction.emoji.name === '\u0033\u20E3') member.removeRole("438647702029467649")
	if (reaction.emoji.name === '\u0034\u20E3') member.removeRole("438647860855177216")
	if (reaction.emoji.name === '\u0035\u20E3') member.removeRole("438648070503137281")
	if (reaction.emoji.name === '\u0036\u20E3') member.removeRole("438648161964130305")
	if (reaction.emoji.name === '\u0037\u20E3') member.removeRole("438648223511609356")
	if (reaction.emoji.name === '\u0038\u20E3') member.removeRole("438649199832334366")
	if (reaction.emoji.name === '\u0039\u20E3') member.removeRole("480350802838290444")
	if (reaction.emoji.name === '\u0030\u20E3') member.removeRole("480350525217570836")
  }
  if (message.id == id6){
	  //on ajoute le role correspondant a la reaction
	if (reaction.emoji.name === '\u0031\u20E3') member.removeRole("464770889339240458")
	if (reaction.emoji.name === '\u0032\u20E3') member.removeRole("464771094893690881")
	if (reaction.emoji.name === '\u0033\u20E3') member.removeRole("464771181044563968")
	if (reaction.emoji.name === '\u0034\u20E3') member.removeRole("466602389315649546")
  }
};