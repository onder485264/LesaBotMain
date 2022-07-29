const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client ,message, args) =>{
if(args[0] === 'aç') {
    db.set(`kufur_${message.guild.id}`, "acik")
    message.channel.send('Küfür Engelleme Açıldı. `✅`')
  return
}
if (args[0] === 'kapat') {
  db.delete(`kufur_${message.guild.id}`)
message.channel.send('Küfür Engelleme Kapatıldı. `✅`')
return
}

  message.channel.send('Değerli Kullanıcımız Lütfen **`aç`** Veya **`kapat`** Yazınız. `📌`')

};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['küfür'],
 permLevel: 0
};

exports.help = {
 name: 'küfür-engelle',
 description: 'Davet Log Kanalını Belirler',
 usage: 'küfür-engelle xd'
};