const { Client, Intents, MessageEmbed, Message } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES]});
//const config = require('./config.json');
const ncjs = require('./Modules/nochannel.js');
const cmd = require('./Modules/commands.js');
const readl = require('readline');
const prefix = '$'
const rl = readl.createInterface(process.stdin, process.stdout);


client.once('ready', () => {
    console.log('Bot is online!');
    console.log('Type "help" for help');
});



client.on('messageCreate', async message => {
    //ncjs.nochanneljs(message);
    if (message.author.bot === true) return;
    if (message.content.startsWith(`${prefix}`)) {
        const params = message.content.split(' ');
        cmd.commands2(client, params[0], params[1], message, MessageEmbed);
    }
});

rl.on('line', function (line) {
    const params = line.split(' ');
    cmd.commands(client, params[0], params[1], params[2], params[3]);
});





client.login(process.env.TOKEN);
//client.login(config.token);









/*
const quotes = ['shut pls ', 'shut ', 'please stop talking ', 'nobody asked ', 'leave ', 'leave please ', 'dont remember asking ', 'you are irrelevant ', 'person above mega gay ', 'you make my eyes bleed ', 'Your birth certificate is an apology letter from the condom factory ', 'You remind me of a penny, not worth much ', 'Go back to africa ', 'you belong in the sewers ', ];
if (message.author.id === '784678755477749770' || message.author.id === '356165195040555008') {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    message.channel.send(`${quotes[randomIndex]} ${message.author}`);
}
*/