exports.run = async (client, message, args, level) => {

  var member = (!args[0]) ? message.member : message.mentions.members.first() || client.autocomplete(message, args.join(' '));
  if (member == message.member) {
    var candidates = [];

    await message.guild.members.forEach(member => {
      candidates.push(member)
    });
    member = candidates[Math.floor(Math.random() * candidates.length)];
  }
  var lovefor = member.displayName;

  var loveMeter = Math.floor((Math.random() * 10) + 1);
  var redCircle = '💖';
  var whiteCircle = '🖤';

  var returnTable = [
    '1-10% Vous n\'êtes pas de très bons amis :(',
    '11-20% Vous êtes juste des amis mais il faut toujours avoir de l\'espoir :)',
    '21-30% Un jour vous serez les meilleurs amis de tous les temps !',
    '31-40% Vous approchez petit à petit de votre but ultime: \'Être en couple\' !',
    '41-50% Ahhh ! :heart: :smirk:',
    '51-60% Ouloulou c\'est beau l\'amour ! :heart_eyes: ',
    '61-70% Wow, j\'ai jamais vu un petit couple aussi beau !',
    '71-80% C\'est pas le GRAND amour mais vous êtes à un pas prêt !',
    '81-99% :heart_eyes: :heart: LE GRAND AMOUR :heart_eyes: :heart:',
  ]

  var hearts = '';
  for (let i = 1; i < 9; i++) {
    if (i <= loveMeter) {
      hearts += redCircle;
    } else {
      hearts += whiteCircle;
    }
  }
  if(loveMeter > 8) {
    hearts += redCircle + redCircle;
  } else {
    hearts += whiteCircle + whiteCircle;
  }

  loveMeter--;
  if (loveMeter > 8) loveMeter = 8;

  var desc = `${hearts}\n\n${returnTable[loveMeter]}`;

  return message.channel.send({
    embed: {
      color: 0xFF69B4,
      title: `${message.member.displayName} fait le test d'amour avec ${lovefor}`,
      description: desc
    }
  });
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  log: false,
  aliases: [],
  permLevel: "User" // "User" "Mod" "Admin" "Server Owner" "Bot Support" "Bot Admin" "Bot Owner"
}

exports.help = {
  name: "love",
  category: "Divers", // "Divers" "Moderation" "Système"
  description: "Teste ta compatibilité avec un autre membre <3",
  usage: "love <membre>"
}