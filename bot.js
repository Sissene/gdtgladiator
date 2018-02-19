const Discord = require('discord.js')
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);

  bot.user.setActivity("Tournament Soon !", {type: "WATCHING"});

  
});




bot.login(process.env.BOT_TOKEN)
