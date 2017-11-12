const Discord = require('discord.js')
const config = require("./config.json")

var bot = new Discord.Client()

bot.on('ready', function () {
    bot.user.setPresence({ game: { name: 'agresser KubbyDev'}})
  console.log("Je suis connecté !")
})

bot.login(config.token)

bot.on('message', message => {

  
  if (message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  const member = message.author
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();


  if (message.channel.type == 'dm') {
    return;
  }
  if (message.channel.type == 'text') {
    try {
      if (message.content.startsWith("") && message.guild.id != '264445053596991498' && message.guild.id != '110373943822540800') {
        console.log(`${message.member.guild}: ${message.author.username}: ${message.content}\n`)
    }
      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(bot, message, args, Discord, member);
    } catch (err) {
      console.error(err);
    }
  }

  
});

  bot.on('guildMemberAdd', member => {
    member.addRole('356220216084004897').catch(console.error);
    member.createDM().then(channel => {
      const embed = {
        "color": 0xFF6400,
        "thumbnail": {
          "url": "http://gunivers.net/wp-content/uploads/2016/11/Logo-Gunivers.png"
        },
        "fields": [
          {
            "name": "Information",
            "value": "(FR) **Bienvenue sur Gunivers," + " " + member.user.username +  "\n!**Pour commencer, entre la commande " + '"__/fr__"' + " afin de voir les salons français. Ensuite, merci de lire ce qui se trouve dans le salon #Information-fr.\n\n(EN) **Welcome to Gunivers, " + member.user.username  + " !\n**Plz, enter the command " + '"__/en__"' + " to see all english channels. Then, thanks to read the #Information-en channel.\n\n**H A V E   F U N   !**   :wink:"
          }
        ]
      };
      channel.send({ embed });
    }).catch(console.error)
  });