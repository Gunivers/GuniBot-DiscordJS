const role = require('./role.json')

exports.run = (bot, message, args, member) => {
    let text = args.join(" ");

    if (message.member.roles.has("346665754482966533")){
    bot.user.setPresence({ game: { name: text}})
    message.delete()
    } else if(message.author.id == "136176639175426048") {
        bot.user.setPresence({ game: { name: text}})
        message.delete()
      }else {
        return message.reply("Tu n'a pas la perm petit filou")
        message.delete()
      }
    message.delete()
}


