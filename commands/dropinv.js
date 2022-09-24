module.exports = {
    name: 'drop yo inv',
    execute: async (bot, username, message, args) => {
        for(let item of bot.inventory.items()) {
            await bot.tossStack(item)
        }
    }
}