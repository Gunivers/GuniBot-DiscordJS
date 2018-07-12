exports.run = async (client, message, args, level) => {
return message.channel.send(`\`\`\`
  _
  \\\`*-.
   )  _\`-.
  .  : \`. .
  : _   '  \\
  ; *\` _.   \`*-._
  \`-.-'          \`-.
    ;       \`       \`.
    :.       .        \\
    . \\  .   :   .-'   .
    '  \`+.;  ;  '      :
    :  '  |    ;       ;-.
    ; '   : :\`-:     _.\`* ;
 .*' /  .*' ; .*\`- +'  \`*'
 \`*-*   \`*-*  \`*-*'
\`\`\``);
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  log: false,
  aliases: [],
  permLevel: "Bot Owner" // "User" "Mod" "Admin" "Server Owner" "Bot Support" "Bot Admin" "Bot Owner"
}

exports.help = {
  name: "neko2",
  category: "Divers", // "Divers" "Moderation" "Système"
  description: "Neko Neko",
  usage: "neko2"
}
