module.exports = {
    name: 'kill',
    expectedArgs: 1,
    execute: async (bot, username, message, args) => {
        const player = bot.players[args[0]]

        if(!player) return bot.chat(`/msg ${username} Bruv, i couldnt find that player, who do u expect me to kill?`)

        bot.pathfinder.setGoal(null)
        bot.pvp.attack(player.entity)
    }
}