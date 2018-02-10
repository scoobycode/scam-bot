const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    return message.channel.send(message.guild.id);
}
module.exports.help = {
    name: "guildid"
}
