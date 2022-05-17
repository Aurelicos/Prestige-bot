module.exports = {
    name: 'lesbian',
    description: "command for sending lesbian images/gifs",
    execute(message, args) {
        if (!message.channel.nsfw) { message.channel.send("This command can only be used in nsfw channels."); return; }
        if (message.member.roles.cache.find(r => r.name === "18+")) {
            const command = args.shift();
            const API = require('anime-images-api')
            const images_api = new API()
            if (command === undefined) {
                images_api.nsfw.lesbian().then(response => {
                    message.channel.send(response.image)
                })
            }
            else if (command === 'imagebomb') {
                for (let i = 0; i < 5; i++) {
                    images_api.nsfw.lesbian().then(response => {
                        message.channel.send(response.image)
                    })
                }
            }
            else {
                message.channel.send("Invalid option! Try \`$help lesbian\`")
            }
        }
        else {
            message.channel.send("***Warning***, You need ***\`18+\`*** role to send these images.")
        }
    }
}