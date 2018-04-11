const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  message.delete();
  let botmessage = args.join(" ");
  message.channel.send(botmessage);
}

exports.help = {
  name: "say"
}
