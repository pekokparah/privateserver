const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let patrick = new Discord.RichEmbed()
.setTitle(':palm_tree: Hello, i am patrick :palm_tree:')
.setDescription('I`m the bot of the bikini bottom')
.addField('Anime:','`neko`', true)
.addField('Core:','`help`ping` `invite`', true)
.addField('Moderation:','`clear` `welcome`', true)
.addField('Utility:','`avatar`', true)
.addField('Fun:','`say`', true)
.addField('Image:','`cat` `dog`', true)
.setColor('#00FF00')
.setThumbnail(bicon)
.setFooter('©Beta | By: Patrick Poppy | 2018')
message.channel.send(patrick);
}

exports.help = {
  name: "help"
}
