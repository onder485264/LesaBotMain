const { Message, MessageEmbed } = require('discord.js')
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  const ems = new MessageEmbed()
  .setAuthor(`${client.user.username} Komutları`,ayarlar.IconURL)
  .setColor('BLACK')
  .addField(`<a:okayy:965399605497983006> ${ayarlar.prefix}son-mesaj`,`Etiketlediğiniz Kullanıcının Son Mesajını Görüntüler.`,true)
  .addField(`<a:okayy:965399605497983006> ${ayarlar.prefix}avatar`,`Belirlediğiniz Kullanıcının Profilini Atar.`,true)
  .addField(`<a:okayy:965399605497983006> ${ayarlar.prefix}afk`,`Sunucuda AFK Ya Alırsınız Kendinizi.`,true)
  .addField(`<a:okayy:965399605497983006> ${ayarlar.prefix}sunucu`,`Sunucu Hakkında Gelişmiş Bilgi Yollar.`,true)
  .addField(`<a:okayy:965399605497983006> ${ayarlar.prefix}say`,`Gelişmiş Sunucu İstatistiği Atar.`,true)
  .addField(`<a:okayy:965399605497983006> ${ayarlar.prefix}bilgi`,`Bot Hakkında Özel Bilgilere Ulaşırsınız.`,true)
  .addField(`<a:okayy:965399605497983006> ${ayarlar.prefix}istek`,`Bot Geliştiricisine İsteklerinizi İletirsiniz.`,true)


  .setImage('https://cdn.discordapp.com/attachments/965013322317586443/965451306091282472/standard_12.gif')
  message.channel.send(ems)
 
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["help"],
  permLevel: 0,
};

exports.help = {
  name: 'kullanıcı',
  usage: "!kullanıcı"
};


//yardım bu

//moderator açarsın buradan kopya alırsın.

//emojileri değiştirirsin
//birçok imkan-