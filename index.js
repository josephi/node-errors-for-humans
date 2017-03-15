"use strict";
var requireDir = require('require-dir');
var ErrorForHumans = require("./ErrorForHumans.js");
var languages = requireDir("./languages");

for(var code in languages) {
    ErrorForHumans.setMessageDictionary(languages[code], code);
} 

Error.prototype.toHumans = function() {
    return ErrorForHumans.getCodeHumanMessage(this);    
}

module.exports = ErrorForHumans;