const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let senter = args.join(" ")
  let invite = await client.fetchInvite(senter)
  if(!invite) return message.channel.send("Please provide an invite")
  let tbh = invite.guild.id
  if(!tbh) return message.channel.send("Please provide a valid invite")

  let invitee = new Discord.RichEmbed()
  .setTitle(invite.guild.name)
  .addField("Online Count", invite.presenceCount)
  .addField("Member Count", invite.memberCount)
  .addField("Inviter", invite.inviter)
  .setThumbnail(`https://cdn.discordapp.com/icons/${invite.guild.id}/${invite.guild.icon}.png`)

  message.channel.send(invitee);
}
module.exports.help = {
      name: "inviteinfo"

  }
