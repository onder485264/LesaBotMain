const Discord = require("discord.js");

exports.run = (client, message, args) => {

  let Sulies1 = message.guild;
  Sulies1
    .fetchBans()
    .then(Sulies =>
    message.channel.send(` **Sunucunuzda ${Sulies.size} Banlanmış Üye Bulunmaktadır.**`)
  )
    .catch(console.error);
};

exports.conf = {
  enabled: true,
  runIn: ["bansay"],
  aliases: ["bansay"],
  permLevel: 0
};

exports.help = {
  name: "bansay",
  description: "Sunucudan banlanan kişilerin sayısını gösterir",
  usage: "bansay"
};




