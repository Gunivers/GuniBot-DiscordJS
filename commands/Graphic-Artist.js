const role = require("./role.json")

exports.run = (bot, message, args, member) => {
    if(message.member.roles.has(role.artist)) {
      message.member.removeRole(role.artist).catch(console.error);
      const embed = {
        "color": 0xFF6400,
        "fields": [
            {
                "name": "Information",
                "value": "Tu n'est plus un Graphic-Artist"
            }
        ]
    };
    message.channel.send({ embed });
    } else {
    message.member.addRole(role.artist).catch(console.error);
    const embed = {
      "color": 0xFF6400,
      "fields": [
          {
              "name": "Information",
              "value": "Tu est desormais un Graphic-Artist"
          }
      ]
  };
  message.channel.send({ embed });
  }
}