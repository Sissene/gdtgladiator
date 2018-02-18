const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
    bot.user.setGame('#GDT2RC Soon !').catch(console.error)
})



bot.on('message', function (message) {
    if (message.content === '!tournament') {
        message.channel.send('The Tournament Will Start Soon !')
    }
})

bot.login(process.env.BOT_TOKEN)