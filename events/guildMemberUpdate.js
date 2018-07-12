module.exports = (client, oldmember, newmember) => {
  if(oldmember.nickname === newmember.nickname) return;

  const key = `${newmember.guild.id}-${newmember.id}`;
  if (!client.usersDB.has(key)) {
    client.addUserToDB(key);
  }
  let blnick = client.usersDB.getProp(key, 'blnick');
  if(!blnick) return;
  if(blnick.on) {
    newmember.setNickname((blnick.name == null) ? '' : blnick.name);
  }
}
