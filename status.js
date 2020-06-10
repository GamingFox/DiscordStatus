const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
console.log(`Eingeloggt als ${client.user.tag}`);

client.user.setActivity(`TEXT`, {
type: "STREAMING",
url: ""})
    .then(presence => console.log(`dein Status wurde erfolgreic>
    .catch(console.error);
});

client.login('YOUR_TOKEN');
