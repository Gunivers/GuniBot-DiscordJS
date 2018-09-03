exports.run = async (client, message, args, member) => {

    var candidates = [];

    await message.guild.members.forEach(member => {
      candidates.push(member)
    });
	
	if(args[0] == "poke"){
		message.channel.send(`L'heureux élu du random est ${candidates[Math.floor(Math.random() * candidates.length)]}`)
	} else return message.channel.send(`L'heureux élu du random est ${candidates[Math.floor(Math.random() * candidates.length)].user.tag}`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  log: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "random",
  category: "Divers",
  description: "Choisit un membre aléatoirement et le mentionne.",
  usage: "random"
};
