require("dotenv").config();
const config = require("./config.js");

const Discord = require("djst-client");
const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES"],
    prefix: config.prefix,
    initCommands: true
});

// help
client.generateHelpCommand();

//  command sendiri - simple
client.createCommand({
    category: "random",
    name: "hello",
    aliases:["halo"],
    cooldown: 5,
    description: "Simple command",
    execute: async (message, args, bot) => {
        message.channel.send("Halo Master")
    }
})

client.on("ready", () =>{
    console.log("ready");
})

client.login(process.env.TOKEN);