const { Message, MessageEmbed } = require('discord.js')
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  const ems = new MessageEmbed()
  .setAuthor(`${client.user.username} Komutları`,ayarlar.IconURL)
  .setColor('BLACK')
  .addField(`<a:okayy:965399605497983006> ${ayarlar.prefix}sil`,`Belirlediğiniz Miktarda Mesaj Siler.`,true)
  .addField(`<a:okayy:965399605497983006> ${ayarlar.prefix}kullanıcı-bilgi`,`Etiketlediğiniz Kullanıcının Siciline Bakar.`,true)
  .addField(`<a:okayy:965399605497983006> ${ayarlar.prefix}forceban`,`Belirlediğiniz ID Ye Force Ban Atar.`,true)
  .addField(`<a:okayy:965399605497983006> ${ayarlar.prefix}kick`,`Belirlediğiniz Kişiyi Sunucudan Atar.`,true)
  .addField(`<a:okayy:965399605497983006> ${ayarlar.prefix}bansay`,`Sunucudaki Yasaklanma Sayısını Gösterir.`,true)
  .addField(`<a:okayy:965399605497983006> ${ayarlar.prefix}roller`,`Sunucuda Bulunan Rolleri Ve Rol Sayısını Gösterir.`,true)
  .addField(`<a:okayy:965399605497983006> ${ayarlar.prefix}yavaş-mod`,`Metin Kanallarında Mesaj Gönderim Saniyesini Ayarlarsınız.`,true)
  .addField(`<a:okayy:965399605497983006> ${ayarlar.prefix}mod-log`,`Sunucunun Denetimini Tutar.`,true)

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
  name: 'moderasyon',
  usage: "!moderasyon"
};


//yardım bu

//moderator açarsın buradan kopya alırsın.

//emojileri değiştirirsin
//birçok imkan-