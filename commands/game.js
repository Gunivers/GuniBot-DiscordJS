const role = require('./role.json')

exports.run = (bot, message, args, member) => {
    let text = args.join(" ");

    if (message.member.roles.has(role.Admin)){
    bot.user.setPresence({ game: { name: text}})
    const embed = {
        "color": 0xFF6400,
        "fields": [
            {
                "name": "Information",
                "value": "Jeux modifié avec succes : " + text
            }
        ]
    };
    message.channel.send({ embed });
    } else {
        const embed = {
            "color": 0xFF6400,
            "fields": [
                {
                    "name": "Information",
                    "value": "Tu n'a pas la perm d'utiliser cette commande "
                }
            ]
        };
        message.channel.send({ embed });

    }
}
