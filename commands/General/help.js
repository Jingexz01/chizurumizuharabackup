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
 usage: "help [command]",
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
     .addFields(
         { name: 'Bot Commands', value: 'Overall Bot Commands | 7 Categories' },
         { name: ':tools:Moderation Commands\(15\)', value: '\`\`\`Ban\, Check-leave\, Check-log\, Check-welcome\, del-leave\, del-log\, del-welcome\, id\, kick\, prune\, say\, set-leave\, set-log\, set-welcome\, unban\`\`\`', inline: true },
         { name: '💬General\(11\)', value: '\```Dashboard\, dependencies\, eval\, help\, info\, invite\, ping\, servers\, shell\, suggest\, uptime\`\`\`', inline: true },
         { name: ':toolbox:Utility\(16\)', value: '\`\`\`Avatar\, calculator\, discordjs\(djs\), emojify\, gdelete\, gend\, gfetch\, github\, giveaway\, greroll\, guild-avatar\, members\, serverinfo\, snipe\, userinfo \, weather\`\`\`', inline: true },
         { name: ':frame_with_picture:Image\(38\)', value: '\`\`\`3000years\, affect\, approved\, beautiful\, blur\, cat\, changemymind\, circle\, contrast\, distort\, dog\, facepalm\, fire\, frame\, gay\, glass\, glitch\, heaven\, hitler\, invert\, jail\, jokeoverhead\, magik\, moustache\, ohno\, pixelize\, posterize\, reject\, rip\, sad\, scary\, sepia\, shit\, triggered\, trash\, utatoo\, wanted\, wasted\`\`\`', inline: true }
               )
      .addField(":smirk:NSFW\(18\)", "\`\`\`Anal\, ass\, blowjob\, boobs\, classic\, cum\, ero\, erofeet\, eroneko\, eroyuri\, feet\, femdom\, foxgirl\, furry\, futa\, hentai\, pussy\, spank\`\`\`")
      .addField(":tada:Fun\(30\)", "\`\`\`4chan\, advice\, anime\, ascii\, baka\, beep\, boop\, cat-emoji\, chat\, cuddle\, dice\, eightball\, flatearth\, flipcoin\, fliptext\, hug\, iq\, joke\, kill\, kiss\, meme\, pat\, pepe\, poke\, rate\, ship\, slap\, sneeze\, tickle\, wallpaper\`\`\`")
      .addField(":notes:Music\(12\)", "\`\`\`filter\, lyrics\, nowplaying\, pause\, play\, queue\, resume\, search\, shuffle\, skip\, stop\, volume\`\`\`")
      .addField(":question: Help tips", `If you need help on command information use ${prefix}chelp <command>`)
      .setTimestamp()
      .setFooter(
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
      .setDescription("Category: `" + cmd.category + "`\n Description: `" + cmd.description + "`\n Usage: `" + prefix + " " + cmd.usage + "`\n Aliases: `" + alliaseslist + "`")
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
