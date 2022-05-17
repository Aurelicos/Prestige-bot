module.exports = {
    name: 'hug',
    description: "command for sending hug gifs",
    execute(message, args) {
        const nekoclient = require('nekos.life');
        const neko = new nekoclient();
        const command = args.shift();
        if (!message.guild) return;
        if (command === undefined) {
            async function hug() {
                const GIF = await neko.hug();
                message.channel.send(GIF.url);
            }
            hug();
        }
        else if (command === "imagebomb") {
            async function hug() {
                const GIF = await neko.hug();
                message.channel.send(GIF.url);
            }
            for (let i = 0; i <5; i++) {
                hug();
            }
        }
        else {
            message.channel.send("Invalid option! Try \`$help hug\`")
        }
    }
}