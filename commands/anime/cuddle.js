module.exports = {
    name: 'cuddle',
    description: "command for sending cuddle gifs",
    execute(message, args) {
        const command = args.shift();
        if (command === undefined) {
            const nekoclient = require('nekos.life');
            const neko = new nekoclient();
            async function cuddle() {
                const GIF = await neko.cuddle();
                message.channel.send(GIF.url);
            }
            cuddle();
        }
        else if (command === 'imagebomb') {
            const nekoclient = require('nekos.life');
            const neko = new nekoclient();
            async function cuddle() {
                const GIF = await neko.cuddle();
                message.channel.send(GIF.url);
            }
            for (let i = 0; i < 5; i++) {
                cuddle();
            }
        }
        else {
            message.channel.send("Invalid option! Try \`$help cuddle\`")
        }
    }
}