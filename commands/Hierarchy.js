const role = require("./role.json")

exports.run = (bot, message, args, member) => {
    if(message.member.roles.has(role.hierarchy)) {
      message.member.removeRole(role.hierarchy).catch(console.error);
      const embed = {
        "color": 0xFF6400,
        "fields": [
            {
                "name": "Information",
                "value": "Tu ne seras plus informer pour le projet Hierarchy"
            }
        ]
    };
    message.channel.send({ embed });
    } else {
    message.member.addRole(role.hierarchy).catch(console.error);
    const embed = {
      "color": 0xFF6400,
      "fields": [
          {
              "name": "Information",
              "value": "Tu seras informer pour le projet Hierarchy"
          }
      ]
  };
  message.channel.send({ embed });
  }
}