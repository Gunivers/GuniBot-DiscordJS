const role = require("./role.json")

exports.run = (bot, message, args, member) => {
    if(message.member.roles.has(role.terraformer)) {
      message.member.removeRole(role.terraformer).catch(console.error);
      const embed = {
        "color": 0xFF6400,
        "fields": [
            {
                "name": "Information",
                "value": "Tu n'est plus un terraformer"
            }
        ]
    };
    message.channel.send({ embed });
    } else {
    message.member.addRole(role.terraformer).catch(console.error);
    const embed = {
      "color": 0xFF6400,
      "fields": [
          {
              "name": "Information",
              "value": "Tu est desormais un terraformer"
          }
      ]
  };
  message.channel.send({ embed });
  }
}