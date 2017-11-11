exports.run = (bot, message, args, member) => {
    let text = args.join(" ");
    const adminRole = message.guild.roles.find("name", "Admin");

    if (!message.member.roles.has(adminRole.id))
    return message.reply("You can't use this command.");

    if (message.member.roles.has(adminRole.id)){
    bot.user.setPresence({ game: { name: text}})
    }
    message.delete();
}