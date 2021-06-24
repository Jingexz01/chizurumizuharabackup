const Discord = require("discord.js");
const { readdirSync } = require("fs");
const config = require("../../config");
const prefix = process.env.PREFIX;

module.exports = {
 name: "help",
 aliases: ["h", "commands"],
 category: "General",
 description: "Displays all the commands available",
 timeout: "10000",
 usage: "help2 [command]",
 run: async (client, message, args) => {
  try {
   if (args[0]) {
    return getCMD(client, message, args[0]);
   }
   if (!args[0]) {
    return getAll(client, message);
   }
   function getAll(client, message) {
    const commands = readdirSync("./commands/");
    const embed = new Discord.MessageEmbed() // Prettier()
     .setAuthor("Help", message.guild.iconURL())
     .setColor("RANDOM")
     .setTimestamp()
     .addField({ name: 'Bot Commands', value: 'Overall Bot Commands' })
     .addBlankField()
     .addField({ name: ':tools:Moderation Commands', value: '\`Ban\, Check-leave\, Check-log\, Check-welcome\, del-leave\, del-log\, del-welcome\, id\, kick\, prune\, say\, set-leave\, set-log\, set-welcome\, unban', inline: true })
     .addField({ name: '💬General', value: '\`Dashboard\, dependecies\, eval\, help\, info\, invite\, ping\, servers\, shell\, suggest\, uptime', inline: true })
     .addField({ name: ':toolbox:Utility', value: '\`Avatar\, calculator\, discordjs\(djs\)/, emojify\, gdelete\, gend\, gfetch\, github\, giveaway\, greroll\, guild-avatar\, members\, serverinfo\, snipe\, userinfo \, weather', inline: true })
     .addField({ name: ':frame_with_picture:Image', value: '\`3000years\, affect\, approved\, beautiful\, blur\, cat\, changemymind\, circle\, contrast\, distort\, dog\, facepalm\, fire\, frame\, gay\, glass\, glitch\, heaven\, hitler\, invert\, jail\, jokeoverhead\, magik\, moustache\, ohno\, pixelize\, posterize\, reject\, rip\, sad\, scary\, sepia\, shit\, triggered\, trash\, utatoo\, wanted\, wasted', inline: true });
    } 
    embed.addField(":grey_question: Command Information", `${prefix} help <command>`);
    if (config.news && config.newstitle) {
     embed.addField(`${config.newstitle}`, `${config.news}`);
    }
    embed.setFooter(
     "Requested by " + `${message.author.username}` + " | " + `${client.commands.size}` + " Commands",
     message.author.displayAvatarURL({
      dynamic: true,
      format: "png",
      size: 2048,
     })
    );
    return message.lineReply(embed);
   }

   function getCMD(client, message, input) {
    const embed = new Discord.MessageEmbed(); // Prettier();
    const cmd = client.commands.get(input.toLowerCase()) || client.commands.get(client.aliases.get(input.toLowerCase()));
    const info = "No information found for command `" + input.toLowerCase() + "`!";
    if (!cmd) {
     try {
      return message.lineReply({
       embed: {
        color: 16734039,
        description: info,
       },
      });
     } catch (err) {
      message.lineReply({
       embed: {
        color: 16734039,
        description: "No information found",
       },
      });
     }
    } else {
     function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
     }
     alliaseslist = cmd.aliases.toString().join(", ") || "None";
     const hembed = new Discord.MessageEmbed() // Prettier()
      .setTitle(`:grey_question: Help - \`${cmd.name}\``, message.guild.iconURL())
      .setColor("RANDOM")
      .setTimestamp()
      .addField("Category", `\`${cmd.category}\``)
      .addField("Usage", `\`${prefix} ${cmd.usage}\``)
      .addField("Description", `\`${cmd.description}\``)
      .addField("Aliases", `\`${alliaseslist}\``)
      // .setDescription("Category: `" + cmd.category + "`\n Description: `" + cmd.description + "`\n Usage: `" + prefix + " " + cmd.usage + "`\n Aliases: `" + alliaseslist + "`")
      .setFooter(
       "Syntax: <> = required, [] = optional | Requested by " + `${message.author.username}`,
       message.author.displayAvatarURL({
        dynamic: true,
        format: "png",
        size: 2048,
       })
      );
     message.lineReply(hembed);
    }
   }
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
