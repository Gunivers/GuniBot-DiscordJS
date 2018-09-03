// The MESSAGE event runs anytime a message is received
// Note that due to the binding of client to every event, every event
// goes `client, other, args` when this function is run.
const Discord = require("discord.js");
const schedule = require('node-schedule');
const moment = require("moment");
module.exports = async (client, message) => {
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  
    if (message.author.bot) return;
    const key = `${message.guild.id}-reaction`;
	const key1 = `${message.guild.id}-antilien`;
	const key3 = `${message.guild.id}-userbypass`;
	  if (!client.antilien.has(key1)) {
    client.antilien.set(key1, {});
  }
  	  if (!client.antilien.has(key3)) {
    client.antilien.set(key3, {});
  }
	
  let antilien = Object.keys(client.antilien.get(key1));
  let rolebypass = Object.keys(client.antilien.get(key3));
  let findlien = false; 
	 for (let i = 0; i < antilien.length; i++){
		 
	    if (message.content.toLowerCase().includes(antilien[i]) && findlien == false) {
						if (message.member.roles.some(r => rolebypass.includes(r.id))) {
							
						} else {
			//message.channel.send("Mauvais lien detecté")
			message.delete()
			findlien = true;  	
						}
		}
	 }
  if (!client.reaction.has(key)) {
    client.reaction.set(key, {});
  }
  
    let reaction = client.reaction.getProp(key, message.content.toLowerCase());
	if(!reaction){
		
	}else { 
	let regex = /({user})/g;
	let regex2 = /({guild})/g;
	let regex3 = /({channel})/g;
	let regex4 = /({date})/g;
	let regex5 = /({time})/g;
	let regex6 = /({emojialea})/g;
	let regex7 = /({membrealea})/g;
	let regex8 = /({channelalea})/g;
	reaction = reaction.replace(regex, `${message.author}`)
	reaction = reaction.replace(regex2, `${message.guild}`)
	reaction = reaction.replace(regex3, `${message.channel}`)
	var now = new Date();
	now.setHours(now.getHours() + 6);
	reaction = reaction.replace(regex4, `${moment(now).format("dddd Do MMMM YYYY")}`)
	reaction = reaction.replace(regex5, `${moment(now).format("HH:mm")}`)
	let emojis = []
client.emojis.forEach(emoji => {
    emojis.push(emoji)
  });
  reaction = reaction.replace(regex6, `${emojis[Math.floor(Math.random() * emojis.length)]}`)
      let candidates = [];
    await message.guild.members.forEach(member => {
      candidates.push(member)
    }); 
	reaction = reaction.replace(regex7, `${candidates[Math.floor(Math.random() * candidates.length)].displayName}`)
	 let channel = [];
    message.guild.channels.forEach(member => {
		if(member.type == "text") channel.push(member)
    }); 
	reaction = reaction.replace(regex8, `${channel[Math.floor(Math.random() * channel.length)]}`)
	message.channel.send(reaction)
  }

  
  
 
 if(message.channel.id == "466352627488391168"){
	let messages = await message.channel.fetchMessages({limit: 50});
	messages = messages.array().filter(m=>m.author.id === "376723809790853140");
    messages.length = 1;
  
  messages.map(async m => await m.delete().catch(console.error));
  let ptdr = "Ave Gunivers creaturi te salutant"
  	 if(message.content.toLowerCase() == ptdr.toLowerCase() | message.content.toLowerCase() == `\`${ptdr.toLowerCase()}\``) MessageDetection(message, Discord)
	 message.channel.send(`(FR) __**Bienvenue sur GUNIVERS ${message.author} !**__\nVous n'avez accès qu'au salon Lobby pour le moment. Pour débloquer l'accès au reste du Discord, lisez les instructions présentes dans le salon Informations :wink:\n\n(EN) __**Welcome to GUNIVERS ${message.author} !**__\nYou only have access to the Lobby channel. To unlock the acess to the rest of our Discord, please follow the instructions in the Informations channel :wink:`);
 }
 var allchannel = ['379307107733864448', '435518833533386753']
 for (var i = 0; i < allchannel.length; i++) {
 if(message.channel.parentID == allchannel[i]){
	 var test
	 var allrolename = ['Builder 🔨', 'Decorator 🛋', 'Writer ✒', 'Dev 💻', 'Tester 🗡', 'YouTuber 📽', 'Com-Manager 📢', 'Graphic-Artist 🖌', 'Modeler 🗿', 'Dev-CMD ⚙️', 'Terraformer 🏔', 'Scenarist 📜', 'Player 🎮']
	 for (var i = 0; i < allrolename.length; i++) {
		try {
		//PermGive(message, allrolename[i]);
		
		} catch (err) {}	
	}
 }
 }

  // Grab the settings for this server from Enmap.
  // If there is no guild, get default conf (DMs)
  const settings = message.settings = client.getGuildSettings(message.guild);

  //delete all undesired messages in the starboardChannel
  if ((settings.starboardEnabled == "true") && (message.channel.id == message.guild.channels.find('name', settings.starboardChannel).id))
    return message.delete();
  // Also good practice to ignore any message that does not start with our prefix,
  // which is set in the configuration file.
    if (message.content.indexOf(settings.prefix) !== 0) {
	  const key2 = `${message.guild.id}-${message.author.id}`
	    if (!client.usersDB.has(key2)) {
    client.usersDB.set(key2, {
      user: message.author.id,
      guild: message.guild.id,
      points: 0,
      level: 1
    });
  }
    // c'est pas une commande, donc c'est ..... un message ! Bravo !
    // on vérifie qu'il est dans le bon channel pour compter les points

    // on connait le membre, on vérifie si il spam ou non
    const lastMessage = client.usersDB.getProp(key2, 'lastMessage');
	let messageDuration = 30000
   if (!lastMessage || ((Date.now() - lastMessage) > messageDuration)) {
      // c'est pas du spam \o/
      // on commence par mettre a jour le timer du dernier message
      client.usersDB.setProp(key2, 'lastMessage', Date.now());
      // on récupère le nbre de messages et on l'incrémente dans la db
      let currentPoints = client.usersDB.getProp(key2, 'points');
	  let addedpoint = Math.floor(message.content.length * 0.075) + 1
	  let newpoint = currentPoints + addedpoint
   client.usersDB.setProp(key2, 'points', newpoint);
      // on recalcule le level, et on l'update dans la db si besoin
      let curLevel = Math.floor(0.2 * Math.sqrt(newpoint)) + 1;
      if (client.usersDB.getProp(key2, 'level') < curLevel) {
        client.usersDB.setProp(key2, 'level', curLevel);
        message.channel.send(`Ben alors, tu n'es que niveau **${curLevel}** ? Faut monter plus vite ${message.member} !!! ! Allez, hop hop hop !`);
      }
    }
  
  }
  if (message.content.indexOf(settings.prefix) !== 0) return;

  //Can the member use the bot ?
  const BotExcludeRole = message.guild.roles.find(r => r.name.toLowerCase() === message.settings.BotExcludeRole.toLowerCase());
  if (BotExcludeRole && message.member.roles.has(BotExcludeRole.id)) return;

  // Here we separate our "command" name, and our "arguments" for the command.
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Get the user or member's permission level from the elevation
  const level = client.permlevel(message);

  // Check whether the command, or alias, exist in the collections defined
  // in app.js.
  const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));
  // using this const varName = thing OR otherthign; is a pretty efficient
  // and clean way to grab one of 2 values!
  if (!cmd) return;

  // Some commands may not be useable in DMs. This check prevents those commands from running
  // and return a friendly error message.
  if (cmd && !message.guild && cmd.conf.guildOnly)
    return message.channel.send("Cette commande n'est pas disponible via messages privés. Veuillez exécuter cette commande dans une guilde.");

  if (level < client.levelCache[cmd.conf.permLevel]) {
    if (settings.systemNotice === "true") {
      return message.channel.send(`Vous n'avez pas la permission d'utiliser cette commande.
  Votre niveau de permission est ${level} (${client.config.permLevels.find(l => l.level === level).name})
  Cette commande requiert le niveau ${client.levelCache[cmd.conf.permLevel]} (${cmd.conf.permLevel})`);
    } else {
      return;
    }
  }

  // To simplify message arguments, the author's level is now put on level (not member so it is supported in DMs)
  // The "level" command module argument will be deprecated in the future.
  message.author.permLevel = level;

  message.flags = [];
  while (args[0] && args[0][0] === "-") {
    message.flags.push(args.shift().slice(1));
  }

  if (settings.deleteCommands === "true" && cmd.help.name != 'purge') {
	  try {
    message.delete();
	  } catch (err) {}
  }

  // If the command exists, **AND** the user has permission, run it.
  try {
  client.logger.cmd(`[CMD] ${client.config.permLevels.find(l => l.level === level).name} ${message.author.username} (${message.author.id}) ran command ${cmd.help.name}`);
  if (cmd.conf.log) client.sendToLogChannel(message, `[CMD](${client.config.permLevels.find(l => l.level === level).name}) [${message.author.username}](${message.author.id}) a utilisé la commande <${cmd.help.name}>`);
  cmd.run(client, message, args, level);
  } catch (err) {console.log(err)}
};
function PermGive(message, rolename)
{

	test = message.mentions.roles.find("name", rolename)
		var allrole = ['466681556422098975', '335449255839924227', '335455622139215872', '351413297221861399', '374233656232902666', '379315272592523264', '379315826173673472', '379315917797982209', '379316039634124801', '379316070609321984', '379316189219782656', '387019880941223937', '419467691317919745'];
	   for (var i = 0; i < allrole.length; i++) {
		   //console.log('test2')
			if(test.id == allrole[i]){
			message.channel.overwritePermissions(allrole[i], {SEND_MESSAGES: true}) 
			var date = Date.now() + 600 * 1000
			var role 
			role = allrole[i]
							try {
				schedule.scheduleJob(date, function() {
					console.log("test")
					message.channel.overwritePermissions(role, {SEND_MESSAGES})
					message.channel.send("Veuiller vous attribuez le role du projet pour continuer a parler!")
				});
			
			} catch (err) {console.log(err)}
		   } 
		}
}

function MessageDetection(message, Discord)
{
	 var member = message.guild.members.get(message.author.id)
		 member.addRole("465881318354583553")
		 const embed = new Discord.RichEmbed()
			.setDescription("(FR) Merci d'avoir lu les informations. Profitez bien !\n\n(EN) Thank you for reading the informations. Enjoy the community !")
		//member.send(embed)
		 embed.setDescription(`${member} à lu les <#379320865533198336>\n\n${member} read the <#379334985943089154>`)
		 message.channel.send(embed)
		message.delete() 
}

