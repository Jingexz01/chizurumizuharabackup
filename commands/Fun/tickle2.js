const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
 name: "tickle",
 aliases: [],
 description: "Give a tickle to the mentioned user",
 category: "Fun",
 usage: "tickle <user>",
 run: async (client, message, args) => {
  (async () => {
   try {
    const user = message.mentions.users.first();
    if (!user) {
     return message.lineReply({
      embed: {
       color: 16734039,
       description: "You must mention someone to tickle!",
      },
     });
    }
    if (user == message.author) {
     return message.lineReply({
      embed: {
       color: 5294200,
       description: ":blush: | You can't tickle yourself but... Ok, get the tickle from me :3!",
      },
     });
    }
    if (user == client.user) {
     return message.lineReply({
      embed: {
       color: 5294200,
       description: "😁 | Oh, you tried to tickle me but u can't... Im not real... But I can tickle you so that you'll snap back to reality -,-",
      },
     });
    }
    const response = await fetch("https://nekos.life/api/v2/img/tickle");
    const body = await response.json();
    const embed = new Discord.MessageEmbed() // Prettier()
     .setTitle(
      user.username + " Just got tickled by " + message.author.username,
      message.guild.iconURL({
       dynamic: true,
       format: "png",
      })
     )
     .setImage(body.url)
     .setURL(body.url)
     .setColor("RANDOM")
     .setDescription(user.toString() + " got a tickled from " + message.author.toString())
     .setFooter(
      "Requested by " + `${message.author.username}` + " • (this is so cute :3)",
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
