const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
 name: "wallpaper",
 aliases: [],
 description: "Display a random wallpaper image/gif",
 category: "Fun",
 usage: "wallpaper",
 run: async (client, message, args) => {
  (async () => {
   try {
    const response = await fetch("https://nekos.life/api/v2/img/wallpaper");
    const body = await response.json();
    const embed = new Discord.MessageEmbed() // Prettier()
     .setTitle(
      "😊 Wallpaper,
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
    message.channel.send(embed);
   } catch (err) {
    message.channel.send({
     embed: {
      color: 16734039,
      description: "Sorry something went wrong, Please try again later.",
     },
    });
   }
  })();
 },
};
