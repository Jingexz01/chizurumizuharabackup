const Discord = require("discord.js");
const config = require("../../config");
const moment = require("moment");
const osutils = require("os-utils");
require("moment-duration-format");

module.exports = {
 name: "info",
 aliases: ["botinfo", "clientinfo", "stats"],
 description: "Shows informations for developers",
 category: "General",
 usage: "info",
 run: async (client, message, args) => {
  try {
   if (process.env.DOMAIN) {
    webpanel = `[Dashboard](${process.env.DOMAIN}) |`;
   } else {
    webpanel = " ";
   }
   const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
   const embed = new Discord.MessageEmbed() // Prettier()
    .setTitle(
     `Bot Status - Bot Developer Status`,
     message.guild.iconURL({
      dynamic: true,
      format: "png",
     })
    )
    .setColor("RANDOM")
    .setDescription(`My global prefix is: \`${process.env.PREFIX}\`\n`)
    .addField("<a:verified:852765188067164162> Developer", `${config.author} \[[Website](${config.authorwebsite})\]`)
    .setThumbnail(
     client.user.displayAvatarURL({
      dynamic: true,
      format: "png",
      size: 2048,
     })
    )
    .addField("Guild Count", `${client.guilds.cache.size}`, true)
    .addField("User Count", `${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}`, true)
    .addField("Channel Count", `${client.channels.cache.size}`, true)
    .addField("⏳ Uptime", `${duration}`, true)
    .addField("🏓 Ping", Math.round(client.ws.ping) + "ms", true)
    .addField("💻Platform", osutils.platform(), true)
    .addField("<a:node:857196363196137472> Node", `${process.version}`, true)
    .addField("<a:cpubot:857197712763256832> CPU Cores", osutils.cpuCount() + " Cores", true)
    .addField("<a:rambot:857197346214117416> Total Memory", osutils.totalmem().toString().split(".")[0] + "." + osutils.totalmem().toString().split(".")[1].split("")[0] + osutils.totalmem().toString().split(".")[1].split("")[1] + "MB", true)
    .addField("<a:rambot:857197346214117416> RAM Usage | Virtual Private Server (VPS) | 6 GB", `${(osutils.totalmem() - osutils.freemem()).toString().split(".")[0] + "." + (osutils.totalmem() - osutils.freemem()).toString().split(".")[1].split("")[0] + (osutils.totalmem() - osutils.freemem()).toString().split(".")[1].split("")[1]}/${osutils.totalmem().toString().split(".")[0] + "." + osutils.totalmem().toString().split(".")[1].split("")[0] + osutils.totalmem().toString().split(".")[1].split("")[1]}MB (${(100 - osutils.freememPercentage() * 100).toString().split(".")[0] + "." + (100 - osutils.freememPercentage() * 100).toString().split(".")[1].split("")[0] + (100 - osutils.freememPercentage() * 100).toString().split(".")[1].split("")[1]}%)`, true)
    .addField("<a:rambot:857197346214117416> RAM Usage (BOT) | 6 GB", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB/" + osutils.totalmem().toString().split(".")[0] + "." + osutils.totalmem().toString().split(".")[1].split("")[0] + osutils.totalmem().toString().split(".")[1].split("")[1] + "MB", true)
    .addField("Useful Links", `[Support server](${config.server}) | ${webpanel} [Invite me](https://discord.com/oauth2/authorize/?permissions=${config.premissions}&scope=bot&client_id=${client.user.id})`)
    .setFooter(
     "Requested by " + `${message.author.username}`,
     message.author.displayAvatarURL({
      dynamic: true,
      format: "png",
      size: 2048,
     })
    );
   message.lineReply(embed);
  } catch (err) {
   console.log(err);
   message.lineReply({
    embed: {
     color: 16734039,
     description: "Sorry something went wrong, Please try again later.",
    },
   });
  }
 },
};
