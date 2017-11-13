const role = require("./role.json")

exports.run = (bot, message, args, member) => {
      if(message.member.roles.has(role.en)) {
        message.member.removeRole(role.en).catch(console.error);
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
      message.member.addRole(role.en).catch(console.error);
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