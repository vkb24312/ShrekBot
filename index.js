const Discord = require('discord.js');
const client = new Discord.Client();
const song = ["Somebody", "once", "told", "me", "The", "world", "is", "gonna", "roll", "me", "I", "ain't", "the", "sharpest", "tool", "in", "the", "shed", "She", "was", "looking", "kinda", "dumb", "With", "her", "finger", "and", "her", "thumb", "In", "the", "shape", "of", "an", "L", "on", "her", "forehead", "Well", "the", "years", "start", "coming", "And", "they", "don't", "stop", "coming", "Fed", "to", "the", "rules", "and", "I", "hit", "the", "ground", "running", "Didn't", "make", "sense", "Not", "to", "live", "for", "fun", "Your", "brain", "gets", "smart", "but", "your", "head", "gets", "dumb", "So", "much", "to", "do", "So", "much", "to", "see", "So", "what's", "wrong", "with", "taking", "the", "back", "street", "You'll", "never", "know", "if", "you", "don't", "go", "You'll", "never", "shine", "if", "you", "don't", "glow", "Hey", "now", "You're", "an", "all", "star", "Get", "your", "game", "on", "Go", "play", "Hey", "now", "You're", "a", "rock", "Star", "Get", "the", "show", "on", "Get", "paid", "And", "all", "that", "glitters", "is", "gold", "Only", "shooting", "stars", "break", "the", "mould", "It's", "a", "cool", "place", "And", "they", "say", "it", "gets", "colder", "You're", "bundled", "up", "now", "Wait", "'til", "you", "get", "older", "But", "the", "meteor", "men", "Beg", "to", "differ", "Judging", "by", "the", "hole", "in", "the", "satellite", "picture", "The", "ice", "we", "skate", "Is", "getting", "pretty", "thin", "The", "water's", "getting", "warm", "So", "you", "might", "as", "well", "swim", "My", "world's", "on", "fire", "How", "about", "yours", "That's", "the", "way", "I", "like", "it", "and", "I", "never", "get", "bored", "Hey", "now", "You're", "an", "all", "star", "Get", "your", "game", "on", "Go", "play", "Hey", "now", "You're", "a", "rock", "star", "Get", "the", "show", "on", "Get", "paid", "And", "all", "that", "glitters", "is", "gold", "Only", "shooting", "stars", "break", "the", "mould", "Hey", "now", "You're", "an", "all", "star", "Get", "your", "game", "on", "Go", "play", "Hey", "now", "You're", "a", "rock", "star", "Get", "the", "show", "on", "Get", "paid", "And", "all", "that", "glitters", "is", "gold", "Only", "shooting", "stars", "Somebody", "once", "asked", "Could", "you", "spare", "some", "change", "for", "gas", "I", "need", "to", "get", "myself", "away", "from", "this", "place", "I", "said", "yep", "What", "a", "concept", "I", "could", "use", "A", "little", "fuel", "myself", "And", "we", "could", "all", "use", "a", "little", "change", "Well", "the", "years", "start", "coming", "And", "they", "don't", "stop", "coming", "Fed", "to", "the", "rules", "and", "I", "hit", "the", "ground", "running.", "Didn't", "make", "sense", "Not", "to", "live", "for", "fun", "Your", "brain", "gets", "smart", "but", "your", "head", "gets", "dumb", "So", "much", "to", "do ", "So", "much", "to", "see", "So", "what's", "wrong", "with", "taking", "the", "back", "streets", "You'll", "never", "know", "if", "you", "don't", "go", "You'll", "never", "shine", "if", "you", "don't", "glow", "Hey", "now", "You're", "an", "all", "star", "Get", "your", "game", "on", "Go", "play", "Hey", "now", "You're", "a", "rock", "star", "Get", "the", "show", "on", "Get", "paid", "And", "all", "that", "glitters", "is", "gold", "Only", "shooting", "stars", "break", "the", "mould", "And", "all", "that", "glitters", "is", "gold", "Only", "shooting", "stars", "break", "the", "mould"];
const fs = require("fs");

var line = new Map();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.guilds.forEach(g => {
        if (fs.existsSync(g.id)) {
            line.set(g.id, Number(fs.readFileSync(g.id).toString()))
        } else {
            line.set(g.id, 0);
        }
    });
});

client.on('message', msg => {
    var id = msg.guild.id;
    if (!(msg.author.tag === "ShrekBot#4384") && (msg.content.toUpperCase() === song[line.get(id)].toUpperCase())) {
        
        console.log(id + ": " + song[line.get(id)]);
        line.set(id, line.get(id)+1);
        if (line.get(id) in song) {
            msg.channel.send(song[line.get(id)]);
            console.log(song[line.get(id)]);
            line.set(id, line.get(id) + 1);
        } else {
            line.set(id, 0);
        }
        fs.writeFileSync(id.toString(), line.get(id))
    }
});

client.login("NjY2NjIyNDUxNjM0OTI5NjY4.Xh7PJw.wrj71891sEnbNiO4PvHDG - GhwPg");