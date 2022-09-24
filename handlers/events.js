const fs = require("fs");

module.exports = (bot) => {
    const events = fs.readdirSync("./events").filter(file => file.endsWith(".js"));

    for (const file of events) {
        const event = require(`../events/${file}`)

        console.log("Event Loaded: " + file)
        bot.on(file.split(".")[0], event.run.bind(null, bot));
    }
}