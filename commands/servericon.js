const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let senter = args.join(" ")
  if(!senter) return message.channel.send(message.guild.iconURL)
  try {
  let invite = await client.fetchInvite(senter)
}
catch(err) {
  return message.channel.send(`${message.author}, You must provide a valid and unexpired invite!`)
}
let invitee = await client.fetchInvite(senter)

  message.channel.send(`https://cdn.discordapp.com/icons/${invitee.guild.id}/${invitee.guild.icon}.png`);
}
module.exports.help = {
      name: "servericon"
  }
