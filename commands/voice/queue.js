module.exports = {
  name: "queue",
  aliases: ['q'],
  code: `
   $title[1;Queue]
   $author[1;Requested By $usertag;$authorAvatar]
   $description[1;$queue[$if[$message==;1;$message]]]
   $footer[1;number of songs ->$queueLength]
   $color[1;FF0000]
   $addTimestamp[1]
    `,
};
