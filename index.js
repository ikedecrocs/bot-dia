// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const images = require('./images.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	switch (commandName) {
		case 'bomdia':
			
			const valorAleatorio = Math.floor(Math.random() * Object.keys(images).length) + 1;
			await interaction.reply(images[valorAleatorio]);
			console.log(`${interaction.user.username} no servidor ${interaction.guild.name} obteve o bom dia ${valorAleatorio}`)
			break;

		default:
			break;
	}
});

// Login to Discord with your client's token
client.login(token);