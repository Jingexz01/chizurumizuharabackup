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
.addField("Bot Developer \| Bot Coder", "\`\`\`Jingexz01#2841\`\`\`")
.addField("Official Bot Release Date", "\`\`\`November 11, 2020\`\`\`")
.addField("Bot Dashboard", `[Click Here](https://chizuru-mizuhara-database.herokuapp.com/dashboard)`)
.addField("Bot Backup Dashboard\`\`\`(This will only work when bot is under backup launch or if you see the image below when opening the dashboard you should open either the main dashboard or the backup dashboard to see if what is working.)\`\`\`", `[Click Here](https://chizuru-mizuhara-databasebu.herokuapp.com)`)
.setImage('https://media.discordapp.net/attachments/709959466623434804/857804543822790666/Screenshot_2021-06-25-10-02-21-279_com.android.chrome.png');
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
