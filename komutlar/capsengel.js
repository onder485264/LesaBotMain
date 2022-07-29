const Discord = require('discord.js');
const db = require('quick.db');
const { prefix } = require('../ayarlar.json');
const { evet } = require('../ayarlar.json');
const { hayır } = require('../ayarlar.json');

exports.run = async (client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR"))
  return message.channel.send(`${hayır} Bu komutu kullanmak için __**Yönetici**__ Yetkiniz Yok!`);
  if (!args[0]) {
    message.channel.send(`${hayır} Değerli Kullanıcımız Lütfen __***aç***__ Veya __***kapat***__ Yazınız!`)
    }
  if (args[0] == 'aç') {
    if(db.has(`capslock_${message.guild.id}`)) return message.channel.send(`${hayır} Caps Engelleme Zaten Açık!`)
    db.set(`capslock_${message.guild.id}`, 'acik')
      message.channel.send(`${evet} Caps Engel Sistemi Açıldı!`)
  };
  if (args[0] == 'kapat') {
        if(!db.has(`capslock_${message.guild.id}`)) return message.channel.send(`${hayır} Sistem zaten kapalı!`)
    db.delete(`capslock_${message.guild.id}`)
    message.channel.send(`${evet} Caps Engelleme Sistemi Kapatıldı!`)
  };

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['caps-engel', 'capsengel', 'capslock-engel'],
  permLevel: 0
};
exports.help = {
  name: 'caps-lock'
};