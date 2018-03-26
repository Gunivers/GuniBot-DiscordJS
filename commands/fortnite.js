
    const Fornite = require('fortnite')
    const stats = new Fornite('773fc2ed-54d9-4c97-befa-99f2cc3da8a8')
    const Discord = require('discord.js')

exports.run = (bot, message, args, member) => {
    let platform;
    let username;

    if (!['pc','xbl','psn'].includes(args[0])) return message.channel.send('Dit moi la platform, batard ! ".fortnite [pc I xbl I psn ] <username>" ')
    if (!args[1]) return message.channel.send('Dit moi l\'utilisateur, batard ! ".fortnite plateforme user" ')

    platform = args[0];
    username = args[1]



    stats.getInfo(username, platform).then( data => {
		
		var embed = new Discord.RichEmbed()
  .setTitle(`Stats pour ${data.username}`)
  .setColor('#FF0000')
  .setThumbnail('https://static-pepper.dealabs.com/threads/thread_large/default/1178780_1.jpg')
  .addField('Score total', data.lifetimeStats[6].value, true)
  .addField('Games jouées', data.lifetimeStats[7].value, true)
  .addField('Victoires', data.lifetimeStats[8].value, true)
  .addField('Pourcentage de win', data.lifetimeStats[9].value, true)
  .addField('Kills', data.lifetimeStats[10].value, true)
  .addField('K/D ratio', data.lifetimeStats[11].value, true)
  .addField('Temps de jeu', data.lifetimeStats[13].value, true)
  .addField('Temps moyen de survie', data.lifetimeStats[14].value, true);

message.channel.send({embed});

    })
    .catch(error => {
       message.channel.send('Deso, pas trouver ce joueur')
    });
message.delete()
}