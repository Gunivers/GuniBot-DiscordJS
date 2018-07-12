exports.run = async (client, message, args, member) => {

    var candidates = [];

    await message.guild.members.forEach(member => {
      candidates.push(member)
    });
    var randomUser = candidates[Math.floor(Math.random() * candidates.length)];


    message.channel.send(`L'heureux choisi du random est ${randomUser.user.tag}`)
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
