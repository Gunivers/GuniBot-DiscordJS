const status = {
    online: "Online",
    idle: "afk",
    dnd: "ne pas deranger",
    offline: "Offline/Invisible"
  };

  exports.run = (bot, message, args, Discord) => {
    const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
    const avatar = member.user.avatarURL
    let desc
    if(member.user.id === '136176639175426048' ) {
        desc = "Il parrait que c'est un dieu";
      } else if(member.user.id === '191267850974003201' ) {
          desc = "Heeeeeuuuuuuuuuuuuuuuuuuuuuuuu"
        } else if(member.user.id === '153254778682605569' ) {
            desc = "Notre petit mouton noir keur "
        } else if(member.user.id === '191241117902045190' ) {
            desc = "Oui?"
        } else if(member.user.id === '193819725007028224' ) {
            desc = "Grenouille bleue, ninja, et surtout FOLLE!"
      } else {
          desc = "un random"
      }
    var CreatedAt = new Date(member.user.createdTimestamp).toUTCString().split(' ')
    if(CreatedAt[0] === "Mon,"){
        var jour = CreatedAt[0].replace("Mon,","Lundi")
    }
    if(CreatedAt[0] === "Tue,"){
        var jour = CreatedAt[0].replace("Tue,","Mardi")
    }
    if(CreatedAt[0] === "Wed,"){
        var jour = CreatedAt[0].replace("Wed,","Mecredi")
    }
    if(CreatedAt[0] === "Thu,"){
        var jour = CreatedAt[0].replace("Thu,","Jeudi")
    }
    if(CreatedAt[0] === "Fri,"){
        var jour = CreatedAt[0].replace("Fri,","Vendredi")
    }
    if(CreatedAt[0] === "Sat,"){
        var jour = CreatedAt[0].replace("Sat,","Samedi")
    }
    if(CreatedAt[0] === "Sun,"){
        var jour = CreatedAt[0].replace("Sun,","Dimanche")
    }
    if(CreatedAt[2] === "Jan"){
        var mois = CreatedAt[2].replace("Jan","Janvier")
    }
    if(CreatedAt[2] === "Feb"){
        var mois = CreatedAt[2].replace("Feb","Fevrier")
    }
    if(CreatedAt[2] === "Mar"){
        var mois = CreatedAt[2].replace("Mar","Mars")
    }
    if(CreatedAt[2] === "Apr"){
        var mois = CreatedAt[2].replace("Apr","Avril")
    }
    if(CreatedAt[2] === "May"){
        var mois = CreatedAt[2].replace("May","mai")
    }
    if(CreatedAt[2] === "Jun"){
        var mois = CreatedAt[2].replace("Jun","Juin")
    }
    if(CreatedAt[2] === "Jul"){
        var mois = CreatedAt[2].replace("Jul","Juillet")
    }
    if(CreatedAt[2] === "Aug"){
        var mois = CreatedAt[2].replace("Aug","Août")
    }
    if(CreatedAt[2] === "Sep"){
        var mois = CreatedAt[2].replace("Sep","Septembre")
    }
    if(CreatedAt[2] === "Oct"){
        var mois = CreatedAt[2].replace("Oct","Octobre")
    }
    if(CreatedAt[2] === "Nov"){
        var mois = CreatedAt[2].replace("Nov","Novembre")
    }
    if(CreatedAt[2] === "Dec"){
        var mois = CreatedAt[2].replace("Dec","Decembre")
    }
    if (!member) return msg.reply("Please provide a vaild Mention or USER ID");
    const embed = {
        "color": 0xFF6400,
        "thumbnail": {
            "url": avatar
        },
        "author": {
            "name": member.user.tag,
            "icon_url": avatar
        },
        "footer": {
            "text": desc
          },
        "fields": [
            {
                "name": "Status",
                "value": status[member.user.presence.status]
            },
            {
                "name": "Nickname :",
                "value": member.nickname !== null ? `${member.nickname}` : "Pas de surnom"
            },
            {
                "name": "Joue à :",
                "value": `${member.user.presence.game ? `${member.user.presence.game.name}` : "rien."}`
            },
            {
                "name": "Compte créé le :",
                "value": jour + ' ' + CreatedAt[1] + ' ' + mois + ' ' + CreatedAt[3] + ' à ' + CreatedAt[4]
            },
            {
                "name": "Roles",
                "value": member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") 
            },
            {
                "name": "Id :",
                "value": member.user.id
            }
        ]
    };
    message.channel.send({ embed });
  };