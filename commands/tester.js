const role = require("./role.json")

exports.run = (bot, message, args, member) => {
    if(message.member.roles.has(role.tester)) {
      message.member.removeRole(role.tester).catch(console.error);
      const embed = {
        "color": 0xFF6400,
        "fields": [
            {
                "name": "Information",
                "value": "Tu n'est plus un tester"
            }
        ]
    };
    message.channel.send({ embed });
    } else {
    message.member.addRole(role.tester).catch(console.error);
    const embed = {
      "color": 0xFF6400,
      "fields": [
          {
              "name": "Information",
              "value": "Tu est desormais un tester"
          }
      ]
  };
  message.channel.send({ embed });
  }
}