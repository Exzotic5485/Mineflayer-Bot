const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
    host: '',
    username: '',
    version: '',
    auth: ''
})

bot.commands = new Map()
bot.following = ""

for (const handler of ['plugins', 'events', 'commands']) require(`./handlers/${handler}`)(bot)

bot.once('spawn', () => {
    console.log("Bot Spawned")

    // For 'come' command
    const { goals: { GoalNear } } = require('mineflayer-pathfinder')
    setInterval(() => {
        if(!bot.following) return;
    
        const target = bot.players[bot.following]?.entity
    
        if(!target) return;
    
        const { x: playerX, y: playerY, z: playerZ } = target.position
    
        bot.pathfinder.setGoal(new GoalNear(playerX, playerY, playerZ, 1))
      }, 1000)
})