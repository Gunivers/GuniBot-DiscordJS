const role = require("./role.json")

exports.run = (bot, message, args, member) => {
    if(message.member.roles.has(role.dev)) {
      message.member.removeRole(role.dev).catch(console.error);
      const embed = {
        "color": 0xFF6400,
        "fields": [
            {
                "name": "Information",
                "value": "Tu n'est plus un Dev"
            }
        ]
    };
    message.channel.send({ embed });
    } else {
    message.member.addRole(role.dev).catch(console.error);
    const embed = {
      "color": 0xFF6400,
      "fields": [
          {
              "name": "Information",
              "value": "Tu est desormais un Dev"
          }
      ]
  };
  message.channel.send({ embed });
  }
}