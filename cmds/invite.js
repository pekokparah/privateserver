const Discord = require("discord.js");


exports.run = async (bot, message, args) => {
let embed = new Discord.RichEmbed()
.setTitle('want to invite this bot to your server? :robot:')
.addField('Link','[Klick Here](https://discordapp.com/oauth2/authorize?client_id=432536823865016321&scope=bot&permissions=8)', true)
.setColor('#00FF00')
.setFooter('@Beta | By: Alfian Verter | 2018')
message.channel.send({embed})

}
    
exports.help = {
name: "invite"
}
    
