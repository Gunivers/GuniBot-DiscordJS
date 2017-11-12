exports.run = (bot, message, [mention, ...reason]) => {
    
      if (message.mentions.users.size === 0) {
        return message.reply("Please mention a user to kick");
      }
  
      if(message.member.roles.has('379318678841458699')) {
      const kickMember = message.mentions.members.first();
      kickMember.ban();
      const embed = {
        "color": 0xFF6400,
        "fields": [
            {
                "name": "Information",
                "value": kickMember + " a bien été ban"
            }
        ]
    };
    message.channel.send({ embed });
      var channel = bot.channels.find("name", "staff");
      channel.send(kickMember + " a été ban par " + message.author )
      } else if(message.member.roles.has('379318942927421442')) {
        const kickMember = message.mentions.members.first();
        kickMember.ban();
        const embed = {
          "color": 0xFF6400,
          "fields": [
              {
                  "name": "Information",
                  "value": kickMember + " a bien été ban"
              }
          ]
      };
      message.channel.send({ embed });
        var channel = bot.channels.find("name", "staff");
        channel.send(kickMember + " a été ban par " + message.author )
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