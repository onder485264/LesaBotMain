const { Message, MessageEmbed } = require('discord.js')
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  const ems = new MessageEmbed()
  .setAuthor(`${client.user.username} Komutları`,ayarlar.IconURL)
  .setColor('BLACK')
  .addField(`<a:okayy:965399605497983006> ${ayarlar.prefix}kartopu`,`Belirlediğiniz Kullanıcıya Kar Topu Atar.`,true)
  .addField(`<a:okayy:965399605497983006> ${ayarlar.prefix}atasözü`,`Bir Ata Sözü Belirler Ve Atar.`,true)
  .addField(`<a:okayy:965399605497983006> ${ayarlar.prefix}adam-asmaca`,`Adam Asmaca Oynarsınız.`,true)
  .addField(`<a:okayy:965399605497983006> ${ayarlar.prefix}duello`,`Etiketlediğiniz Kullanıcı İle Savaşırsınız.`,true)
  .addField(`<a:okayy:965399605497983006> ${ayarlar.prefix}gay`,`Gay Derecenizi Ölçer.`,true)
  .addField(`<a:okayy:965399605497983006> ${ayarlar.prefix}kaçcm`,`Kaç Cm Olduğunu Söyler.`,true)
  .addField(`<a:okayy:965399605497983006> ${ayarlar.prefix}kimlik`,`Sahte Kimlik Oluşturur.`,true)
  .addField(`<a:okayy:965399605497983006> ${ayarlar.prefix}kralol`,`Sunucuda Kral Olursunuz`,true)
  .addField(`<a:okayy:965399605497983006> ${ayarlar.prefix}yazı-tura`,`Yazı Tura Oynarsınız.`,true)
  .addField(`<a:okayy:965399605497983006> ${ayarlar.prefix}yılbaşı`,`Yılbaşına Kalan Süreyi Atar.`,true)

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
  name: 'eğlence',
  usage: "eğlence"
};


//yardım bu

//moderator açarsın buradan kopya alırsın.

//emojileri değiştirirsin
//birçok imkan-