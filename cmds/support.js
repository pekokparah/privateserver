const Discord = require("discord.js");


exports.run = async (bot, message, args) => {
let embed = new Discord.RichEmbed()
.setTitle('Support This Bot!')
.setDescription('help and support this boot to continue to grow by way of vote !')
.addField('Link','[![Discord Bots](https://discordbots.org/api/widget/434304339268337665.svg)](https://discordbots.org/bot/434304339268337665)', true)
        .setColor("#9A2EFE")
.setFooter('©Beta | By: Alfian Verter | 2018')
message.channel.send({embed})

}
    
exports.help = {
name: "support"
}
