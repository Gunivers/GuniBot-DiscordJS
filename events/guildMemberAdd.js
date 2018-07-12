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
    return channel.send(" (FR) Bienvenue sur GUNIVERS " + member.displayName + " !\n- Avant de commencer, merci de prendre connaissance du salon #information-fr:pushpin: \n- Tu peux t'ajouter/retirer des rôles via le salon #roles \n- Participe à des évènements, projets ou simplement aux discussions pour évoluer dans la communauté ! :wink: \n\n(EN) Welcome to GUNIVERS " + member.displayName + " !\n- Before you begin, please read the #information-en:pushpin: \n- You can add/remove your own roles via the #roles channel\n- Participate in events, projects or simply discussions to evolve in the community! :wink:");
  }).catch(console.error)
};
