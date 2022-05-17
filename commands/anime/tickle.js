module.exports = {
    name: 'tickle',
    description: "command for sending tickle gifs",
    execute(message, args) {
        const nekoclient = require('nekos.life');
        const neko = new nekoclient();
        const command = args.shift();
        if (!message.guild) return;
        if (command === undefined) {
            async function tickle() {
                const GIF = await neko.tickle();
                message.channel.send(GIF.url);
            }
            tickle();
        }
        else if (command === "imagebomb") {
            async function tickle() {
                const GIF = await neko.tickle();
                message.channel.send(GIF.url);
            }
            for (let i = 0; i <5; i++) {
                tickle();
            }
        }
        else {
            message.channel.send("Invalid option! Try \`$help tickle\`")
        }
    }
}