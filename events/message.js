// The MESSAGE event runs anytime a message is received
// Note that due to the binding of client to every event, every event
// goes `client, other, args` when this function is run.
const Discord = require("discord.js");
const schedule = require('node-schedule');
module.exports = async (client, message) => {
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if (message.author.bot) return;
  
 if(message.channel.id == "466352627488391168"){
	 if(message.content == "Ave Gunivers creaturi te salutant") MessageDetection(message, Discord)
	 if(message.content == "`Ave Gunivers creaturi te salutant`") MessageDetection(message, Discord)
	let messages = await message.channel.fetchMessages({limit: 2});
	messages = messages.array().filter(m=>m.author.id === "376723809790853140");
    messages.length = 1;
  
  messages.map(async m => await m.delete().catch(console.error));
	 message.channel.send(" (FR) __**Bienvenue sur GUNIVERS !**__\n- Avant de commencer, merci de prendre connaissance du salon <#379320865533198336> \n\n(EN) **__Welcome to GUNIVERS!__**\n- Before you begin, please read the <#379334985943089154>");
	
 }
 var allchannel = ['379307107733864448', '435518833533386753']
 for (var i = 0; i < allchannel.length; i++) {
 if(message.channel.parentID == allchannel[i]){
	 var test
	 var allrolename = ['Builder ðŸ”¨', 'test', 'Decorator ðŸ›‹', 'Writer âœ’', 'Dev ðŸ’»', 'Tester ðŸ—¡', 'YouTuber ðŸ“½', 'Com-Manager ðŸ“¢', 'Graphic-Artist ðŸ–Œ', 'Modeler ðŸ—¿', 'Dev-CMD âš™ï¸', 'Terraformer ðŸ”', 'Scenarist ðŸ“œ', 'Player ðŸŽ®']
	 for (var i = 0; i < allrolename.length; i++) {
		try {
		PermGive(message, allrolename[i]);
		
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
    return message.channel.send("Cette commande n'est pas disponible via messages privÃ©s. Veuillez exÃ©cuter cette commande dans une guilde.");

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
    message.delete();
  }

  // If the command exists, **AND** the user has permission, run it.
  client.logger.cmd(`[CMD] ${client.config.permLevels.find(l => l.level === level).name} ${message.author.username} (${message.author.id}) ran command ${cmd.help.name}`);
  if (cmd.conf.log) client.sendToLogChannel(message, `[CMD](${client.config.permLevels.find(l => l.level === level).name}) [${message.author.username}](${message.author.id}) a utilisÃ© la commande <${cmd.help.name}>`);
  cmd.run(client, message, args, level);
};
function PermGive(message, rolename)
{

	test = message.mentions.roles.find("name", rolename)
		var allrole = ['466681556422098975', '335448839194673152', '335449255839924227', '335455622139215872', '351413297221861399', '374233656232902666', '379315272592523264', '379315826173673472', '379315917797982209', '379316039634124801', '379316070609321984', '379316189219782656', '387019880941223937', '419467691317919745'];
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
					message.channel.overwritePermissions(role, {SEND_MESSAGES: false})
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
		 member.send(embed)
		message.delete() 
}

