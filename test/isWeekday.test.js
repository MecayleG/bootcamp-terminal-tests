
let assert = require("assert");
let isWeekday = require("../isWeekday");

describe('The isWeekday function returns true if the day is a weekday' , function(){
	it('should return true for Monday' , function(){
    var day = "Monday";
    assert.equal(isWeekday(day), true);        
	});

    it('should return false for Saturday' , function(){
    	var day = "Saturday";
        assert.equal(isWeekday(day), false);
		});
    });