"use strict";

var __humansLng = "en";
var __humanMessages = {}
module.exports = class ErrorForHumans {
    static setCodeHumanMessage (code, message, language = "en") {
        if(typeof code !== "string") {
            throw new TypeError(`The method expect a string for 'code' parameter but got: ${typeof code}.`);
        }
        if(typeof message !== "string") {
            throw new TypeError(`The method expect a string for 'message' parameter but got: ${typeof message} | Code: ${code}.`);
        }
        if(typeof language !== "string") {
            throw new TypeError(`The method expect a string for 'language' parameter but got: ${typeof language}.`);
        }
        if(!__humanMessages[language]) {
            __humanMessages[language] = {}
        }
        __humanMessages[language][code] = message;
    }

    static getCodeHumanMessage (err) {
        if(!err.code || !__humanMessages[__humansLng][err.code])
            return err.toString();
        return `${__humanMessages[__humansLng][err.code]} (${err.code})`;
    }

    static setMessageDictionary (dictionary, language = "en") {
        for(var key in dictionary) {
            this.setCodeHumanMessage(key, dictionary[key], language);
        }
    }

    static get humanMessages () {
        return __humanMessages;
    }

    static get humanLanguage () {
        return __humansLng;
    }

    static set humanLanguage (value) {
        __humansLng = value;
    }
}