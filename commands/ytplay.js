module.exports = {
    name: 'ytplay',
    description: "command for playing songs from youtube",
    execute(message, args) {
        const Discord = require('discord.js');
        const client = new Discord.Client();
        const command = args.shift();
        const serverQueue = queue.get(message.guild.id);

        if (command === undefined) {
            message.channel.send(`invalid option\nSyntax: \`$ytplay <command/link>\`\n\nFor more options use \`$help ytplay\``)
            return;
        }
        if (command.includes("https://www.youtube.com/watch?")) {
            exec(message, serverQueue);
        }
        else if (command === 'stop') {
            message.channel.send("I'm stopping the song...")
            stop(message, serverQueue);
            return;
        }
        else if (command === 'skip') {
            message.channel.send("Skipping...")
            skip(message, serverQueue);
            return;
        }
        else {
            message.channel.send(`\`${command}\` is invalid option\nSyntax: \`$ytplay <command/link>\`\n\nFor more options use \`$help ytplay\``)
        }
    }
}
const ytdl = require("ytdl-core");
const queue = new Map();
async function exec(message, serverQueue) {
    const args = message.content.split(" ");
    if (!args[1]) return message.channel.send("Please enter a valid youtube link!");
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel)
        return message.channel.send(
            "You need to be in a voice channel to play music!"
        );
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
        return message.channel.send(
            "I need the permissions to join and speak in your voice channel!"
        );
    }

    const songInfo = await ytdl.getInfo(args[1]);
    const song = {
        title: songInfo.videoDetails.title,
        url: songInfo.videoDetails.video_url,
    };
    if (!serverQueue) {
        const queueContruct = {
            textChannel: message.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 5,
            playing: true
        };

        queue.set(message.guild.id, queueContruct);

        queueContruct.songs.push(song);

        try {
            var connection = await voiceChannel.join();
            queueContruct.connection = connection;
            play(message.guild, queueContruct.songs[0]);
        } catch (err) {
            console.log(err);
            queue.delete(message.guild.id);
            return message.channel.send(err);
        }
    } else {
        serverQueue.songs.push(song);
        return message.channel.send(`***${song.title}*** has been added to the queue!`);
    }
}

function play(guild, song) {
    const serverQueue = queue.get(guild.id);
    if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }

    const dispatcher = serverQueue.connection
        .play(ytdl(song.url))
        .on("finish", () => {
            serverQueue.songs.shift();
            play(guild, serverQueue.songs[0]);
        })
        .on("error", error => console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
    serverQueue.textChannel.send(`Start playing: **${song.title}**`);
}

function stop(message, serverQueue) {
    if (!message.member.voice.channel)
        return message.channel.send(
            "You have to be in a voice channel to stop the music!"
        );

    if (!serverQueue)
        return message.channel.send("There is no song that I could stop!");

    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
}

function skip(message, serverQueue) {
    if (!message.member.voice.channel)
        return message.channel.send(
            "You have to be in a voice channel to stop the music!"
        );
    if (!serverQueue)
        return message.channel.send("There is no song that I could skip!");
    serverQueue.connection.dispatcher.end();
}