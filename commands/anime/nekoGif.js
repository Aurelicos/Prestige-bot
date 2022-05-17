module.exports = {
    name: 'nekogif',
    description: "command for sending neko gifs",
    execute(message, args) {
        const nekoclient = require('nekos.life');
        const neko = new nekoclient();
        const command = args.shift();
        if (!message.guild) return;
        if (command === undefined) {
            async function nekoGif() {
                const GIF = await neko.nekoGif();
                message.channel.send(GIF.url);
            }
            nekoGif();
        }
        else if (command === "imagebomb") {
            async function nekoGif() {
                const GIF = await neko.nekoGif();
                message.channel.send(GIF.url);
            }
            for (let i = 0; i <5; i++) {
                nekoGif();
            }
        }
        else {
            message.channel.send("Invalid option! Try \`$help nekoGif\`")
        }
    }
}