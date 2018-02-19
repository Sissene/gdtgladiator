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
    
    if(cmd === `${prefix}serverinfo`){

       let sicon = message.guild.iconURL;
       let serverembed = new Discord.RichEmbed()
         .setThumbnail(sicon)
         .setColor("#48f442")
         .addField("Server ID", "ID :"+message.guild.id)
         .addField("Server Name", message.guild.name)
         .addField("Created On", message.guild.createdAt)
         .addField("Members Count", message.guild.memberCount)



         return message.channel.send(serverembed);



    }
    
    
    
    
    
    
    
    
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
