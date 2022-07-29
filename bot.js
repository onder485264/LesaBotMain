const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const fs = require("fs");
const moment = require("moment");
const Jimp = require("jimp");
const db = require("quick.db");
var prefix = ayarlar.prefix;

client.on("ready", () => {
  console.log(`Bot suan bu isimle aktif: ${client.user.tag}!`);
});

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

///////////// KOMUTLAR BAŞ

////////////// KOMUTLAR SON
////////////// ALTI ELLEME
require("./util/eventLoader")(client);


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (ayarlar.sahip.includes(message.author.id)) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(ayarlar.token);


//KÜFÜR ENGEL

//KÜFÜR ENGELLE//
client.on("message", async msg => {
  
  
  const i = await db.fetch(`kufur_${msg.guild.id}`)
     if (i == "acik") {
         const kufur = ["oç", "ananısıkm", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq",];
         if (kufur.some(word => msg.content.includes(word))) {
           try {
             if (!msg.member.hasPermission("BAN_MEMBERS")) {
                   msg.delete();
                           
                       return msg.reply('**Hey Dostum Bu Sunucuda Küfür Yasak.**')
             }              
           } catch(err) {
             console.log(err);
           }
         }
     }
     if (!i) return;
 });
 
 client.on("messageUpdate", (oldMessage, newMessage) => {
   
   
  const i = db.fetch(`${oldMessage.guild.id}.kufur`)
     if (i) {
         const kufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq",];
         if (kufur.some(word => newMessage.content.includes(word))) {
           try {
             if (!oldMessage.member.hasPermission("BAN_MEMBERS")) {
                   oldMessage.delete();
                           
                       return oldMessage.reply('**Hey Dostum Bu Sunucuda Küfür Yasak !!!**')
             }              
           } catch(err) {
             console.log(err);
           }
         }
     }
     if (!i) return;
 });
 
 //REKLAM ENGELL     
 
 
 client.on("message", msg => {
  if(!db.has(`reklam_${msg.guild.id}`)) return;
         const reklam = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party", "discord.gg",];
         if (reklam.some(word => msg.content.includes(word))) {
           try {
             if (!msg.member.hasPermission("BAN_MEMBERS")) {
                   msg.delete();
                     return msg.reply('**Hey Dostum Bu Sunucuda Reklam Yasak !!!**').then(msg => msg.delete(3000));
    
  
   msg.delete(3000);                              
  
             }              
           } catch(err) {
             console.log(err);
           }
         }
     });
 
 //REKLAM ENGEL SONA ERDİ QEWQWE
 
 //ANTİ RAİD 
 

 //SON ANTİ RAİD
 
 //SUNUCU DDOS KORUMA KOD
 
 client.on('message', msg => {
 
 if(client.ws.ping > 2500) {
 
             let bölgeler = ['singapore', 'eu-central', 'india', 'us-central', 'london',
             'eu-west', 'amsterdam', 'brazil', 'us-west', 'hongkong',
             'us-south', 'southafrica', 'us-east', 'sydney', 'frankfurt',
             'russia']
            let yenibölge = bölgeler[Math.floor(Math.random() * bölgeler.length)]
            let sChannel = msg.guild.channels.cache.find(c => c.id === ayarlar.ddosKorumaLogKanalID)
 
            sChannel.send(`Sunucu'ya Saldırı Oluyor \nSunucu Bölgesini Değiştirdim \n __**${yenibölge}**__ \n __**Sunucu Pingimiz**__ :`+ client.ws.ping)
            msg.guild.setRegion(yenibölge)
            .then(g => console.log(" bölge:" + g.region))
            .then(g => msg.channel.send("bölge **"+ g.region  + " olarak değişti"))
            .catch(console.error);
          }});


          //ModLog Baş
client.on("message", async (msg, member, guild) => {
  let i = await db.fetch(`saas_${msg.guild.id}`);
  if (i === "açık") {
    if (msg.content.toLowerCase() === "sa") {
      msg.reply("**Aleyküm Selam Hoşgeldin.**");
    }
  }
});


client.on("messageDelete", async message => {
  if (message.author.bot || message.channel.type == "dm") return;

  let log = message.guild.channels.cache.get(
    await db.fetch(`log_${message.guild.id}`)
  );

  if (!log) return;

  const embed = new Discord.MessageEmbed()

    .setTitle(message.author.username + " | Mesaj Silindi")

    .addField("Kullanıcı: ", message.author)

    .addField("Kanal: ", message.channel)

    .addField("Mesaj: ", "" + message.content + "");

  log.send(embed);
});

client.on("messageUpdate", async (oldMessage, newMessage) => {
  let modlog = await db.fetch(`log_${oldMessage.guild.id}`);

  if (!modlog) return;

  let embed = new Discord.MessageEmbed()

    .setAuthor(oldMessage.author.username, oldMessage.author.avatarURL())

    .addField("**Eylem:**", "Mesaj Düzenleme")

    .addField(
      "**Mesajın sahibi:**",
      `<@${oldMessage.author.id}> === **${oldMessage.author.id}**`
    )

    .addField("**Eski Mesajı:**", `${oldMessage.content}`)

    .addField("**Yeni Mesajı:**", `${newMessage.content}`)

    .setTimestamp()

    .setColor("#ff0000")

    .setFooter(
      `Sunucu: ${oldMessage.guild.name} - ${oldMessage.guild.id}`,
      oldMessage.guild.iconURL()
    )

    .setThumbnail(oldMessage.guild.iconURL);

  client.channels.cache.get(modlog).send(embed);
});

client.on("channelCreate", async channel => {
  let modlog = await db.fetch(`log_${channel.guild.id}`);

  if (!modlog) return;

  const entry = await channel.guild
    .fetchAuditLogs({ type: "CHANNEL_CREATE" })
    .then(audit => audit.entries.first());

  let kanal;

  if (channel.type === "text") kanal = `<#${channel.id}>`;

  if (channel.type === "voice") kanal = `\`${channel.name}\``;

  let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem:**", "Kanal Oluşturma")

    .addField("**Kanalı Oluşturan Kişi:**", `<@${entry.executor.id}>`)

    .addField("**Oluşturduğu Kanal:**", `${kanal}`)

    .setTimestamp()

    .setColor("#ff0000")

    .setFooter(
      `Sunucu: ${channel.guild.name} - ${channel.guild.id}`,
      channel.guild.iconURL()
    )

    .setThumbnail(channel.guild.iconUR);

  client.channels.cache.get(modlog).send(embed);
});

client.on("channelDelete", async channel => {
  let modlog = await db.fetch(`log_${channel.guild.id}`);

  if (!modlog) return;

  const entry = await channel.guild
    .fetchAuditLogs({ type: "CHANNEL_DELETE" })
    .then(audit => audit.entries.first());

  let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem:**", "Kanal Silme")

    .addField("**Kanalı Silen Kişi:**", `<@${entry.executor.id}>`)

    .addField("**Silinen Kanal:**", `\`${channel.name}\``)

    .setTimestamp()

    .setColor("#ff0000")

    .setFooter(
      `Sunucu: ${channel.guild.name} - ${channel.guild.id}`,
      channel.guild.iconURL()
    )

    .setThumbnail(channel.guild.iconURL);

  client.channels.cache.get(modlog).send(embed);
});

client.on("roleCreate", async role => {
  let modlog = await db.fetch(`log_${role.guild.id}`);

  if (!modlog) return;

  const entry = await role.guild
    .fetchAuditLogs({ type: "ROLE_CREATE" })
    .then(audit => audit.entries.first());

  let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem:**", "Rol Oluşturma")

    .addField("**Rolü Oluşturan Kişi:**", `<@${entry.executor.id}>`)

    .addField("**Oluşturulan Rol:**", `\`${role.name}\` **=** \`${role.id}\``)

    .setTimestamp()

    .setFooter(
      `Sunucu: ${role.guild.name} - ${role.guild.id}`,
      role.guild.iconURL
    )

    .setColor("#ff0000")

    .setThumbnail(role.guild.iconURL);

  client.channels.cache.get(modlog).send(embed);
});

client.on("roleDelete", async role => {
  let modlog = await db.fetch(`log_${role.guild.id}`);

  if (!modlog) return;

  const entry = await role.guild
    .fetchAuditLogs({ type: "ROLE_DELETE" })
    .then(audit => audit.entries.first());

  let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem:**", "Rol Silme")

    .addField("**Rolü Silen Kişi:**", `<@${entry.executor.id}>`)

    .addField("**Silinen Rol:**", `\`${role.name}\` **=** \`${role.id}\``)

    .setTimestamp()

    .setFooter(
      `Sunucu: ${role.guild.name} - ${role.guild.id}`,
      role.guild.iconURL
    )

    .setColor("#ff0000")

    .setThumbnail(role.guild.iconURL);

  client.channels.cache.get(modlog).send(embed);
});

client.on("emojiCreate", async emoji => {
  let modlog = await db.fetch(`log_${emoji.guild.id}`);

  if (!modlog) return;

  const entry = await emoji.guild
    .fetchAuditLogs({ type: "EMOJI_CREATE" })
    .then(audit => audit.entries.first());

  let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem:**", "Emoji Oluşturma")

    .addField("**Emojiyi Oluşturan Kişi:**", `<@${entry.executor.id}>`)

    .addField("**Oluşturulan Emoji:**", `${emoji} - İsmi: \`${emoji.name}\``)

    .setTimestamp()

    .setColor("#ff0000")

    .setFooter(
      `Sunucu: ${emoji.guild.name} - ${emoji.guild.id}`,
      emoji.guild.iconURL
    )

    .setThumbnail(emoji.guild.iconURL);

  client.channels.cache.get(modlog).send(embed);
});

client.on("emojiDelete", async emoji => {
  let modlog = await db.fetch(`log_${emoji.guild.id}`);

  if (!modlog) return;

  const entry = await emoji.guild
    .fetchAuditLogs({ type: "EMOJI_DELETE" })
    .then(audit => audit.entries.first());

  let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem:**", "Emoji Silme")

    .addField("**Emojiyi Silen Kişi:**", `<@${entry.executor.id}>`)

    .addField("**Silinen Emoji:**", `${emoji}`)

    .setTimestamp()

    .setFooter(
      `Sunucu: ${emoji.guild.name} - ${emoji.guild.id}`,
      emoji.guild.iconURL
    )

    .setColor("#ff0000")

    .setThumbnail(emoji.guild.iconURL);

  client.channels.cache.get(modlog).send(embed);
});

client.on("emojiUpdate", async (oldEmoji, newEmoji) => {
  let modlog = await db.fetch(`log_${oldEmoji.guild.id}`);

  if (!modlog) return;

  const entry = await oldEmoji.guild
    .fetchAuditLogs({ type: "EMOJI_UPDATE" })
    .then(audit => audit.entries.first());

  let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem:**", "Emoji Güncelleme")

    .addField("**Emojiyi Güncelleyen Kişi:**", `<@${entry.executor.id}>`)

    .addField(
      "**Güncellenmeden Önceki Emoji:**",
      `${oldEmoji} - İsmi: \`${oldEmoji.name}\``
    )

    .addField(
      "**Güncellendikten Sonraki Emoji:**",
      `${newEmoji} - İsmi: \`${newEmoji.name}\``
    )

    .setTimestamp()

    .setColor("#ff0000")

    .setFooter(
      `Sunucu: ${oldEmoji.guild.name} - ${oldEmoji.guild.id}`,
      oldEmoji.guild.iconURL
    )

    .setThumbnail(oldEmoji.guild.iconURL);

  client.channels.cache.get(modlog).send(embed);
});

client.on("guildBanAdd", async (guild, user) => {
  let modlog = await db.fetch(`log_${guild.id}`);

  if (!modlog) return;

  const entry = await guild
    .fetchAuditLogs({ type: "MEMBER_BAN_ADD" })
    .then(audit => audit.entries.first());

  let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem:**", "Yasaklama")

    .addField("**Kullanıcıyı Yasaklayan Yetkili:**", `<@${entry.executor.id}>`)

    .addField("**Yasaklanan Kullanıcı:**", `**${user.tag}** - ${user.id}`)

    .addField("**Yasaklanma Sebebi:**", `${entry.reason}`)

    .setTimestamp()

    .setColor("#ff0000")

    .setFooter(`Sunucu: ${guild.name} - ${guild.id}`, guild.iconURL)

    .setThumbnail(guild.iconURL);

  client.channels.cache.get(modlog).send(embed);
});

client.on("guildBanRemove", async (guild, user) => {
  let modlog = await db.fetch(`log_${guild.id}`);

  if (!modlog) return;

  const entry = await guild
    .fetchAuditLogs({ type: "MEMBER_BAN_REMOVE" })
    .then(audit => audit.entries.first());

  let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem:**", "Yasak Kaldırma")

    .addField("**Yasağı Kaldıran Yetkili:**", `<@${entry.executor.id}>`)

    .addField(
      "**Yasağı Kaldırılan Kullanıcı:**",
      `**${user.tag}** - ${user.id}`
    )

    .setTimestamp()

    .setColor("#ff0000")

    .setFooter(`Sunucu: ${guild.name} - ${guild.id}`, guild.iconURL)

    .setThumbnail(guild.iconURL);

  client.channels.cache.get(modlog).send(embed);
});
// ModLog Son

//ANTİ CAPSLOCK

client.on("message", async msg => {
  if (msg.channel.type === "dm") return;
    if(msg.author.bot) return;  
      if (msg.content.length > 4) {
       if (db.fetch(`capslock_${msg.guild.id}`)) {
         let caps = msg.content.toUpperCase()
         if (msg.content == caps) {
           if (!msg.member.hasPermission("ADMINISTRATOR")) {
             if (!msg.mentions.users.first()) {
               msg.delete()
               return msg.channel.send(`${msg.author}, **Dostum Bu Sunucuda Büyük Harf İle Yazamazsın.**`).then(m => m.delete(5000))
   }
     }
   }
 }
}
});

client.on("messageUpdate", async newmsg => {
  if (newmsg.channel.type === "dm") return;
    if(newmsg.author.bot) return;  
      if (newmsg.content.length > 4) {
       if (db.fetch(`capslock_${newmsg.guild.id}`)) {
         let caps = newmsg.content.toUpperCase()
         if (newmsg.content == caps) {
           if (!newmsg.member.hasPermission("ADMINISTRATOR")) {
             if (!newmsg.mentions.users.first()) {
               newmsg.delete()
               return newmsg.channel.send(`${newmsg.author},**Dostum Bu Sunucuda Büyük Harf İle Yazamazsın.**`).then(m => m.delete(5000))
   }
     }
   }
 }
}
});

//SONCAPS

//EKLENDİM ATILDIM

client.on("guildCreate", guild => {  // sunucuya eklendim ve atıldım
  let add = client.channels.get("96501332231758644")//doldurulacak yer
  const eklendim = new Discord.RichEmbed()
  
  .setTitle(`<:kalp:731966452512325704> | Sevgili Kullanıcılarımız Beni Ekledi`)
  .setFooter("LESA BOT • Sizin Sayenizde Güzelleşiyorum...", client.user.avatarURL)
  .setColor("#F0F2F3")
  .setThumbnail(guild.iconURL)
  .addField(` **Sunucu İsmi**`,guild.name)//emojileri değiştirebilirsiniz
  .addField(` **Sunucu İD**`, guild.id)//emojileri değiştirebilirsiniz
  .addField(` **Kurucu**`,guild.owner.user.tag)//emojileri değiştirebilirsiniz
  .addField(` **Kurucu İD**`,guild.owner.user.id)//emojileri değiştirebilirsiniz
  .addField(`👥 **Üye Sayısı**`,guild.memberCount)//emojileri değiştirebilirsiniz
  
  add.send(eklendim)
  
  });
  
  client.on("guildDelete", guild => {
  let remove = client.channels.get("965013322317586443")//doldurulacak yer
  const atildim = new Discord.RichEmbed()
  
  .setTitle(` | Sevgili Kullanıcılarım Beni Çıkarttı`)
  .setFooter("LESA BOT• Sizin Sayenizde Güzelleşiyorum...", client.user.avatarURL)
  .setColor("#F0F2F3")
  .setThumbnail(guild.iconURL)
  .addField(` **Sunucu İsmi**`,guild.name)//emojileri değiştirebilirsiniz
  .addField(` **Sunucu İd**`, guild.id)//emojileri değiştirebilirsiniz
  .addField(` **Kurucu**`,guild.owner.user.tag)//emojileri değiştirebilirsiniz
  .addField(`**Kurucu İd**`,guild.owner.user.id)//emojileri değiştirebilirsiniz
  .addField(`👥 **Üye Sayısı**`,guild.memberCount)//emojileri değiştirebilirsiniz
  
  remove.send(atildim)
  
  });
  //////`TosunPasa Tarafından Atılmıştır.FYNX CODE
  ////FYNX CODE(

    //SAEKLEDİM ATILDIM

    //DM DUYYURU


//AFK 

client.on("message", async message => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || ayarlar.prefix;

  let kullanıcı = message.mentions.users.first() || message.author;
  let afkdkullanıcı = await db.fetch(`afk_${message.author.id}`);
  let afkkullanıcı = await db.fetch(`afk_${kullanıcı.id}`);
  let sebep = afkkullanıcı;

  if (message.author.bot) return;
  if (message.content.includes(`${prefix}afk`)) return;
  if (message.content.includes(`<@${kullanıcı.id}>`)) {
    if (afkdkullanıcı) {
      message.reply(``);
      db.delete(`afk_${message.author.id}`);
      message.member.setNickname("");
      message.reply(`Etiketlediğiniz Kişi Afk \n Sebep : ${sebep}`);
    }
    if (afkkullanıcı)
      return message.channel.send(
        `**${kullanıcı.tag}** \`${sebep}\` Sebebiyle Afk!`
      );
  }

  if (!message.content.includes(`<@${kullanıcı.id}>`)) {
    if (afkdkullanıcı) {
      message.reply(`Artık AFK Değilsin.`);
      db.delete(`afk_${message.author.id}`);
      message.member.setNickname("");
    }
  }
});


// 2.modlog
