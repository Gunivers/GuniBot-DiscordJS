exports.run = (bot, message, args, member) => {
    let text = args.join(" ");

    if (!message.member.roles.has(136196804571168769))
    return message.reply("You can't use this command.");

    if (message.member.roles.has(136196804571168769)){
    bot.user.setPresence({ game: { name: text}})
    }
    message.delete();
}
