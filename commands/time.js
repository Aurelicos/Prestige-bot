module.exports = {
    name: 'time',
    description: "command for display time",
    execute(message, args) {
        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()
            .setAuthor("Time")
            .setColor("#32CD32");
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let time = date.toLocaleTimeString();
        embed.setDescription(`
            Date: \`${day}.${month}.${year}\`

            Time: \`${time}\``
        );

        return message.channel.send(embed);
    }
}