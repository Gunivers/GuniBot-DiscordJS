const role = require("./role.json")

exports.run = (bot, message, args, member) => {
    if(message.member.roles.has(role.gunibot)) {
      message.member.removeRole(role.gunibot).catch(console.error);
      const embed = {
        "color": 0xFF6400,
        "fields": [
            {
                "name": "Information",
                "value": "Tu ne seras plus informer pour le projet GuniBot"
            }
        ]
    };
    message.channel.send({ embed });
    } else {
    message.member.addRole(role.gunibot).catch(console.error);
    const embed = {
      "color": 0xFF6400,
      "fields": [
          {
              "name": "Information",
              "value": "Tu seras informer pour le projet GuniBot"
          }
      ]
  };
  message.channel.send({ embed });
  }
}