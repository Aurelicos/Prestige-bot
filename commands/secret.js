module.exports = {
    name: 'secret',
    description: "command for playing secret song",
    execute(message, args) {
        if (!message.member.voice.channel) return message.channel.send("You must be in a voice channel.");
        const command = args.shift()
        if (command === undefined) {
            if (message.guild.me.voice.channel) return message.channel.send("I'm already in voice channel.");
            message.member.voice.channel.join().then(VoiceConnection => {
                VoiceConnection.play("./songs/NeverGonnaGiveYouUp.mp3").on("finish", () => VoiceConnection.disconnect());
                message.channel.send("Playing...");
            }).catch(e => console.log(e))
        }
        else if (command === 'stop') {
            message.member.voice.channel.join().then(VoiceConnection => {
                VoiceConnection.disconnect();
                message.channel.send("Disconnecting...")
            }).catch(e => console.log(e))
        }
        else {
            message.channel.send(`\`${command}\` is invalid option\nSyntax: \`$trnkadrip <option>\`\n\nFor more options use \`$help trnkadrip\``)
        }
    }
}