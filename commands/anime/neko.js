module.exports = {
    name: 'neko',
    description: "command for sending neko images",
    execute(message, args) {
        const nekoclient = require('nekos.life');
        const neko = new nekoclient();
        const command = args.shift();
        if (!message.guild) return;
        if (command === undefined) {
            async function nekos() {
                const GIF = await neko.neko();
                message.channel.send(GIF.url);
            }
            nekos();
        }
        else if (command === "imagebomb") {
            async function nekos() {
                const GIF = await neko.neko();
                message.channel.send(GIF.url);
            }
            for (let i = 0; i <5; i++) {
                nekos();
            }
        }
        else {
            message.channel.send("Invalid option! Try \`$help neko\`")
        }
    }
}
