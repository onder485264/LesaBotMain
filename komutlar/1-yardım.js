const { Message, MessageEmbed } = require('discord.js')
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  const ems = new MessageEmbed()
  .setAuthor(`${client.user.username} Komutları`,ayarlar.IconURL)
  .setColor('BLACK')
  .addField(`<a:okayy:965399605497983006> ${ayarlar.prefix}kullanıcı`,`Kullanıcı Menüsünü Açar.`)
  .addField(`<a:okayy:965399605497983006> ${ayarlar.prefix}güvenlik`,`Güvenlik Menüsünü Açar.`)
  .addField(`<a:okayy:965399605497983006> ${ayarlar.prefix}moderasyon`,`Moderasyon Menüsünü Açar.`)
  .addField(`<a:okayy:965399605497983006> ${ayarlar.prefix}bilgi`,`Özel Bilgiler Menüsünü Açar.`)
  .addField(`<a:okayy:965399605497983006> ${ayarlar.prefix}eğlence`,`Eğlence Komutlarını Açar.`)
  .addField(`<a:okayy:965399605497983006> ${ayarlar.prefix}lesakonomi`,`Ekonomi Sistemi.`)

  .setImage('https://cdn.discordapp.com/attachments/965013322317586443/965451306091282472/standard_12.gif')
  .setTimestamp()
  message.channel.send(ems)
 
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["help"],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  usage: "!yardım"
};


//yardım bu

//moderator açarsın buradan kopya alırsın.

//emojileri değiştirirsin
//birçok imkan-