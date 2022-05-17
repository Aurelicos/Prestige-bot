module.exports = {
    name: 'waifu',
    description: "sends a waifu",
    execute(message, args) {
            const command = args.shift();
            const API = require('anime-images-api')
            const images_api = new API()
            if (command === undefined) {
                images_api.sfw.waifu().then(response => {
                    message.channel.send(`https://cdn-anime-images-api.hisoka17.repl.co/images/${response.image}`)
                })
            }
            else if (command === 'imagebomb') {
                for (let i = 0; i < 5; i++) {
                    images_api.sfw.waifu().then(response => {
                        message.channel.send(`https://cdn-anime-images-api.hisoka17.repl.co/images/${response.image}`)
                    })
                }
            }
            else {
                message.channel.send("Invalid option! Try \`$help waifu\`")
            }
    }
}