module.exports = {
    name: 'slap',
    description: "command for sending slap gifs",
    execute(message, args) {
        const command = args.shift();
        if (command === undefined) {
            const nekoclient = require('nekos.life');
            const neko = new nekoclient();
            async function slap() {
                const GIF = await neko.slap();
                message.channel.send(GIF.url);
            }
            slap();
        }
        else if (command === 'imagebomb') {
            const nekoclient = require('nekos.life');
            const neko = new nekoclient();
            async function slap() {
                const GIF = await neko.slap();
                message.channel.send(GIF.url);
            }
            for (let i = 0; i < 5; i++) {
                slap();
            }
        }
        else {
            message.channel.send("Invalid option! Try \`$help slap\`")
        }
    }
}