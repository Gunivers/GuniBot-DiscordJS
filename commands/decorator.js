const role = require("./role.json")

exports.run = (bot, message, args, member) => {
    if(message.member.roles.has(role.decorator)) {
      message.member.removeRole(role.decorator).catch(console.error);
      const embed = {
        "color": 0xFF6400,
        "fields": [
            {
                "name": "Information",
                "value": "Tu n'est plus un Decorator"
            }
        ]
    };
    message.channel.send({ embed });
    } else {
    message.member.addRole(role.decorator).catch(console.error);
    const embed = {
      "color": 0xFF6400,
      "fields": [
          {
              "name": "Information",
              "value": "Tu est desormais un Decorator"
          }
      ]
  };
  message.channel.send({ embed });
  }
}