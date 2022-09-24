module.exports = {
    name: 'ping',
    execute: async (bot, username, message, args) => {
        await bot.chat('Pong!')
    }
}