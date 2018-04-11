const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  async function purge() {
      let insert = args.join(" ");
      if (!message.member.permissions.has("MANAGE_MESSAGES")) {
          message.channel.send('You do not have ``Manage Messages`` permissions');
          return;
      }

      if (!insert) {
          message.channel.send('```Use the command correctly. \n Example: ' + '-' + 'Clear <2 - 100>```');
          return;
      }
    
      if (insert > 100) {
         message.channel.send("I just can delete 100 message")
      }
    
      const fetched = await message.channel.fetchMessages({limit: insert});
      console.log(fetched.size + ' messages found, deleting...');

      message.channel.bulkDelete(fetched)
          .catch(error => message.channel.send('there is no `permission` to perform the deletion'));
     let embed = new Discord.RichEmbed()
         .setTitle('Clean! :put_litter_in_its_place:  ')
         .setDescription(`${insert} messages deleted.`)
         .setColor('#00FF00')
         .setFooter('©Beta | By: Patrick Poppy | 2018')
     message.channel.send(embed)
     message.delete();
  }

  purge();
}

exports.help = {
  name: "clear"
}
