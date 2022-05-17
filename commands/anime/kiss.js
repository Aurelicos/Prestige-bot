module.exports = {
    name: 'kiss',
    description: "command for sending kiss gifs",
    execute(message, args) {
        const command = args.shift();
        if (command === undefined) {
            const nekoclient = require('nekos.life');
            const neko = new nekoclient();
            async function kiss() {
                const GIF = await neko.kiss();
                message.channel.send(GIF.url);
            }
            kiss();
        }
        else if (command === 'imagebomb') {
            const nekoclient = require('nekos.life');
            const neko = new nekoclient();
            async function kiss() {
                const GIF = await neko.kiss();
                message.channel.send(GIF.url);
            }
            for (let i = 0; i < 5; i++) {
                kiss();
            }
        }
        else {
            message.channel.send("Invalid option! Try \`$help kiss\`")
        }
    }
}