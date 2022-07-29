
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')

exports.run = async (bot, message, args) => {
var prefix = ayarlar.prefix;             
    
  if (!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send(`Bu Komutu Kullanabilmen İçin **Üyeleri At** Yetkisine Sahip Olman Gerekiyor.`);
  
	let user = message.mentions.users.first() || message.client.users.cache.get(args[0]) || message.client.users.cache.find(m => m.username === args.slice(0).join(" ")) || message.author;
  let reason = args.slice(1).join(' ');
  
  if (message.mentions.users.size < 1) return message.channel.send(`Sunucudan Atmamı İstediğiniz Kişiyi Etiketleyin. Örnek; \`${prefix}kick @etiket Uyarı\` `);
  if (user.id === message.author.id) return message.channel.send('Kendini Sunucudan Atamazsın.');
if (user.position > message.member.roles.highest.position) return message.channel.send(`Etiketlediğin Kullanıcıyı Atamazsın Yetki/Rolleri Seninkinden Üstün.`);
			    if (!reason) reason = 'Belirtilmemiş.'
    if (!user) return message.channel.send(`Etiketlediğin Kullanıcıyı Sunucuda Bulamadım.`)
    let member = message.guild.member(user)
    if (!member) return message.channel.send(`Etiketlediğin Kullanıcıyı Sunucuda Bulamadım.`)

 if (!message.guild.member(user).bannable) return message.channel.send(`Bu Kişiyi Sunucudan Atamam Çünkü \`Benden Daha Üstün Role Sahip.\` Veya \`Bana Gerekli Yetkileri Vermedin\`.`);

   if (!message.guild.member(user).bannable) return message.channel.send('Bu Sunucuda Bulunan Yetkilileri Atamam.');
    message.guild.member(user).kick(reason);
message.channel.send(`<@${user.id}> **Adlı Kişi Sunucudan Atıldı** Verilen Sebep: \`${reason}\``)


};

exports.conf = {
  aliases: ['at'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'kick',
  description: 'Belirttiğiniz kişiyi sunucudan atar.',
  usage: 'kick <@kullanıcı> <sebep>',
 
};