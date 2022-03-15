


let commands = async function (client, command, param0, param1, param2) {
    var command = command.toLowerCase();
    switch (command) {
        case "help":
            console.log(`List of commands available: \n
 Ban - \n Usage: \n ban { user } { reason } \n Description: \n Bans the specified user and uses the reason specified\n
 Kick - \n Usage: \n kick { user } { reason } \n Description: \n Kicks the specified user and uses the reason specified\n
 VCMute & VCUnmute - \n Usage: \n vcmute / vcunmute { user } { reason } \n Description: \n Mutes / Unmutes the specified user and uses the reason specified\n
 VCDeafen & VCUndeafen \n Usage: \n vcdeafen / vcundeafen { user } { reason } \n Description: \n Deafens / Undeafens the specified user and uses the reason specified\n
 Ping - \n Usage: \n ping \n Description: \n Returns the time taken to send response message and api latency\n
 Say - \n Usage: \n say { text } \n Description: \n Says the specified text\n`);
            break;
        case "ban":
            var member = client.guilds.cache.get(param0).members.cache.get(param1);
            if (member) {
                member.ban(`${param2}`).catch(err => {
                    console.log(err);
                });
            }
            break;
        case "kick":
            var member = client.guilds.cache.get(param0).members.cache.get(param1);
            if (member) {
                member.kick(`${param2}`).catch(err => {
                    console.log(err);
                });
            }
            break;
        case "mute":
            var member = client.guilds.cache.get(param0).members.cache.get(param1);
            if (member) {
                await member.voice.setMute(true, "Console command mute").catch(e => {
                    console.error(e);
                });
            }
            break;
        case "deafen":
            var member = client.guilds.cache.get(param0).members.cache.get(param1);
            if (member) {
                await member.voice.setDeaf(true, "Console command mute").catch(e => {
                    console.error(e);
                });
            }
            break;
        case "unmute":
            var member = client.guilds.cache.get(param0).members.cache.get(param1);
            if (member) {
                await member.voice.setMute(false, "Console command mute").catch(e => {
                    console.error(e);
                });
            }
            break;
        case "undeafen":
            var member = client.guilds.cache.get(param0).members.cache.get(param1);
            if (member) {
                await member.voice.setDeaf(false, "Console command mute").catch(e => {
                    console.error(e);
                });
            }
            break;
        case "ping":
            console.log(`🏓  API Latency is ${Math.round(client.ws.ping)}ms`);
            break;
        case "say":
            console.log(param0);
            break;
        default:
            console.log('I dont understand');
            break;
    }
    return;
}
let commands2 = async function (client, command, param1, m, MessageEmbed) {
    var command = command.toLowerCase();
    switch (command) {
        case "$help":
            let embed = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Help')
                .addFields(
                    { name: 'VCMute & VCUnmute', value: 'Usage: $vcmute/vcunmute {user} {reason}' },
                    { name: 'VCDeafen & VCUndeafen', value: 'Usage: $vcdeafen/vcundeafen {user} {reason}' },
                    { name: 'Ping', value: 'Usage: $ping' },
                    { name: 'Say', value: 'Usage: $say {text}' },
                )
            m.channel.send({embeds: [embed] });
 /*           m.channel.send(`List of commands available: \n
 VCMute & VCUnmute - \n Usage: \n $vcmute/vcunmute {user} {reason} \n Description: \n Mutes/Unmutes the specified user and uses the reason specified\n
 VCDeafen & VCUndeafen \n Usage: \n $vcdeafen/vcundeafen {user} {reason} \n Description: \n Deafens/Undeafens the specified user and uses the reason specified\n
 Ping - \n Usage: \n $ping \n Description: \n Returns the time taken to send response message and api latency\n
 Say - \n Usage: \n $say {text} \n Description: \n Says the specified text\n`); */
            break;
        case "$vcmute":
            var member = m.mentions.members.first();
            if (member) {
                await member.voice.setMute(true, "Console command mute").catch(e => {
                    console.error(e);
                });
            }
            break;
        case "$vcdeafen":
            var member = m.mentions.members.first();
            if (member) {
                await member.voice.setDeaf(true, "Console command mute").catch(e => {
                    console.error(e);
                });
            }
            break;
        case "$vcunmute":
            var member = m.mentions.members.first();
            if (member) {
                await member.voice.setMute(false, "Console command mute").catch(e => {
                    console.error(e);
                });
            }
            break;
        case "$vcundeafen":
            var member = m.mentions.members.first();
            if (member) {
                await member.voice.setDeaf(false, "Console command mute").catch(e => {
                    console.error(e);
                });
            }
            break;
        case "$ping":
            m.channel.send(`🏓 Latency is ${m.createdTimestamp - m.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
            break;
        case "$say":
            var splonk = m.content.split(' ', 2);
            splonk.splice(0,1);
            if (splonk[0].includes('cock') == false || splonk[0].includes('dick') == false) {m.channel.send(splonk[0]);} else {m.channel.send(`bro? 🤨`)}
            break;
        default:
            m.channel.send('I dont understand');
            break;
    }
    return;
}



module.exports = {
    commands: commands,
    commands2: commands2
};