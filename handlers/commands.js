const fs = require('fs')

module.exports = (bot) => {
    const commands = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

    for (const file of commands) {
        const command = require(`../commands/${file}`)
        bot.commands.set(command.name, command)
    }
}