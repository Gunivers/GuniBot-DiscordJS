exports.run = async (client, message, args, level) => {
  var member = (!args[0]) ? message.member : message.mentions.members.first() || client.autocomplete(message, args.join(' '));
  if(member == message.member) return message.channel.send(`┌ಠ_ಠ)┌∩┐`);
  return message.channel.send(`${member}, ┌ಠ_ಠ)┌∩┐`);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  log: false,
  aliases: [],
  permLevel: "Mod"
};

exports.help = {
  name: "fuck",
  category: "Divers",
  description: "fait un fuck",
  usage: "fuck <membre>"
};
