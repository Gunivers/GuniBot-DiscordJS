const role = require('./role.json')

exports.run = (bot, message, [mention, ...reason]) => {
  
    if (message.mentions.users.size === 0) {
      return message.reply("Please mention a user to kick");
    }

    if(message.member.roles.has(role.admin)) {
    const kickMember = message.mentions.members.first();
    kickMember.kick();
    const embed = {
      "color": 0xFF6400,
      "fields": [
          {
              "name": "Information",
              "value": kickMember + " a bien été kick"
          }
      ]
  };
  message.channel.send({ embed });
    var channel = bot.channels.find("name", "staff");
    channel.send(kickMember + " a été kick par " + message.author )
    } else if(message.member.roles.has(role.modo)) {
      const kickMember = message.mentions.members.first();
      kickMember.kick();
      const embed = {
        "color": 0xFF6400,
        "fields": [
            {
                "name": "Information",
                "value": kickMember + " a bien été kick"
            }
        ]
    };
    message.channel.send({ embed });
      var channel = bot.channels.find("name", "staff");
      channel.send(kickMember + " a été kick par " + message.author )
    } else {
      const embed = {
        "color": 0xFF6400,
        "fields": [
            {
                "name": "Information",
                "value": "Tu n'a pas la perm d'utiliser cette commande"
            }
        ]
    };
    message.channel.send({ embed });
    }
  }