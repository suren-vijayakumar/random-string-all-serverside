var rand = require('./random');
var adject = require('./public/data/adjective');
var topics = require('./public/data/topic');
var modifier = require('./public/data/modifier');

function funny(){

    var a = rand(1,6);
    var b = rand(1,6);
    var c= rand(1,6);

    var funnyString = (modifier[a]+ " " + adject[b]+ " " + topics[c]);

    return funnyString;

};


module.exports = funny;