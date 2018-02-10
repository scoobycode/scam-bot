const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let userid = message.author.id
  let required = "245877990938902529"
  if (userid!==required) {
    console.log("lolno")
  }
    message.channel.startTyping();
    message.delete()
}
module.exports.help = {
    name: "typeon"
}
