const role = require("./role.json")

exports.run = (bot, message, args, member) => {
    if(message.member.roles.has(role.commanager)) {
      message.member.removeRole(role.commanager).catch(console.error);
      const embed = {
        "color": 0xFF6400,
        "fields": [
            {
                "name": "Information",
                "value": "Tu n'est plus un com-manager"
            }
        ]
    };
    message.channel.send({ embed });
    } else {
    message.member.addRole(role.commanager).catch(console.error);
    const embed = {
      "color": 0xFF6400,
      "fields": [
          {
              "name": "Information",
              "value": "Tu est desormais un com-manager"
          }
      ]
  };
  message.channel.send({ embed });
  }
}