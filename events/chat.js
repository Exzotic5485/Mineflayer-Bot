module.exports = {
    run: async (bot, username, message) => {
        if(username == bot.username) return;

        console.log(`${username}: ${message}`)

        // Command Handling
        const msg = message.toLowerCase().split(' ')

        const command = bot.commands.get(msg[0]) || bot.commands.get(message) 

        if(!command) return;

        let args = msg.slice(1)

        if(command?.expectedArgs && args < command?.expectedArgs) return;

        try {
            await command.execute(bot, username, message, args)
        } catch (e) {
            console.log(e)

            bot.chat(`/msg ${username} Failed to execute command: ${e.toString()}`)
        }
    }
}