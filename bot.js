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
    
    if(cmd === `${prefix}kick`){

    //!kick @daeshan askin for it

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#e56b00")
    .addField("Kicked User", `${kUser} ID : ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> ID : ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Tiime", message.createdAt)
    .addField("Reason", kReason);

    let kickChannel = message.guild.channels.find(`name`, "logs");
    if(!kickChannel) return message.channel.send("Can't find logs channel.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);

    return;
  }
      
    
    
    
    
    
    if(cmd === `${prefix}botinfo`){

       let sicon = message.guild.iconURL;
       let serverembed = new Discord.RichEmbed()
         .setThumbnail(sicon)
         .setColor("#48f442")
         .addField("Server ID", "ID ="+message.guild.id)
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
