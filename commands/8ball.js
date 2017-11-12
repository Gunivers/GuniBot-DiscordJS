exports.run = (bot, message, args, member) => {
		
		let text = args.join(" ");
		const fortunes = [
			"Oui",
			"Non",
			"Peut etre",
			"Essaye encore",
			"Probablement",
			"Tres largement non",
			"Je suis sûr que oui",
			"Je suis sûr que non",
			"Bien sur ... que oui",
			"Bien sur ... que non",
			"Je suis sur a 99%",
			"Tu peut demander au dieu <@136176639175426048>, il connais probablement la reponse",
			"42",
			"La reponse D",
			"Ta gueule",
			"balek frere"
		];
		message.channel.send({
			embed: {
				"color": 0xFF6400,
				author: {
					name: `${bot.user.username}`,
					icon_url: `${bot.user.avatarURL}`
				},
				"fields": [
					{
					  "name": message.author.username + " a demander ...",
					  "value": text
					},
					{
						"name": "La boule a dit...",
						"value": fortunes[Math.floor(Math.random() * fortunes.length)]
					  },
				]                   
			},
		});
	};
	