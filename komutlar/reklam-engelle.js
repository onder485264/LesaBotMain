const db = require('quick.db')
const Discord = require('discord.js')
 let ayarlar = ['aç','kapat']
exports.run = async (bot, message, args) => {
  if (!args[0]) return message.channel.send('Değerli Kullanıcımız Lütfen **`aç`** Veya **`kapat`** Yazınız. `📌`')
  if(!ayarlar.includes(args[0])) return message.channel.send(`Geçerli parametreleri kullanmalısın.\nParametreler: ${ayarlar.join(' - ')}`)
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('Bu Komutu Kullanabilmen İçin **Sunucuyu Yönet** Yetkisine Sahip Olman Gerekiyor.')
 
  if (args[0] == 'aç') {
    if(db.has(`reklam_${message.guild.id}`)) return message.channel.send(`Reklam Engelle Sistemi Zaten Açık...`)
    db.set(`reklam_${message.guild.id}`, 'acik')
      message.channel.send('Reklam Engelleme Sistemi Açıldı `✅` `Üyeleri Yasakla` Yetkisinde Olan Kullanıcıların Reklamı Engellenmicektir.')
  }
  if (args[0] == 'kapat') {
        if(!db.has(`reklam_${message.guild.id}`)) return message.channel.send(`Sistem zaten kapalı.`)
    db.delete(`reklam_${message.guild.id}`)
      message.channel.send('Reklam Engelleme Sistemi Kapatıldı. `✅`')
  }
 
};
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['advertisement','reklam'],
  permLevel: 0
};
 
exports.help = {
  name: 'reklam-engelle',
  description: '[Admin Komutu]',
  usage: 'reklam-engelle'
};