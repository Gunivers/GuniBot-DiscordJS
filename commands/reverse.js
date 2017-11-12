exports.run = (bot, message, args, member) => {

		var text = message.content.substring(1);
        var text2 = text.replace("reverse"," ")
        

		var reversed = '';
		var i = text2.length;
		
		while (i > 0) {
			reversed += text2.substring(i - 1, i);
			i--;
		}
		const embed = {
			"color": 0xFF6400,
			"fields": [
				{
					"name": "Message renversé :",
					"value": reversed
				}
			]
		};
		message.channel.send({ embed });
}
