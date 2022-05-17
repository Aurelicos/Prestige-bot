module.exports = {
    name: 'clear',
    description: "clear messages",
    async execute(message, args) {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) {
            message.channel.send('You don\'t have permissions to delete messages!');
            return;
        };
        if (!args[0]) return message.reply("Please enter the amount of messages you want to clear!");
        if (isNaN(args[0])) return message.reply("Please enter a real number!");

        if (args[0] > 100) return message.reply("You can't delete more than 100 messages!");
        if (args[0] < 1) return message.reply("You must delete at last one message!");

        await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
            message.channel.bulkDelete(messages);
        });
    }
}