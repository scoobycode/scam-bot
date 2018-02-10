const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


    let servericon = message.guild.iconURL;
    let serverinfocmd = new Discord.RichEmbed()
    .setTitle("Server Information")
    .setColor("#000080")
    .setThumbnail(servericon)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Member Count", message.guild.memberCount);

    return message.channel.send(serverinfocmd);
  }

module.exports.help = {
    name: "serverinfo"
}
