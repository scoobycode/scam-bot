const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

  let helper = new Discord.RichEmbed()
  .setTitle("Commands")
  .addField("botinfo", "Displays information about the bot")
  .addField("serverinfo", "Displays information about the server")
  .addField("memberid", "Displays a member ID")
  .addField("channelid", "Displays the channel ID")
  .addField("serverid", "Displays the servers ID")
  .addField("inviteinfo", "Displays information about an invite")
  .addField("servericon", "Sends a link to a server's current thumbnail")
  .addField("typeon", "Starts typing in the current channel")
  .addField("typeoff", "Stops typing in the current channel");


  message.react("\u2705")
  message.author.send(helper)
  message.channel.send(`${message.author}, Check your DMs! \uD83D\uDCEC`)
}
module.exports.help = {
    name: "help"
}
