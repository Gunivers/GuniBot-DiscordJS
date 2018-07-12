const db = require('quick.db')

exports.run = async (bot, message, args, member) => {

  if (!args[0]) return message.channel.send("indique un role")


  if (args[0] == "add") {
    if (!args[1]) return message.channel.send("indique un nom de role")
    if (args[1] == "list" || args[1] == "add") return message.channel.send("nom réservé")
    if (!args[2]) return message.channel.send("indique l'id du role")
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("ta pas la perm d'ajouter des role")
    db.set(`role_${args[1]}`, args[2])
    message.delete()
    return message.channel.send('le role a bien été ajouter')
  } else if (args[0] == "list") {
    let listing = [];
    let items = await db.fetchAll();
		for(let i = 0; i< items.length; i++) {
			if(items[i].ID.startsWith('role_')) {
				listing.push(items[i].ID.replace('role_',''));
			}
		}

		listing.sort();
		return message.channel.send(`Liste des role : ${listing.toString().replace(/[,]/g, ' - ')}`);

  } else {
    let role = await db.fetch(`role_${args[0]}`)
    if (!role) return message.channel.send("Ce role n'existe pas!")
		
	member.addRole(role).catch(console.error);

    message.delete();

  }
}
