const Discord = require("discord.js");

module.exports = {
 name: "botstat",
 aliases: ["botstats", "botstatistic"],
 description: "Display a bot stats",
 category: "General",
 usage: "stats",
 run: async (client, message, args) => {
  try {
const embed = new Discord.MessageEmbed()
.setTitle("Bot Developer Info")
.setDescription("Bot Stats")
.setTimestamp()
.setFooter("Chizuru Mizuhara")
.setColor("GREEN")
.addField("Bot Developer", "\`\`\`Jingexz01#2841\`\`\`")
.addField("Official Bot Release Date", "\`\`\`November 11, 2020\`\`\`")
.addField("Bot Dashboard", `[Click Here](https://chizuru-mizuhara-database.herokuapp.com/dashboard)`)
.addField("Bot Backup Dashboard\`\`\`(This will only work when bot is under backup launch)\`\`\`", `[Click Here](https://chizuru-mizuhara-databasebu.herokuapp.com)`);
message.lineReply(embed);
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
