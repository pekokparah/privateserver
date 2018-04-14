const db = require('quick.db')

exports.run = (client, message, args, tools) => {
  
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`**Sory, Yout don't have the administrator permission**`);
  
  db.set(`prefix_${message.guild.id}`, args.join(' ')).then(i => {
    message.channel.send(`susccessfully set prefix to **${i}**`)
    
  })
  
}
