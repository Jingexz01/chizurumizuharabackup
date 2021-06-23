const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
 name: "wallpaper",
 aliases: [],
 description: "Sends a wallpaper",
 category: "Fun",
 usage: "wallpaper",
 run: async (client, message, args) => {
  (async () => {
   try {
    const response = await fetch("https://nekos.life/api/v2/img/wallpaper");
    const body = await response.json();
    const embed = new Discord.MessageEmbed() // Prettier()
     .setTitle("Here's your wallpaper.")
     .setImage(body.url)
     .setURL(body.url)
     .setColor("RANDOM")
     .setFooter(
      "Requested by " + `${message.author.username}` + " • (this is so cute ＼( ^o^ )／)",
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
