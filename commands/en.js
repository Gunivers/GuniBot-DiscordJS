exports.run = (bot, message, args, member) => {
      if(message.member.roles.has('364149966966620160')) {
        message.member.removeRole('364149966966620160').catch(console.error);
        const embed = {
          "color": 0xFF6400,
          "fields": [
              {
                  "name": "Information",
                  "value": "Tu ne peut plus parler dans les channel anglais"
              }
          ]
      };
      message.channel.send({ embed });
      } else {
      message.member.addRole('364149966966620160').catch(console.error);
      const embed = {
        "color": 0xFF6400,
        "fields": [
            {
                "name": "Information",
                "value": "Tu peut parler dans les channel anglais"
            }
        ]
    };
    message.channel.send({ embed });
    }
  }