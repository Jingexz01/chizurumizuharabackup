const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
 name: "",
 aliases: [],
 description: "",
 category: "",
 usage: " <user>",
 run: async (client, message, args) => {
  try {
   const member = (await await message.mentions.members.first()) || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find((r) => r.user.username.toLowerCase().includes() === args.join(" ").toLocaleLowerCase()) || message.guild.members.cache.find((r) => r.displayName.toLowerCase().includes() === args.join(" ").toLocaleLowerCase());
   if (!member) {
    return message.lineReply({
     embed: {
      color: 16734039,
      description: "Mention a valid member of this server!",
     },
    });
   }
   if (message.author === member || message.member == member) {
    return await message.lineReply({
     embed: {
      color: 16734039,
      description: "You cant tickle yourself!",
     },
    });
   }
   (async () => {
    const response = await fetch("https://nekos.life/api/v2/img/tickle");
    const body = await response.json();
    const embed = await new Discord.MessageEmbed() // Prettier()
     .setColor("RANDOM")
     .setTitle(user.username + " just got tickled by " + message.author.username)
     .setFooter(
      ":3 | Requested by " + `${message.author.username}`,
      message.author.displayAvatarURL({
       dynamic: true,
       format: "png",
       size: 2048,
      })
     )
     .setImage(body.url);
    message.lineReply(embed);
   })();
  } catch (err) {
   message.lineReply({
    embed: {
     color: 16734039,
     description: "Sorry something went wrong, Please try again later.",
    },
   });
  }
 },
};
