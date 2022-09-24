module.exports = {
    name: 'eval',
    execute: async (bot, username, message, args) => {
        try {
            const response = eval(args.join(' '))

            if(response) bot.chat(response)
        } catch (e) {
            bot.chat(`/msg ${username} Failed to evaluate: ${e.toString()}`)
        }
    }
}