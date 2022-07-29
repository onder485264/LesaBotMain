const discord = require('discord.js');
const db = require('quick.db') 
exports.run = async (client, message, args) => {
 
  let user = message.author
  let sebep = args.join(" ")
 
  if (!sebep) return message.channel.send(`**Lutfen Bir Sebep Gir**`)
 message.delete()
  db.set(`afk_${user.id}`, sebep)
  const embed = new discord.MessageEmbed()
  .setThumbnail(message.author.displayAvatarURL())
  .addField(`Kullanıcı  __**${sebep}**__ Sebebiyle Artık `, `AFK'sın...`)
   .setFooter(`Afk Olan Kullanıcı ${message.author.username}`, message.author.avatarURL())
  message.channel.send(embed)

message.member.setNickname(``);
  
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: 'afk'
}