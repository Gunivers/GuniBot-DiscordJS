exports.run = async (client, message, args, level) => {
	  var member = (!args[0]) ? message.member : message.mentions.members.first() || client.autocomplete(message, args.join(' '));
	    if (member == message.member) return message.channel.send("Vous ne pouvez pas voter pour vous ban!")
			
		
 const key = `${message.guild.id}-voteban`;
  if (!client.voteban.has(key)) {
    client.voteban.set(key, {});
  }
  
    var voteban = client.voteban.getProp(key, `${member.id}`);
	if(!voteban) voteban = 0
	var HasVote = client.voteban.getProp(key, `${message.author.id}-${member.id}`);
//client.voteban.setProp(key, `${message.author.id}-${member.id}`, loveMeter);
	if(!HasVote) HasVote = "false"
	
	if(HasVote == "false") {
		voteban = voteban + 1
		client.voteban.setProp(key, `${message.author.id}-${member.id}`, "true");
		client.voteban.setProp(key, `${member.id}`, voteban);
		return message.channel.send(`Vous avez voter pour ban ${member.displayName}, ${voteban} personne(s) souhaite desormais le voir ban!`)
	} else if(HasVote == "true"){
		voteban = voteban - 1
		client.voteban.setProp(key, `${message.author.id}-${member.id}`, "false");
		client.voteban.setProp(key, `${member.id}`, voteban);
		return message.channel.send(`Vous avez enlever votre vote pour ban ${member.displayName}, ${voteban} personne(s) souhaite desormais le voir ban!`)
	}
	}

exports.conf = {
  enabled: true,
  guildOnly: true,
  log: false,
  aliases: [],
  permLevel: "User" // "User" "Mod" "Admin" "Server Owner" "Bot Support" "Bot Admin" "Bot Owner"
}

exports.help = {
  name: "voteban",
  category: "Divers", // "Divers" "Moderation" "SystÃ¨me"
  description: "Vote pour ban un membre",
  usage: "voteban <membre>"
}