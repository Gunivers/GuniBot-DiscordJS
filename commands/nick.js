exports.run = (bot, message, args, member) => {

    if (message.mentions.users.size === 0) {
        return message.reply("Tu nick qui la ? ptdr");
        message.delete()
      } 

      if (message.member.hasPermission("MANAGE_NICKNAMES")) {
  let membernick = message.mentions.members.first();
  if (membernick.hasPermission("MANAGE_NICKNAMES")){
    return message.reply("Tu peut pas le nick, petit filou")
    message.delete()
  } else {
  let nick = args.slice(1).join(" ");
  membernick.setNickname(nick)
    }
 } else {
        return message.reply("Tu n'a pas la perm petit filou")
        message.delete()
    }
    message.delete()
}