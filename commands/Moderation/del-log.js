const Discord = require("discord.js");
const sql = require("../../utilities/database");
const config = require("../../config");
const prefix = process.env.PREFIX;

module.exports = {
 name: "del-log",
 aliases: ["log-gelete", "l-remove", "delete-log-channel", "rem-log"],
 description: "Delete log channel for the guild",
 category: "Moderation",
 usage: "del-log",
 run: async (client, message, args) => {
  try {
   if (!message.member.hasPermission("MANAGE_CHANNELS")) {
    return message.lineReply({
     embed: {
      color: 16734039,
      description: "❌ | You don't have premissions to delete logging channel! You need `MANAGE_CHANNELS` premission!",
     },
    });
   }
   const sqlquery = "SELECT channelid AS res FROM logs WHERE guildid = " + message.guild.id;
   sql.query(sqlquery, function (error, results, fields) {
    if (error) return console.log(error);
    if (results[0]) {
     const deletequery = "DELETE FROM logs WHERE guildid = " + message.guild.id;
     sql.query(deletequery, function (error, results, fields) {
      if (error) return console.log(error);
      message.lineReply({
       embed: {
        color: 4779354,
        description: `✨ | You successfully deleted log channel. You can always set new channel using \`${prefix} set-log <channel>\`!`,
       },
      });
     });
    } else {
     message.lineReply({
      embed: {
       color: 16734039,
       description: `❌ | You haven't configured logs on this server yet so you can't delete the channel, run \`${prefix} set-log <channel>\` to configure logging!`,
      },
     });
    }
   });
  } catch (err) {
   message.lineReply({
    embed: {
     color: 16734039,
     description: "Something went wrong... :cry:",
    },
   });
  }
 },
};
