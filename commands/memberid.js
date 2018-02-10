const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let you = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!you) return message.channel.send((`${message.author}, You must mention a user!`))
    return message.channel.send(you.id);

}
module.exports.help = {
    name: "memberid"
}
