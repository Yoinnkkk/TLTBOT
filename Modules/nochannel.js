const guildID = '793892816186638336';
const channelID = '794615696621043762';
var previousID;
var messageID = '794630588798730322';
var final = 0;
const fs = require('fs');



function Update() {
    fs.readFile('Numbers.txt', (err, data) => {
        final = parseInt(data) + 1;
        console.log(final.toString());
        fs.writeFile('Numbers.txt', final.toString(), (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    });
    return final.toString();
}



let nochanneljs = function (message) {
    message.channel.messages.fetch({ limit: 1 }).then(messages => {
        previousID = messages.first().author.id;
    });
    if (message.channel.id === channelID) {
        if (isNaN(message.content) && message.content.toLowerCase().includes('no') && previousID !== message.author.id) {
            if (!message.channel.messages.fetch(messageID)) {
                var botMessage = message.channel.send('Amount of time no has been said: ' + Update())
                botMessage.pin();
                messageID = botMessage.id;
            } else {
                const msg = message.channel.messages.fetch(messageID).then(msg => {
                    msg.edit('Amount of time no has been said: ' + Update());
                });
            }
        } else {
            message.delete({ timeout: 10 })
                .then(msg => console.log(`Deleted message from ${message.author.username} after 1 second(s), message was "${message.content}"`))
                .catch(console.error)
        }
    }
    return;
}

module.exports = {
    nochanneljs: nochanneljs
};