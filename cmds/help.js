const Discord = require("discord.js");
const db = require('quick.db')

exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let patrick = new Discord.RichEmbed()
.setTitle(':sparkles:  Hello, i am Cosmic :sparkles: ')
.setDescription('this is a feature I give to you | use this prefix `c.`')
.addField('Anime:','`neko`', true)
.addField('Core:','`help` `ping` `invite`', true)
.addField('Moderation:','`clear` `welcome`', true)
.addField('Utility:','`avatar` `weather`', true)
.addField('Fun:','`say`', true)
.addField('Image:','`cat` `dog`', true)
        .setColor("#9A2EFE")
.setThumbnail(bicon)
.setFooter('©Beta | By: Alfian Verter | 2018')
message.channel.send(patrick);
}

exports.help = {
  name: "help"
}
