const aoijs = require("aoi.js")
 const bot = new aoijs.Bot({
   token: "process.env.TOKEN",
   prefix: "$getServerVar[prefix]",
   intents: "all"
 })

 const voice = new aoijs.Voice(bot,{
    cache: {
      cacheType: "Memory",
      enabled: true,
    },
    soundcloud: {
      clientId : "process.env.SCCI",
      limitLikeTrack : 200 
    },
  playerOptions: {
    trackInfoInterval: 0,
  }
});

 bot.variables({
   prefix: "e!"
 })
 
bot.onMessage();
voice.onTrackStart();

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd, "./commands/")
loader.load(voice.cmd, "./commands/voice/");