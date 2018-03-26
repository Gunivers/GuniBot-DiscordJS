const role = require("./role.json")

exports.run = (bot, message, args, member) => {
    if(message.member.roles.has(role.devcmd)) {
      message.member.removeRole(role.devcmd).catch(console.error);
      const embed = {
        "color": 0xFF6400,
        "fields": [
            {
                "name": "Information",
                "value": "Tu n'est plus un DevCMD"
            }
        ]
    };
    message.channel.send({ embed });
    } else {
    message.member.addRole(role.devcmd).catch(console.error);
    const embed = {
      "color": 0xFF6400,
      "fields": [
          {
              "name": "Information",
              "value": "Tu est desormais un DevCMD"
          }
      ]
  };
  message.channel.send({ embed });
  }
}