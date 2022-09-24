module.exports = {
    name: 'stop',
    execute: async (bot, username, message, args) => {
        bot.following = ""

        bot.pathfinder.setGoal(null)
        bot.pvp.stop()
        bot.hawkEye.stop()
    }
}