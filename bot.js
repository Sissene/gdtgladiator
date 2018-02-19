const botconfig = require("./botconfigs.json");
const Discord = require('discord.js')
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);

  bot.user.setActivity("GDT2RC Soon !", {type: "WATCHING"})});
  
  bot.on("message", async message => {
     if(message.author.bot) return;
     if(message.channel.type === "dm") return;
 
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    
    if(cmd === `${prefix}botinfo`){
      
      let bicon = bot.user.displayAvatarURL;  
      let botembed = new Discord.RichEmbed()
       
       .setColor("#48f442")
       .setThumbnail(bicon)
       .addField("Bot Name", bot.user.username)
       .setDescription("Bot Created by Sissene !")
       .addField("Created At", bot.user.createdAt);
      
 
      
      
    return message.channel.send(botembed);
    }
 

  
});




bot.login (process.env.BOT_TOKEN)
