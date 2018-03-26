const role = require("./role.json")

exports.run = (bot, message, args, member) => {
    if(message.member.roles.has(role.builder)) {
      message.member.removeRole(role.builder).catch(console.error);
      const embed = {
        "color": 0xFF6400,
        "fields": [
            {
                "name": "Information",
                "value": "Tu n'est plus un builder"
            }
        ]
    };
    message.channel.send({ embed });
    } else {
    message.member.addRole(role.builder).catch(console.error);
    const embed = {
      "color": 0xFF6400,
      "fields": [
          {
              "name": "Information",
              "value": "Tu est desormais un builder"
          }
      ]
  };
  message.channel.send({ embed });
  }
}