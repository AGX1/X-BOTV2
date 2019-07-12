const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("599284487741767684")
setInterval(function() {
channel.send(`AliGamerX_YTV2`);
}, 30)
})

client.login(process.env.BOT_TOKEN);