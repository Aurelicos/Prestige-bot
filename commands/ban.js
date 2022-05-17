module.exports = {
    name: 'ban',
    description: "ban users",
    async execute(message, args) {
        if (message.channel.type !== 'text') {
            message.channel.send('This command can be used only in text channel of server');
            return;
        };
        let mentionMember = message.mentions.members.first();

        if (message.member === mentionMember) {
            message.channel.send("You can't ban yourself!")
            return;
        }
        if (!message.member.hasPermission('KICK_MEMBERS')) {
            message.channel.send('You have no permissions to do that');
            return;
        };

        if (!mentionMember) {
            message.channel.send('You need to mention a user of the server!');
            return;
        }
        let authorHighestRole = message.member.roles.highest.rawPosition;
        let mentionHighestRole = mentionMember.roles.highest.rawPosition;

        if (mentionHighestRole >= authorHighestRole) {
            message.channel.send('You can`t ban members with equal or higher position');
            return;
        };

        if (!mentionMember.kickable) {
            message.channel.send('I have no permissions to ban this user');
            return;
        };

        mentionMember.ban()
        message.channel.send(`Member ${mentionMember.displayName} successfully banned.`);
    }
}