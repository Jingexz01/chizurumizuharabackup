const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
 name: "pat",
 aliases: [],
 description: "Give a pat to the mentioned user",
 category: "Fun",
 usage: "pat <user>",
 run: async (client, message, args) => {
  (async () => {
   try {
    const user = message.mentions.users.first();
    if (!user) {
     return message.lineReply({
      embed: {
       color: 16734039,
       description: "You must mention someone to pat!",
      },
     });
    }
    if (user == message.author) {
     return message.lineReply({
      embed: {
       color: 5294200,
       description: "😁 | You can't pat yourself but... I'll pat you instead. UwU!",
      },
     });
    }
    if (user == client.user) {
     return message.lineReply({
      embed: {
       color: 5294200,
       description: "😁 | Oh, you tried to pat me but u can't... Im not real... But I can pat you :3.",
      },
     });
    }
    const response = await fetch("https://nekos.life/api/v2/img/pat");
    const body = await response.json();
    const embed = new Discord.MessageEmbed() // Prettier()
     .setTitle(
      user.username + " just got pat from " + message.author.username,
      message.guild.iconURL({
       dynamic: true,
       format: "png",
      })
     )
     .setImage(body.url)
     .setURL(body.url)
     .setColor("RANDOM")
     .setDescription(user.toString() + " just got a pat from " + message.author.toString())
     .setFooter(
      "Requested by " + `${message.author.username}` + " • (Thanks for the pat! UwU)",
      message.author.displayAvatarURL({
       dynamic: true,
       format: "png",
       size: 2048,
      })
     )
     .setTimestamp()
     .setURL(body.url);
    message.lineReply(embed);
   } catch (err) {
    message.lineReply({
     embed: {
      color: 16734039,
      description: "Sorry something went wrong, Please try again later",
     },
    });
   }
  })();
 },
};
