const Discord = require("discord.js");

module.exports = {
 name: "say",
 aliases: [],
 description: "Shows a random image (and text) from the random board from 4chan",
 category: "Moderation",
 usage: "say <channel> <message>",
 run: async (client, message, args) => {
  if (message.member.hasPermission("MANAGE_MESSAGES")) {
   message.delete();
   const taggedChannel = await message.mentions.channels.first();
   if (taggedChannel) {
    await taggedChannel.send(args.join(" ").replace(taggedChannel, ""));
   } else {
    const saymessage = await args.join(" ");
    if (saymessage.length >= 1) {
     await message.channel.send(saymessage + "\n\n~Message sent by <@" + message.author + ">");
    } else {
     await message.lineReply({
      embed: {
       color: 16734039,
       description: "✨ | You need to enter a message!",
      },
     });
    }
   }
  } else {
   message.lineReply({
    embed: {
     color: 16734039,
     description: "❌ | You don't have premission to send this message by me!",
    },
   });
  }
 },
};
