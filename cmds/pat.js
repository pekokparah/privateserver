const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async (bot, message, args) => {
let {body} = await superagent
.get("https://nekos.life/api/pat")
var catembed = new Discord.RichEmbed()
.setTitle('Here is your random Pat')
        .setColor("#9A2EFE")
.setImage(body.neko)
message.channel.send(catembed)
}

exports.help = {
  name: "pat"
}
