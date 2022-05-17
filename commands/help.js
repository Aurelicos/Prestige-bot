module.exports = {
    name: 'help',
    description: "display help",
    execute(message, args, prefix) {
        const command = args.shift();
        const Discord = require('discord.js');
        if (command === undefined) {
            const embed = new Discord.MessageEmbed()
                .setAuthor("Help")
                .setColor("#32CD32");
            embed.setDescription(`
Hi I am Prestige Bot! 

I work with the prefix  \`$\`. 
For now, I can do the following commands:

\`${prefix}help\` - List of all commands
\`${prefix}time\` - Current date and time
\`${prefix}trnkadrip\` - Plays trnkadrip
\`${prefix}ytplay\` - Play songs from youtube
\`${prefix}secret\` - Playing a very special song
\`${prefix}clear\` - Delete messages
\`${prefix}kick\` - Kicks mentioned member of server
\`${prefix}ban\` - Ban mentioned member of server
\`${prefix}suplovani\` - Shows suplovani of SSPŠ
\`${prefix}lsroles\` - Shows roles of mentioned  user
\`${prefix}chprefix\` - Use this command to change prefix

***Categories:***

***\`anime\`*** - Category which contains anime commands


To display help for category use \`${prefix}help\` ***\`category\`***

To display help for commands use: \`${prefix}help\` ***\`<command>\`***`
            );
            return message.channel.send(embed);
        }
        else if (command === 'ytplay') {
            const embed = new Discord.MessageEmbed()
                .setAuthor("ytplay help")
                .setColor("#32CD32");
            embed.setDescription(`
Plays music from youtube

Command: \`${prefix}ytplay\`
Syntax: \`${prefix}ytplay\` ***\`<option>\`***
Options: 
    *** stop*** - stops the currently playing song
    *** skip*** - plays the next song in the turn

Use the following syntax to play songs from youtube:
\`${prefix}ytplay https://www.youtube.com/watch?<id of video>\`
`
            );
            return message.channel.send(embed);
        }
        else if (command === 'anime') {
            const command = args.shift();
            if (command === undefined) {
                const embed = new Discord.MessageEmbed()
                    .setAuthor("Anime")
                    .setColor("#32CD32");
                embed.setDescription(`
Anime commands

\`${prefix}neko\` - Sends neko images
\`${prefix}nekogif\` - Sends neko gifs
\`${prefix}hug\` - Send some hug gif
\`${prefix}kiss\` - Send some kiss gif
\`${prefix}foxgirl\` - Sends some foxgirl images
\`${prefix}avatar\` - Sends anime images for avatar
\`${prefix}pat\` - Sends pat images
\`${prefix}tickle\` - Sends tickle images
\`${prefix}slap\` - Sends slap gifs
\`${prefix}feed\` - Sends feed gifs
\`${prefix}cuddle\` - Sends cuddle 
\`${prefix}waifu\` - Sends waifu images


To see nsfw commands use: \`${prefix}help anime\`***\`nsfw\`*** 

To send 5 pictures use: ***\`${prefix}<anime command>\`*** \`imagebomb\`
`
                );
                return message.channel.send(embed);
            }
            if (command === 'nsfw') {
                const embed = new Discord.MessageEmbed()
                    .setAuthor("Anime Nsfw")
                    .setColor("#32CD32");
                embed.setDescription(`
Anime nsfw commands can be posted only in nsfw channels!
you also need the role ***18+***!

***Warning***, these images are not suitable for children and adolescents, so we do not recommend using them if you are under ***18 years old***.

\`${prefix}hentai\` - Sends hentai images/gifs
\`${prefix}boobs\` - Sends boobs images/gifs
\`${prefix}lesbian\` - Sends lesbian images/gifs


To send 5 pictures use: ***\`${prefix}<anime nsfw command>\`*** \`imagebomb\`
`
                );
                return message.channel.send(embed);
            } else {
                const embed = new Discord.MessageEmbed()
                    .setAuthor("Error")
                    .setColor("#ff0000");
                embed.setDescription(`
The command: \`${command}\` is not recognised. 

Try \`${prefix}help anime\` to display help of anime options`
                );

                return message.channel.send(embed);
            }
        }
        else {
            message.channel.send(`Sorry, but for option \`${command}\` I don't have help.`);
        }
    }
}