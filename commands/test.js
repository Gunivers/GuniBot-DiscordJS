const Discord = require("discord.js");
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  // var role = message.guild.roles.find('name', 'agent du kgb');
  // var nbEmojis = 0;
  // client.emojis.forEach(emoji => { emoji.removeRestrictedRole(role); nbEmojis++; });
  // return message.channel.send(`${nbEmojis} emojis non restreintes`);

    let embed1 = new Discord.RichEmbed({
        title: '════╣ L A N G U A G E S ╠════',
        description: ':flag_fr: Français\n:flag_gb: English',
    });

    let embed2 = new Discord.RichEmbed({
        title: '════╣ S K I L L S ╠════',
        description: ':hammer: Builder \n:couch: Decorator\n:black_nib: Writer \n:computer: Dev\n:dagger:Tester \n:projector: YouTuber \n:loudspeaker: Com-Manager \n:paintbrush: Graphic-Artist \n:moyai: Modeler \n:gear: Dev-CMD \n:mountain_snow: Terraformer \n:scroll: Scenarist \n:video_game: Player',
    });
	
	let embed3 = new Discord.RichEmbed({
        title: '════╣ P R O J E C T S ╠════',
        description: ':one: Gunibot \n:two:️ Gunivers-Lib \n:three:️ Tria \n:four:️ GDK \n:five:️ ISS',
    });
	
	let embed4 = new Discord.RichEmbed({
        title: '════╣ E V E N T S ╠════',
        description: ':one: HtS\n:two: Guni-Memories',
    });
	
	let embed5 = new Discord.RichEmbed({
        title: '════╣ G A M E S ╠════',
        description: ':one: Star Citizen\n:two: Minecraft\n:three: Battlefield\n:four: Rocket League\n:five: Fortnite\n:six: PUBG\n:seven: League of Legend\n:eight: Overwatch',
    });
	
	let embed6 = new Discord.RichEmbed({
        title: '════╣ N O T I F I C A T I O N S ╠════',
        description: ':one: Surveys\n:two: Projects\n:three: Events\n:four: Global',
    });
	
	

    // send embed to channel
	const msgInter = await message.channel.send(embed1);
	const msgInter1 = await message.channel.send(embed2);
	const msgInter2 = await message.channel.send(embed3);
	const msgInter3 = await message.channel.send(embed4);
   const msgInter4 = await message.channel.send(embed5);
   const msgInter5 = await message.channel.send(embed6);
   
  await msgInter.react("🇫🇷");
  await msgInter.react("🇬🇧");
  
   
  await msgInter1.react("🔨");
  await msgInter1.react("🛋");
  await msgInter1.react("✒");
  await msgInter1.react("💻");
  await msgInter1.react("🗡");
  await msgInter1.react("📽");
  await msgInter1.react("📢");
  await msgInter1.react("🖌");
  await msgInter1.react("🗿");
  await msgInter1.react("⚙");
  await msgInter1.react("🏔");
  await msgInter1.react("📜");
  await msgInter1.react("🎮");

  await msgInter2.react("\u0031\u20E3");
  await msgInter2.react("\u0032\u20E3");
  await msgInter2.react("\u0033\u20E3");
  await msgInter2.react("\u0034\u20E3");
  await msgInter2.react("\u0035\u20E3");
 
  await msgInter3.react("\u0031\u20E3");
  await msgInter3.react("\u0032\u20E3");

  await msgInter4.react("\u0031\u20E3");
  await msgInter4.react("\u0032\u20E3");
  await msgInter4.react("\u0033\u20E3");
  await msgInter4.react("\u0034\u20E3");
  await msgInter4.react("\u0035\u20E3");
  await msgInter4.react("\u0036\u20E3");
  await msgInter4.react("\u0037\u20E3");
  await msgInter4.react("\u0038\u20E3");
  
  await msgInter5.react("\u0031\u20E3");
  await msgInter5.react("\u0032\u20E3");
  await msgInter5.react("\u0033\u20E3");
  await msgInter5.react("\u0034\u20E3");
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  log: false,
  aliases: [],
  permLevel: "Bot Admin"
};

exports.help = {
  name: "test",
  category: "Système",
  description: "ba un test ¯\\_(ツ)_/¯",
  usage: "test"
};
