exports.run = (bot, message, args, member) => {
  if(message.member.roles.has('379318678841458699')) {
    if(!args || args.size < 1){
      const embed = {
        "color": 0xFF6400,
        "fields": [
            {
                "name": "Information",
                "value": "Donner une commande a reload"
            }
        ]
    };
    message.channel.send({ embed });
  }
    delete require.cache[require.resolve(`./${args[0]}.js`)];
    const embed = {
      "color": 0xFF6400,
      "fields": [
          {
              "name": "Information",
              "value": "la commande a bien été reload"
          }
      ]
  };
  message.channel.send({ embed });
  } else if(message.member.roles.has('379318942927421442')) {
    if(!args || args.size < 1){
      const embed = {
        "color": 0xFF6400,
        "fields": [
            {
                "name": "Information",
                "value": "Donner une commande a reload"
            }
        ]
    };
    message.channel.send({ embed });
    }
    delete require.cache[require.resolve(`./${args[0]}.js`)];
    const embed = {
      "color": 0xFF6400,
      "fields": [
          {
              "name": "Information",
              "value": "La commande a bien été reload"
          }
      ]
  };
  message.channel.send({ embed });
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