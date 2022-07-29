const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");
const ayarlar = require('../ayarlar.json');


exports.run = (client, message) => {
    const istatistikozel = new Discord.MessageEmbed()
    .setColor(0x36393F)
.setDescription(`${ client.user.username}`)
  .addField(`Bot Sahibi`, `<@852822316811288617>`, )
  .addField("Sunucu Sayısı ", `${client.guilds.cache.size.toLocaleString()}`, true)
  .addField("Toplam Kullanıcı Sayısı ", `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
  .addField("Ping" , `${client.ws.ping}`, true)
  .addField("Discord.js Sürümü ", `${Discord.version}`, true)  
   .addField(`Destek Sunucum`, `[Tıkla](https://discord.gg/vkuRtxHkKt)`, true)
  .addField(`Botu Davet Et`, `[Tıkla](https://discord.com/api/oauth2/authorize?client_id=944916344955097118&permissions=8&scope=bot)`, true)
  .addField(`Websitem`, `[Yakında]( )`, true)
    .setImage("https://cdn.discordapp.com/attachments/965013322317586443/965451306091282472/standard_12.gif")
    .setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
    message.channel.send(istatistikozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik', 'i', 'istatistikler', 'botbilgi', 'bilgi', 'hakkında', 'bot hakkında', 'bothakkında'],
      kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};