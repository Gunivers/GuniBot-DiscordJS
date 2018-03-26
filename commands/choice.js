exports.run = (bot, message, args, member) => {

    var random = Math.floor((Math.random() * 100) + 1)

    if (random <= 0) {
        random = 0
    }

    if (random <= 50) {
        random = args[0]
    } else if (random >= 50) {
        random = args[1] 
    }
    message.channel.send({
        embed: {
            color: 0xFF0000,
            title: message.author.username + " m'a demandé de faire un choix entre " + args[0] + " et " + args[1],
           description: "j'ai choisi : " + random,
       }
   })
   message.delete()
}