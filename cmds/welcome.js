const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
let ping = Date.now() - message.createdTimestamp
let embed = new Discord.RichEmbed()
.setTitle(':bow:  Welcome Command !')
.addField('how to use welcome commands?','create a channel called `welcome-leave`', true)
.addField('How does it work?','`will automatically welcome new members or members who have been out of the server`', true)
        .setColor("#9A2EFE")
.setFooter('©Beta | By: Alfian Verter | 2018')
message.channel.send({embed})
}

exports.help = {
  name: "welcome"
}
