const { pathfinder, Movements } = require('mineflayer-pathfinder')
const pvp = require('mineflayer-pvp').plugin
const minecraftHawkEye = require('minecrafthawkeye');
const armorManager = require('mineflayer-armor-manager')

module.exports = (bot) => {
    bot.loadPlugin(pathfinder)
    bot.loadPlugin(pvp)
    bot.loadPlugin(minecraftHawkEye)
    bot.loadPlugin(armorManager)

    // Pathfinder
    const mcData = require('minecraft-data')(bot.version)
    const defaultMove = new Movements(bot, mcData)
    bot.pathfinder.setMovements(defaultMove)
}