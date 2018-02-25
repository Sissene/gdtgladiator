const botconfig = require("./botconfigs.json");
const Discord = require('discord.js')
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});


bot.on("ready", async () => {
    console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);

  bot.user.setActivity("GDT2RC Soon !", {type: "WATCHING"})});
  
  bot.on('guildMemberAdd', member => {
      let text = "{server}" 
      let g = text.replace("{server}", member.guild)
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
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);
  
    

    
    
    
   });




  
    
    
    
    
    
    
    
    
    




bot.login (process.env.BOT_TOKEN)
