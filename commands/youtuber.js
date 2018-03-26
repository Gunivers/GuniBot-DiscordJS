const role = require("./role.json")

exports.run = (bot, message, args, member) => {
    if(message.member.roles.has(role.youtuber)) {
      message.member.removeRole(role.youtuber).catch(console.error);
      const embed = {
        "color": 0xFF6400,
        "fields": [
            {
                "name": "Information",
                "value": "Tu n'est plus un youtuber"
            }
        ]
    };
    message.channel.send({ embed });
    } else {
    message.member.addRole(role.youtuber).catch(console.error);
    const embed = {
      "color": 0xFF6400,
      "fields": [
          {
              "name": "Information",
              "value": "Tu est desormais un youtuber"
          }
      ]
  };
  message.channel.send({ embed });
  }
}