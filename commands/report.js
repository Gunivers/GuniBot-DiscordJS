exports.run = (bot, message, args, member) => {
    let text = args.join(" ");
    const reportMember = message.mentions.members.first();
    const embed = {
      "color": 0xFF6400,
      "fields": [
          {
              "name": "Information",
              "value": "La personne a bien été report"
          }
      ]
  };
  message.channel.send({ embed });;
    var channel = bot.channels.find("name", "staff");
    channel.send( message.author + ' a utilisé le report et a dit : ' + text);
  }