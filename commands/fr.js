const role = require("./role.json")

exports.run = (bot, message, args, member) => {
    if(message.member.roles.has(role.fr)) {
      message.member.removeRole(role.fr).catch(console.error);
      const embed = {
        "color": 0xFF6400,
        "fields": [
            {
                "name": "Information",
                "value": "Tu ne peut plus parler dans les channels français"
            }
        ]
    };
    message.channel.send({ embed });
    } else {
    message.member.addRole(role.fr).catch(console.error);
    const embed = {
      "color": 0xFF6400,
      "fields": [
          {
              "name": "Information",
              "value": "Tu peut parler dans les channels français"
          }
      ]
  };
  message.channel.send({ embed });
  }
}