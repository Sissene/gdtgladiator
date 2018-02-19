const botconfig = require("./botconfigs.json");
const Discord = require('discord.js')
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);

  bot.user.setActivity("GDT2RC Soon !", {type: "WATCHING"})
  
  bot.on("message", async message => {
 
    let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
    
    if(cmd === `${prefix}botinfo`){
       
      let botembed = new Discord.RichEmbed()
       .setDescription("Bot Information")
       .setColor("#48f442")
       .addField("Bot Name", bot.user.username);
      
 
      
      
    return message.channel.send(botembed);
    }
 

  
});




bot.login(process.env.BOT_TOKEN)
