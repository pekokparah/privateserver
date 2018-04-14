const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  join(" ")
  let patrick = new Discord.RichEmbed()
  .setTitle("Bot Information :robot:")
        .setColor("#9A2EFE")
  .setThumbnail(bicon)
  .addField("Bot Name", bot.user.username)
  .addField("Created On", bot.user.createdAt);

  return message.channel.send(patrick);
}

exports.help = {
  name: "botinfo"
}
