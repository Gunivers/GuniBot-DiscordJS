const Discord = require("discord.js");
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  // var role = message.guild.roles.find('name', 'agent du kgb');
  // var nbEmojis = 0;
  // client.emojis.forEach(emoji => { emoji.removeRestrictedRole(role); nbEmojis++; });
  // return message.channel.send(`${nbEmojis} emojis non restreintes`);
  
 //   message.channel.fetchMessages({
 //   limit: 6
 // }).then(messages => message.channel.bulkDelete(messages));
  
   //const key = `${message.guild.id}-rolereact`;
  //if (!client.rolereact.has(key)) {
  //  client.rolereact.set(key, {});
  //}
   
  //var msg1 = client.rolereact.getProp(key, "rolereact1");
  //var msg2 = client.rolereact.getProp(key, "rolereact2");
  //var msg3 = client.rolereact.getProp(key, "rolereact3");
  //var msg4 = client.rolereact.getProp(key, "rolereact4");
  //var msg5 = client.rolereact.getProp(key, "rolereact5");
  //var msg6 = client.rolereact.getProp(key, "rolereact6");
  
  
  //message langue
  message.channel.fetchMessages({around: "480352579683876874", limit: 1})
  .then(messages => {
    const msgInter = messages.first();
	    let embed1 = new Discord.RichEmbed({
        title: '════╣ L A N G U A G E S ╠════',
        description: ':flag_fr: Français\n:flag_gb: English',
    });
    msgInter.edit(embed1);
  });
  
  //message skills
    message.channel.fetchMessages({around: "480352580162158594", limit: 1})
  .then(messages => {
    const msgInter1 = messages.first();
    let embed2 = new Discord.RichEmbed({
        title: '════╣ S K I L L S ╠════',
        description: ':hammer: Builder \n:couch: Decorator\n:black_nib: Writer \n:computer: Dev\n:dagger:Tester \n:projector: YouTuber \n:loudspeaker: Com-Manager \n:paintbrush: Graphic-Artist \n:moyai: Modeler \n:gear: Dev-CMD \n:mountain_snow: Terraformer \n:scroll: Scenarist \n:musical_note: Musician\n:microphone2:️ Voice Actor\n🌍 Translater',
    });
	
    msgInter1.edit(embed2)
	msgInter1.react("🌍")
  });
   
  //message project
    message.channel.fetchMessages({around: "480352581068259328", limit: 1})
  .then(messages => {
    const msgInter2 = messages.first();
		let embed3 = new Discord.RichEmbed({
        title: '════╣ P R O J E C T S ╠════',
        description: ':one: Gunibot \n:two:️ Gunivers-Lib \n:three:️ Tria \n:four:️ GDK \n:five:️ ISE \n:six: Murder \n:seven: Hierarchy',
    });
    msgInter2.edit(embed3);
  //msgInter2.react("\u0031\u20E3");

  });
  
  //message event
    message.channel.fetchMessages({around: "480352581537759253", limit: 1})
  .then(messages => {
    const msgInter3 = messages.first();
	let embed4 = new Discord.RichEmbed({
        title: '════╣ E V E N T S ╠════',
        description: ':one: HtS\n:two: Guni-Memories\n:three: Survival',
    });
    msgInter3.edit(embed4);
  });
  
  //message game
    message.channel.fetchMessages({around: "480352582330744833", limit: 1})
  .then(messages => {
    const msgInter4 = messages.first();
		let embed5 = new Discord.RichEmbed({
        title: '════╣ G A M E S ╠════',
        description: ':one: Star Citizen\n:two: Minecraft\n:three: Battlefield\n:four: Rocket League\n:five: Fortnite\n:six: PUBG\n:seven: League of Legend\n:eight: Overwatch\n:nine: Rainbow 6 | Siege\n:zero: Starbound',
    });
    msgInter4.edit(embed5);
  });
  
  //message Notification
    message.channel.fetchMessages({around: "480352606284414976", limit: 1})
  .then(messages => {
    const msgInter5 = messages.first();	
	let embed6 = new Discord.RichEmbed({
        title: '════╣ N O T I F I C A T I O N S ╠════',
        description: ':one: Surveys\n:two: Projects\n:three: Events\n:four: Global',
    });
    msgInter5.edit(embed6);
  });
   // send embed to channel
   //const msgInter = await message.channel.send(embed1);
   //const msgInter1 = await message.channel.send(embed2);
   //const msgInter2 = await message.channel.send(embed3);
   //const msgInter3 = await message.channel.send(embed4);
   //const msgInter4 = await message.channel.send(embed5);
   //const msgInter5 = await message.channel.send(embed6);
   
   //client.rolereact.setProp(key, "rolereact1", msgInter.id);
   //client.rolereact.setProp(key, "rolereact2", msgInter1.id);
   //client.rolereact.setProp(key, "rolereact3", msgInter2.id);
   //client.rolereact.setProp(key, "rolereact4", msgInter3.id);
   //client.rolereact.setProp(key, "rolereact5", msgInter4.id);
   //client.rolereact.setProp(key, "rolereact6", msgInter5.id);
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  log: false,
  aliases: [],
  permLevel: "Bot Owner"
};

exports.help = {
  name: "rolereact",
  category: "Système",
  description: "RoleReaction",
  usage: "test"
};
