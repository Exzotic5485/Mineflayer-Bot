module.exports = {
    name: 'tpa',
    expectedArgs: 1,
    execute: async (bot, username, message, args) => {
        bot.chat(`/trigger tpa set ${args[0]}`)
    }
}