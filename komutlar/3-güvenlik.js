const { Message, MessageEmbed } = require('discord.js')
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  const ems = new MessageEmbed()
  .setAuthor(`${client.user.username} Komutları`,ayarlar.IconURL)
  .setColor('BLACK')
  .addField(`<a:okayy:965399605497983006> ${ayarlar.prefix}capslock-engel`,`Sunucuda Büyük Harf Kullanımını Kısıtlar.`,true)
  .addField(`<a:okayy:965399605497983006> ${ayarlar.prefix}reklam-engelle`,`Sunucuda Reklam Yapılmasını Yasaklar.`,true)
  .addField(`<a:okayy:965399605497983006> ${ayarlar.prefix}küfür-engelle`,`Sunucuda Küfür,Argo Yapılmasını Yasaklar.`,true)
  .addField(`<a:okayy:965399605497983006> ${ayarlar.prefix}mod-log`,`Sunucunun Denetimini Tutar.`,true)


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
  name: 'güvenlik',
  usage: "!güvenlik"
};


//yardım bu

//moderator açarsın buradan kopya alırsın.

//emojileri değiştirirsin
//birçok imkan-