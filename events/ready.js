const Discord = require('discord.js');
const moment = require('moment');
const chalk = require('chalk');
const { prefix } = require('../ayarlar.json')

module.exports = client => {
  
  setInterval(function() {
    client.user.setActivity(`💦| ( Sunucu ${client.guilds.cache.size} ) | ( Kullanıcı ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} ) | ( Kanal ${client.channels.cache.size} ) Hizmet Ediyorum. |`);

}, 2 * 30000);
  
  client.user.setStatus("online"); //dnd, idle, online, offline
  
}