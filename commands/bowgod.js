module.exports = {
    name: 'bowgod',
    execute: async (bot, username, message, args) => {
        const player = bot.hawkEye.getPlayer(args[0])
        
        if(player) {
            bot.hawkEye.autoAttack(player, "bow")
        }
    }
}