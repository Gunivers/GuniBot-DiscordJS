const role = require('./role.json')

exports.run = (bot, message, args) =>  {

  if(message.member.roles.has(role.admin)) {
    let messagecount = parseInt(args);

    if(!messagecount || messagecount < 2 || messagecount > 100){
    const embed = {
      "color": 0xFF6400,
      "fields": [
          {
              "name": "Information",
              "value": "Donner un nombre entre 2 et 100"
          }
      ]
  };
  message.channel.send({ embed });
    }
    if(messagecount || messagecount < 2 || messagecount > 100){
    message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    }
} else if(message.member.roles.has(role.modo)) {
  let messagecount = parseInt(args);

  if(!messagecount || messagecount < 2 || messagecount > 100){
    const embed = {
      "color": 0xFF6400,
      "fields": [
          {
              "name": "Information",
              "value": "Donner un nombre en 2 et 100"
          }
      ]
  };
  message.channel.send({ embed });
  }
  if(messagecount || messagecount < 2 || messagecount > 100){
  message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
} 
} else {
  const embed = {
    "color": 0xFF6400,
    "fields": [
        {
            "name": "Information",
            "value": "Tu n'a pas la perm d'utiliser cette commande"
        }
    ]
};
message.channel.send({ embed });
}
};
