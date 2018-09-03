// This event executes when a new member joins a server. Let's welcome them!

module.exports = (client, member) => {
  // Load the guild's settings
  const settings = client.getGuildSettings(member.guild);
  client.logger.debug(settings);

  // If welcome is off, don't proceed (don't welcome the user)
  if (settings.welcomeEnabled !== "true") return;

  // Replace the placeholders in the welcome message with actual data
  const welcomeMessage = settings.welcomeMessage.replace("{{user}}", member.displayName);
  if (settings.applyWelcomeRole == "true") {
    const memberRole = member.guild.roles.find('name', settings.welcomeRole);
    member.addRole(memberRole);
  }

  // Send the welcome message to the welcome channel
  // There's a place for more configs here.
    member.createDM().then(channel => {
    return channel.send(`(FR) __**Bienvenue sur GUNIVERS ${member} !**__\nVous n'avez accès qu'au salon Lobby pour le moment. Pour débloquer l'accès au reste du Discord, lisez les instructions présentes dans le salon Informations :wink:\n\n(EN) __**Welcome to GUNIVERS ${member} !**__\nYou only have access to the Lobby channel. To unlock the acess to the rest of our Discord, please follow the instructions in the Informations channel :wink:`);
  }).catch(console.error)
};
