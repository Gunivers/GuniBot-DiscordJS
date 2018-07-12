exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  let text = args.join(" ");
  const fortunes = [
    "Oui.",
    "Non.",
    "Peut-être.",
    "Essaye encore.",
    "Probablement.",
    "Très largement non.",
    "Je suis sûr que oui.",
    "Je suis sûr que non.",
    "Bien sûr ... que oui.",
    "Bien sûr ... que non.",
    "Je suis sûr à 99%.",
    "42.",
    "La réponse D.",
    "Un peu pas très beaucoup pas non.",
    "Un peu pas très beaucoup pas oui."
  ];
  if (message.content.endsWith("?")) {
    message.channel.send({
      embed: {
        "color": 0xFF0000,
        author: {
          name: `${client.user.username}`,
          icon_url: `${client.user.avatarURL}`
        },
        "fields": [{
            "name": message.member.displayName + " a demandé ...",
            "value": text
          },
          {
            "name": "La boule a dit...",
            "value": fortunes[Math.floor(Math.random() * fortunes.length)]
          },
        ]
      },
    });
  } else {
    message.reply(`Pose moi une question ... Usage : \`${message.settings.prefix}8 [question]\``);
  };
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  log: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "8",
  category: "Divers",
  description: "Une question vous taraude l'esprit ? Posez la !",
  usage: "8 [question]"
};
