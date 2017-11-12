exports.run = (bot, message, args, member) => {
		let text = args.join(" ");
		const embed = {
			"color": 0xFF6400,
			"fields": [
				{
					"name": message.author.username + " dit :",
					"value": text
				}
			]
		};
		message.channel.send({ embed });
}
	