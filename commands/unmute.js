const role = require('./role.json')

exports.run = (bot, message) => {
  
       if (message.mentions.users.size === 0) {
        const embed = {
          "color": 0xFF6400,
          "fields": [
              {
                  "name": "Information",
                  "value": "Donner une joueur a unmute"
              }
          ]
      };
      message.channel.send({ embed });
      }
  
      if(message.member.roles.has(role.admin)) {
      const muteMember = message.mentions.members.first();
          const member = message.mentions.members.first();
          member.addRole(role.membre).catch(console.error);
          const embed = {
            "color": 0xFF6400,
            "fields": [
                {
                    "name": "Information",
                    "value": muteMember + " a bien été unmute"
                }
            ]
        };
        message.channel.send({ embed });
      var channel = bot.channels.find("name", "staff");
      channel.send(muteMember + " a été kick par " + message.author )
      } else if(message.member.roles.has(role.modo)) { 
        const muteMember = message.mentions.members.first();
        const member = message.mentions.members.first();
        member.addRole(role.membre).catch(console.error);
        const embed = {
          "color": 0xFF6400,
          "fields": [
              {
                  "name": "Information",
                  "value": muteMember + " a bien été unmute"
              }
          ]
      };
      message.channel.send({ embed });
    var channel = bot.channels.find("name", "staff");
    channel.send(muteMember + " a été kick par " + message.author )
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