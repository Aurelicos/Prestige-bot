module.exports = {
    name: 'pat',
    description: "command for sending pot gifs",
    execute(message, args) {
        const nekoclient = require('nekos.life');
        const neko = new nekoclient();
        const command = args.shift();
        if (!message.guild) return;
        if (command === undefined) {
            async function pat() {
                const GIF = await neko.pat();
                message.channel.send(GIF.url);
            }
            pat();
        }
        else if (command === "imagebomb") {
            async function pat() {
                const GIF = await neko.pat();
                message.channel.send(GIF.url);
            }
            for (let i = 0; i <5; i++) {
                pat();
            }
        }
        else {
            message.channel.send("Invalid option! Try \`$help pat\`")
        }
    }
}