const Discord = require("discord.js");
const superagent = require("snekfetch");

        exports.run = async (client, message, args, level) => {

            const user = message.mentions.users.first();
            if(!user) return message.channel.send({embed: {
                color: 16734039,
                title: "You must mention someone to slap!"
            }}));

            superagent.get('https://nekos.life/api/v2/img/slap')
                .end((err, response) => {
              const lewdembed = new Discord.RichEmbed()
              .setTitle(user.username + " just got slapped by " + message.author.username)
              .setImage(response.body.url)
              .setColor(`RANDOM`)
              .setDescription((user.toString() + " got slapped by " + message.author.toString()))
              .setFooter(`That must hurt ._.`)
              .setURL(response.body.url);
          message.channel.send(lewdembed);
            }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                title: "Something went wrong... :cry:"
            }}));

        }

module.exports.help = {
    name: "slap",
    description: "Slap a user",
    usage: "slap <user>",
    type: "Fun" 
}