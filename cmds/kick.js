const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!kUser) return message.channel.send("Can't find user!");
        let kReason = args.join(" ").slice(22);
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You do not have ``Kick Members`` permissions");
        if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("That person can't be kicked!");
        if(!kReason) {
                
      try{
            let kickEmbed = new Discord.RichEmbed()
            .setDescription("Kick!!")
        .setColor("#9A2EFE")
            .addField("Kicked User", `${kUser}`)
            .addField("Kicked By", `<@${message.author.id}>`)
            .addField("Kicked In", message.channel)
            .addField("Tiime", message.createdAt)
            .addField("Reason", none);
                
            message.guild.member(kUser).kick("none");
            kUser.send(kickEmbed);
            return;
        }
   try{
        let kickEmbed = new Discord.RichEmbed()
        .setDescription("Kick!!")
        .setColor("#9A2EFE")
        .addField("Kicked User", `${kUser}`)
        .addField("Kicked By", `<@${message.author.id}>`)
        .addField("Kicked In", message.channel)
        .addField("Tiime", message.createdAt)
        .addField("Reason", kReason);

        message.guild.member(kUser).kick(kReason);
        kUser.send(kickEmbed);
    } catch (err){
        return;
}
}

module.exports.help = {
  name:"kick"
}
