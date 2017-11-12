exports.run = (bot, message, args) => {
const embed = {
    "color": 0xFF6400,
    "fields": [
        {
            "name": "Information",
            "value": "j'ai un ping de " + bot.ping + " ms"
        }
    ]
};
message.channel.send({ embed });
}