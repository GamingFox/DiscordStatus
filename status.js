const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
console.log("lol")

client.user.setActivity(`Eclipse IDE`, {
type: "PLAYING",
url: "https://www.twitch.tv/zVerclxktlP"})
    .then(presence => console.log(`node lol`))
    .catch(console.error);
});

client.login('NTkxNTM4NzIzOTAwODgyOTQ0.XuDxPw.wkb-o35f_wfcer74zlSALdpxPqE');
