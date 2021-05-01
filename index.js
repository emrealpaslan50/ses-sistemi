const Discord = require("discord.js");
const client = new Discord.Client();
const conf = require('./config.json');

client.on("voiceStateUpdate",  async(oldState, newState) => {
  if(oldState.member.user.bot) return;
  if(newState.member.nickname === null) return;
  if(!newState.member.nickname.includes(conf.sembol)) return;

 
 if (!oldState.channelID && newState.channelID) {
    if(conf.voiceChannels.includes(newState.channelID)) {
let age = newState.member.nickname.split(` ${conf.sembol} `)[1];
if(age < 18 || newState.member.nickname.split(conf.sembol)[1] < 18){
     await oldState.member.voice.setChannel(null).catch(err => {console.log("Kullanıcıyı sesten atamadım.")})
};
  };
};

if (oldState.channelID && newState.channelID) {
    if(conf.voiceChannels.includes(newState.channelID)) {
let age = newState.member.nickname.split(` ${conf.sembol} `)[1];
if(age < 18 || newState.member.nickname.split(conf.sembol)[1] < 18){
    await oldState.member.voice.setChannel(null).catch(err => {console.log("Kullanıcıyı sesten atamadım.")})
}
  };
}
});

client.on('ready', () => {
     console.log("Bot Hazır!");
});

client.login(conf.token);
