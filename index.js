const Discord = require('discord.js');
const client = new Discord.Client();
let prefix = '$';
const fs = require('fs');
const { token } = require('./config.json');
client.commands = new Discord.Collection();
const commandFile = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFile) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command)
}
client.commandsAnime = new Discord.Collection();
const commandFileAnime = fs.readdirSync('./commands/anime').filter(file => file.endsWith('.js'));
for (const file of commandFileAnime) {
    const commandAnime = require(`./commands/anime/${file}`);
    client.commandsAnime.set(commandAnime.name, commandAnime)
}

client.commandsAnimeHentai = new Discord.Collection();
const commandFileAnimeHentai = fs.readdirSync(`./commands/anime/hentai`).filter(file => file.endsWith('.js'));
for (const file of commandFileAnimeHentai) {
    const commandAnimeHentai = require(`./commands/anime/hentai/${file}`);
    client.commandsAnimeHentai.set(commandAnimeHentai.name, commandAnimeHentai)
}

client.once('ready', () => {
    console.info(`Logged in as ${client.user.tag}`);
    client.user.setActivity('Prestige!!!', { type: 'PLAYING' });
})
let numPing = 0;
client.on('message', message => {

    if (message.mentions.users.has(client.user.id) && !message.author.bot) {
        numPing++;
        if (numPing < 5) {
            message.reply(`:sleeping::sleeping::sleeping: uh don't ping me, I work with prefix: \`${prefix}\``)
        } else if (numPing >= 5 && numPing <= 10) {
            message.reply(`Bro I work with prefix \`${prefix}\`. Unbelievable, he's so cheeky that he's already pinged me ${numPing} times!`)
        } else if (numPing > 10 && numPing < 20) {
            message.channel.send(`Please use \`${prefix}kick\` ${message.author}`)
        } else {
            setTimeout(function () {
                numPing = 0;
            }, 30 * 1000);
        }
        return;
    }
    
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const args1 = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "chprefix") {
        if (message.member.roles.cache.find(r => r.name.toLowerCase() === "admin")) {
            if (args.length !== 1) return message.channel.send("Invalid prefix!");
            prefix = args1[1];
            message.channel.send(`Prefix successfully changed to \`${prefix}\``);
        } else {
            message.channel.send("You need ***\`admin\`*** role to change prefix!");
        }
    } else if (!client.commands.get(command) && !client.commandsAnime.get(command) && !client.commandsAnimeHentai.get(command)) {
        const embed = new Discord.MessageEmbed()
            .setAuthor("Error")
            .setColor("#ff0000");
        embed.setDescription(`
The command: \`${prefix}${command}\` is not recognised. 

The prefix for this server is: \`${prefix}\`
For a list of commands, use \`${prefix}help\``
        );
        return message.channel.send(embed);
    } else if (!client.commands.get(command)) {
        if (!client.commandsAnime.get(command)) {
            client.commandsAnimeHentai.get(command).execute(message, args)
        } else {
            client.commandsAnime.get(command).execute(message, args)
        }
    } else {
        client.commands.get(command).execute(message, args, prefix)
    }

})
client.login(token);
