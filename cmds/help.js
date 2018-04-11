const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let patrick = new Discord.RichEmbed()
.setTitle(':palm_tree: Sorry if the service patrick is not complete :palm_tree:  ')
.setDescription('`-clear`   = To clear chats on channel ! \n`-say`   = repeat the word you mentioned \n`-botinfo`   = know the identity of the bot ! \n`-report`   = to report violators ! \n`-ping`    = to test your ping !\n`-serverinfo`   = provide data from the server ! \n`-vote`   = judging a persons work or opinion ! \n`-avatar`  = For photos view your profile ! \n\n`-invite`  = To invite this bot to your server !\n`-info`    = To find out more info about Patrick ! \n`-Update`  = To check for new BOT update feature !\n \nif you need help use the command: `-help`')
.setColor('#00FF00')
.setThumbnail(bicon)
.setFooter('©Beta | By: Patrick Poppy | 2018')
message.channel.send(patrick);
}

exports.help = {
  name: "help"
}
