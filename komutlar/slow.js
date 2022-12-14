const Discord = require('discord.js');

exports.run = async(client, message, args) => {
if (message.channel.type !== "text") return;
const limit = args[0] ? args[0] : 0;
  if(!limit) {
              var embed = new Discord.MessageEmbed()
                .setDescription(`Doğru kullanım: \` .slowmode [0/15]\``)
                .setColor("BLACK")
                .setTimestamp()
            message.channel.send({embed})
            return
          }
if (limit > 15) {
    return message.channel.send(new Discord.MessageEmbed().setDescription("Süre Limiti En Fazla **15** Saniye Yapılabilir.").setColor("#36393F"));
}
    message.channel.send(new Discord.MessageEmbed().setDescription(`Yazı Yazma Limiti **${limit}** Saniye Olarak Ayarlandı.`).setColor("#36393F"));
var request = require('request');
request({
    url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})};
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slow-mode", "slowmode", "yavas-mod", 'yavasmod', 'yavaşmod'],
  permLevel: 3,
};

exports.help = {
  name: 'yavaş-mod',
  description: 'Sohbete yazma sınır (süre) ekler.',
  usage: 'yavaş-mod [1/120]',
};