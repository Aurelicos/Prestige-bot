module.exports = {
    name: 'suplovani',
    description: "display suplovani of ssps",
    async execute(message, args) {
        const Discord = require('discord.js');
        const URL = 'https://ssps.cz';
        fetch(URL).then(res => res.text()).then(text => {
            let arr = text.split(/\r?\n/);
            const array = [];
            arr.forEach((line) => {
                if (line.includes("<strong>")) {
                    array.push("\n");
                    const replace = line.replace("<strong>", "")
                    const length = replace.length
                    const day = replace.substring(0, length - 9) + "\n"
                    array.push(`***${day}***`)
                }
                if (line.includes("<li>")) {
                    const subjects = line.substring(6, line.length - 5)
                    array.push(`\`${subjects}\``)
                }
            });
            const embed = new Discord.MessageEmbed()
                .setAuthor("Suplování")
                .setColor("#32CD32");
            embed.setDescription(array);
            if (array[0] === undefined) return message.channel.send("There is no Suplovani!");
            return message.channel.send(embed);

        }).catch(err => console.log(err));

    }
}