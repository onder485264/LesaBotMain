const Discord = require('discord.js')

    exports.run = async(client, message, args) => {
        let sikayetmesaj = args.slice(0).join(' ')
        
        if(!sikayetmesaj){
            const cmfhata = new Discord.MessageEmbed()
            .setDescription(`**Lütfen Ekiplerimize Şikayetini Belirt.**`)
            .setColor('BLACK')
            return message.channel.send(cmfhata)
        }

        // Zaman
        var zaman = new Date(); 
        var codemarefizaman = zaman.getDate() + "/"+ (zaman.getMonth()+1)  + "/" + zaman.getFullYear() + " - " + zaman.getHours() + ":" + zaman.getMinutes() + ":" + zaman.getSeconds();

        // Sunucunun İnvitesi İçin
        if(sikayetmesaj){
            message.channel.createInvite().then(inv => {
                const codemarefisikayet = new Discord.MessageEmbed()
                .setDescription(`
                    **${message.guild.name}** Adlı Sunucudan 
                
                    ${message.author} Kişisi Bot Hakkında Şikayette Bulundu, 
                    
                    Şikayet Sebebi:  **${sikayetmesaj}**\n
        
                    Sunucunun Davet Linki: ${inv.url}
                `)
                .setColor('RANDOM')
                .setTitle(`**Şikayet Var**`)
                .setFooter(codemarefizaman)
                client.channels.cache.get('965013322317586443').send(codemarefisikayet)
            })

        }
    }


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Şikayet','Report','ŞİKAYET','REPORT','report'],
    permLevel: 0
}

exports.help = {
    name: 'şikayet'
}