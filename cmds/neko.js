const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async (bot, message, args) => {
let {body} = await superagent
.get("nekos.life/api/neko")
var catembed = new Discord.RichEmbed()
.setTitle('Here is your random cat!')
.setColor("GREEN")
.setImage(body.file)
message.channel.send(catembed)
}

exports.help = {
  name: "neko"
}
