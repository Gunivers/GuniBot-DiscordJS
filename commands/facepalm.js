exports.run = (bot, message, args, member) => {
    var voiceChannel = message.member.voiceChannel;
    if (!voiceChannel){
        const embed = {
            "color": 0xFF6400,
            "fields": [
                {
                    "name": "Information",
                    "value": "Tu doit etre dans un channel vocal :x:"
                }
            ]
        };
        message.channel.send({ embed });;
    }
    voiceChannel.join().then(connection =>{
        const dispatcher = connection.playFile('./audio/facepalm.mp3');
        dispatcher.on("end", end => {
            voiceChannel.leave();
        });
    }).catch(err => console.log(err));
    }