//body
const Aoijs = require("aoi.js")
const bot = new Aoijs.Bot({
token: "token", //Bot token (You can take it from Discord Developers Portal)
prefix: "!", //Bot prefix (Anything like "!" or "G!" or ">" etc)
intents: "all" //Intents (Can manage on Discord Developers Portal)
})

bot.onMessage() //Allows to read messages

//Status for your bot
bot.status({
	text: "text", //Just text
	type: "PLAYING", //What's your bot doing (Allowed: PLAYING, LISTENING, STREAMING, LISTENING and COMPETING)
	time: "12" //Optional
})