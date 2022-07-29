//komutlara atın
const Discord = require("discord.js");
const db = require("quick.db");
let prefix = process.env.prefix;
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
 
  let prefix = ayarlar.prefix;
  if (!message.member.hasPermission("MANAGE_GUILD"))
    return message.channel.send(
      ` Bu Komutu Kullanabilmek İçin "\`Yönetici\`" Yetkisine Sahip Olmalısın.`
    );

  let logk = message.mentions.channels.first();
  let logkanal = await db.fetch(`log_${message.guild.id}`);

  if (args[0] === "sıfırla" || args[0] === "kapat") {
    if (!logkanal)
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("#ff0000")
          .setDescription(`ModLog Kanalı Zaten Ayarlı Degil.`)
      );
    db.delete(`log_${message.guild.id}`);
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setDescription(
          `✅ | Mod-log Kanalı Başarıyla Sıfırlandı.`
        )
    );
    return;
  }

  if (!logk)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setDescription(
          ` Yanlış Kullanım \n Doğru Kullanım: ${prefix}mod-log #kanal`
        )
    );

  db.set(`log_${message.guild.id}`, logk.id);

  message.channel.send(
    new Discord.MessageEmbed()
      .setColor("#ff0000")
      .setDescription(` Mod-log Kanalı Başarıyla ${logk} Olarak Ayarlandı.`)
  );
  message.react("✳️");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mod-log", "modlog", "log-ayarlama"],
  permLevel: 3,
  kategori: "moderasyon"
};

exports.help = {
  name: "mod-log",
  description: "Mod-Log kanalını belirler.",
  usage: "mod-log <#kanal>"
};