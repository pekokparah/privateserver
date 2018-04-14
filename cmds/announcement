const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

		   const color = args[0]
				
		   const text = args.slice(1).join(" ");
		   if (text.length < 1) return message.channel.send("Can not announce nothing");
		   //const colour = args.slice(2).join("");
		   const embed = new Discord.RichEmbed()
		   .setColor("0x" + color)
		   .setTitle("Important Announcement:")
		   .setDescription(text);
		   message.channel.send("@everyone")
		   message.channel.send({embed})

}

exports.help = {
  name: "neko"
}
