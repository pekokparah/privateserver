const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let patrick = new Discord.RichEmbed()
.setTitle(':sparkles:  Hello, i am Cosmic :sparkles: ')
.setDescription('this is a feature I give to you')
.addField('Anime:','`neko`', true)
.addField('Core:','`help` `ping` `invite`', true)
.addField('Moderation:','`clear` `welcome`', true)
.addField('Utility:','`avatar` `weather`', true)
.addField('Fun:','`say`', true)
.addField('Image:','`cat` `dog`', true)
        .setColor("#9A2EFE")
.setThumbnail(bicon)
.setFooter('©Beta | By: Qyto | 2018')
message.channel.send(patrick);
}

exports.help = {
  name: "help"
}
