module.exports = {
    name: 'avatar',
    description: "command for sending neko avatars",
    execute(message, args) {
        const nekoclient = require('nekos.life');
        const neko = new nekoclient();
        const command = args.shift();
        if (!message.guild) return;
        if (command === undefined) {
            async function avatar() {
                const GIF = await neko.avatar();
                message.channel.send(GIF.url);
            }
            avatar();
        }
        else if (command === "imagebomb") {
            async function avatar() {
                const GIF = await neko.avatar();
                message.channel.send(GIF.url);
            }
            for (let i = 0; i <5; i++) {
                avatar();
            }
        }
        else {
            message.channel.send("Invalid option! Try \`$help avatar\`")
        }
    }
}