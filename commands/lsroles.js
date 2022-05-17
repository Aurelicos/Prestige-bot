module.exports = {
    name: 'lsroles',
    description: "list of all roles",
    async execute(message, args) {
        if (message.channel.type !== 'text') {
            message.channel.send('This command can be used only in text channel of server');
            return;
        };
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!member) return message.reply('Please specify a member!');
        const Discord = require('discord.js');

        const memberRoles = member.roles.cache
            .filter((roles) => roles.id !== message.guild.id)
            .map((role) => role.toString());

        message.channel.send(
            new Discord.MessageEmbed()
                .setAuthor(member.user.tag, member.user.displayAvatarURL({ dynamic: true }))
                .setDescription(`${member}'s roles: ${memberRoles}`)
                .setColor("RANDOM")
        )
    }
}