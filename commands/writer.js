const role = require("./role.json")

exports.run = (bot, message, args, member) => {
    if(message.member.roles.has(role.writer)) {
      message.member.removeRole(role.writer).catch(console.error);
      const embed = {
        "color": 0xFF6400,
        "fields": [
            {
                "name": "Information",
                "value": "Tu n'est plus un writer"
            }
        ]
    };
    message.channel.send({ embed });
    } else {
    message.member.addRole(role.writer).catch(console.error);
    const embed = {
      "color": 0xFF6400,
      "fields": [
          {
              "name": "Information",
              "value": "Tu est desormais un writer"
          }
      ]
  };
  message.channel.send({ embed });
  }
}