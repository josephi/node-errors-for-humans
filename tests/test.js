var assert = require('assert');
var errForHumans = require("../");
var detailedErrorMessagesDictionary = errForHumans.humanMessages.en;

var errors = (function() {
    var errors = [];
    for(var code in detailedErrorMessagesDictionary) {
        var err = new Error("This is for the toString() method. Code (" + code + ")");
        err.code = code;
        errors.push(err);
    }
    return errors;
})();
describe('Testing node-error-for-humans', function() {
    it("Check if 'toHumans()' method exists in Error class", function() {
        assert.notEqual(typeof errors[0].toHumans === "undefined");
    });

    for(var err of errors){
        it(`Checking ${err.code} in toHumans() method is equal to detailed error description in lib`, function() {
            assert.equal(0, err.toHumans().indexOf(detailedErrorMessagesDictionary[err.code]));
            
        });
    }  

    it(`Check that unknown error code returns toString() value`, function() {
        var msg = "This is a unknow error";
        var unknownError = new Error(msg);
        unknownError.code = "EUNKNOWN";
        assert.equal(unknownError.toString(), unknownError.toHumans());
    });
    it(`Check that error object without code property returns toString() value`, function() {
        var msg = "This is an error without `code` property";
        var noCodeError = new Error(msg);  
        assert.equal(noCodeError.toString(), noCodeError.toHumans());      
    });  
});