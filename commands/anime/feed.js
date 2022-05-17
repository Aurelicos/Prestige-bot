module.exports = {
    name: 'feed',
    description: "command for sending feed gifs",
    execute(message, args) {
        const command = args.shift();
        if (command === undefined) {
            const nekoclient = require('nekos.life');
            const neko = new nekoclient();
            async function feed() {
                const GIF = await neko.feed();
                message.channel.send(GIF.url);
            }
            feed();
        }
        else if (command === 'imagebomb') {
            const nekoclient = require('nekos.life');
            const neko = new nekoclient();
            async function feed() {
                const GIF = await neko.feed();
                message.channel.send(GIF.url);
            }
            for (let i = 0; i < 5; i++) {
                feed();
            }
        }
        else {
            message.channel.send("Invalid option! Try \`$help feed\`")
        }
    }
}