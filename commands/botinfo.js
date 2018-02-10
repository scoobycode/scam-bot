const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {



    let boticon = bot.user.displayAvatarURL
    let botinfocmd = new Discord.RichEmbed()
    .setTitle("Bot Stats")
    .setColor("#000080")
    .setThumbnail(boticon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt)
    .addField("Created By", "scooby297#2003");

    return message.channel.send(botinfocmd);
  }

module.exports.help = {
    name: "botinfo"
}
