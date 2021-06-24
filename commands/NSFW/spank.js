const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
 name: "cuddle",
 aliases: [],
 description: "Spank the mentioned user",
 category: "Fun",
 usage: "cuddle <user>",
 run: async (client, message, args) => {
  (async () => {
   try {
    const user = message.mentions.users.first();
    if (!user) {
     return message.lineReply({
      embed: {
       color: 16734039,
       description: "❌ | You must mention a user to spank!",
      },
     });
    }
    if (user == message.author) {
     return message.lineReply({
      embed: {
       color: 5294200,
       description: "😁 | You can't spank yourself ;-;",
      },
     });
    }
    if (user == client.user) {
     return message.lineReply({
      embed: {
       color: 5294200,
       description: "😁 | Oh, you tried to spank me but u can't... Im not real... Snap back to reality -.-",
      },
     });
    }
    const response = await fetch("https://nekos.life/api/v2/img/spank");
    const body = await response.json();
    const embed = new Discord.MessageEmbed() // Prettier()
     .setTitle(
      user.username + " Just got spanked by" + message.author.username,
      message.guild.iconURL({
       dynamic: true,
       format: "png",
      })
     )
     .setImage(body.url)
     .setColor("RANDOM")
     .setFooter(
      "Requested by " + `${message.author.username}`,
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
      description: "Sorry something went wrong, Please try again later.",
     },
    });
   }
  })();
 },
};
