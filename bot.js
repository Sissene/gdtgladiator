const botconfig = require("./botconfigs.json");
const Discord = require('discord.js')
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);

  bot.user.setActivity("GDT2RC Soon !", {type: "WATCHING"})});
  
  bot.on('guildMemberAdd', member => {
      let text = "{server}" 
      let g = text.replace("{server}", msg.guild)
    const channel = member.guild.channels.find('name', 'join-leaves');
    if (!channel) return;
    channel.send(`${member}, Welcome to ${g} ! :wink: Have a great time :D !`);
    });
    
    
  




  bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
   

  
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
  
    if(cmd === `${prefix}kick`){
  

  
      let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!kUser) return message.channel.send("Can't find user!");
      let kReason = args.join(" ").slice(22);
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You haven't Higher Rank !");
      if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Can't Kick Personn Higher Rank !");
  
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
  
    if(cmd === `${prefix}ban`){
  
      let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!bUser) return message.channel.send("Can't find user!");
      let bReason = args.join(" ").slice(22);
      if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("You haven't Higher Rank !");
      if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Can't Ban Personn Higher Rank !");
     
  
      let banEmbed = new Discord.RichEmbed()
      .setDescription("~Ban~")
      .setColor("#bc0000")
      .addField("Banned User", `${bUser} ID : ${bUser.id}`)
      .addField("Banned By", `<@${message.author.id}> ID : ${message.author.id}`)
      .addField("Banned In", message.channel)
      .addField("Time", message.createdAt)
      .addField("Reason", bReason);
  
      let incidentchannel = message.guild.channels.find(`name`, "logs");
      if(!incidentchannel) return message.channel.send("Can't find logs channel.");
  
      message.guild.member(bUser).ban(bReason);
      incidentchannel.send(banEmbed);
  
  
      return;
    }
  
 
  if(cmd === `${prefix}botinfo`){

    let sicon = bot.user.avatarURL;
    let serverembed = new Discord.RichEmbed()
      .addField("Name", bot.user.username)
      .setDescription("GDT Clan Bot")
      .setColor("#48f442")
      .setThumbnail(sicon)
      .addField("Created On", bot.user.createdAt)
      
      
     

      return message.channel.send(serverembed);



 };
    
    
    
    if(cmd === `${prefix}serverinfo`){

       let sicon = message.guild.iconURL;
       let serverembed = new Discord.RichEmbed()
         .setThumbnail(sicon)
         .setColor("#48f442")
         .addField("Server ID", "ID : "+message.guild.id)
         .addField("Server Name", message.guild.name)
         .addField("Created On", message.guild.createdAt)
         .addField("Members Count", message.guild.memberCount)
         
        

         return message.channel.send(serverembed);



    }});
    
    
    
    
    
    
    
    
    




bot.login (process.env.BOT_TOKEN)
