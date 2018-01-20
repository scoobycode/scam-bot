const Discord = require('discord.js');
const client = new Discord.Client();
const http = require("http");
let server;

function handleRequest(request, response) {
	response.setHeader("Location", "https://github.com/scoobycode/scam-bot");
	response.statusCode = 307;
	response.end();
}

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

server = http.createServer(handleRequest);
server.listen(process.env.PORT || 8080, (err) => {
	if (err) {
		return console.error(err);
	}

	console.log(`Server started on port ${process.env.PORT || 8080}`);
});
