const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
let ping = Date.now() - message.createdTimestamp
let embed = new Discord.RichEmbed()
.setTitle(':bow:  Welcome Command !')
.addField('how to use welcome commands?','create a channel called `welcome-leave`', true)
.addField('How does it work?','`will automatically welcome new members or members who have been out of the server`', true)
.setColor('#00FF00')
.setFooter('©Beta | By: Patrick Poppy | 2018')
message.channel.send({embed})
}

exports.help = {
  name: "welcome"
}
