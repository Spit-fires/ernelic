 const bot = new aoijs.Bot({
   token: "process.env.TOKEN", //Discord Bot Token
   prefix: "$getServerVar[Variable]", //Discord Bot Prefix
   intents: "all" //Discord Intents 
 })

 bot.onMessage() //Allows to execute Commands

 const loader = new aoijs.LoadCommands(bot)
 loader.load(bot.cmd, "./commands/")
 loader.load(voice.cmd, "./commands/voice/")
; 
 /*
 bot.cmd is object of Collections where the command data will be stored
 "./commands/" is the path of folder where all the commands' code will be present
 */
 
 bot.variables({
   prefix: "e!"
 })
 const voice = new Voice(
  bot,
  {
    cache: {
      cacheType: "Memory",//Disk
      enabled: true,
      //directory : "music", only for Disk type
    },
    soundcloud: {
      clientId : "SOUNDCLOUD CLIENT ID",
      limitLikeTrack : 200 
    },//optional
  playerOptions: {
    trackInfoInterval: 5000,
  },//optional
  },
  true, //to enable pruneMusic 
);

voice.onTrackStart();
