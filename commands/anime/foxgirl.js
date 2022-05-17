module.exports = {
    name: 'foxgirl',
    description: "command for sending foxgirl images",
    execute(message, args) {
        const nekoclient = require('nekos.life');
        const neko = new nekoclient();
        const command = args.shift();
        if (!message.guild) return;
        if (command === undefined) {
            async function foxGirl() {
                const GIF = await neko.foxGirl();
                message.channel.send(GIF.url);
            }
            foxGirl();
        }
        else if (command === "imagebomb") {
            async function foxGirl() {
                const GIF = await neko.foxGirl();
                message.channel.send(GIF.url);
            }
            for (let i = 0; i <5; i++) {
                foxGirl();
            }
        }
        else {
            message.channel.send("Invalid option! Try \`$help foxgirl\`")
        }
    }
}