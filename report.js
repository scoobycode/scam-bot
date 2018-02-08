const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send(`${message.author}, You must mention a user!`);
    let reason = args.join(" ").slice(22);
    if(!reason) return message.channel.send(`${message.author}, You must provide a reason!`)
    let reportEmbed = new Discord.RichEmbed()
    .setTitle("New Report")
    .setColor("#000080")
    .addField("Reported User", rUser)
    .addField("Reported By", message.author)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", reason);

    let reportchannel = message.guild.channels.find(`name`, "spam");
    message.delete().catch(O_o=>{});
    reportchannel.send(reportEmbed);

    return;
}

module.exports.help = {
    name: "report"
}
