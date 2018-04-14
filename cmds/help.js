const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let patrick = new Discord.RichEmbed()
.setAuthor(':sparkles:  Hello, i am Cosmic :sparkles:', bot.user.avatarURL)
.setDescription('this is a feature I give to you | use this prefix `c.`')
.addField('Anime:','`neko` `pat`', true)
.addField('Core:','`help` `ping` `invite` `support` `votebot`', true)
.addField('Economy:','`balance` `addbalance`', true)
.addField('Moderation:','`clear` `welcome` `kick` `ban`', true)
.addField('Utility:','`avatar` `weather`', true)
.addField('Fun:','`say` `vote`', true)
.addField('Image:','`cat` `dog` `slap`', true)
.addField('Support Bot:','`votebot` `channel` `invite`', true)
        .setColor("#9A2EFE")
.setThumbnail(bicon)
.setFooter('©Beta | By: Alfian Verter | 2018')
message.channel.send(patrick);
}

exports.help = {
  name: "help"
}
