let assert = require("assert");
let transportFee = require("../transportFee");

describe('The transportFee function should calculate the cost of shifts' , function(){
    it('For morning' , function(){
    	var shift = 'morning';
        assert.deepEqual(transportFee(shift), 'R20')
    });
    it('For afternoon' , function(){
    	var shift = 'afternoon';
        assert.deepEqual(transportFee(shift), 'R10')
    });
    it('For evening' , function(){
    	var shift = 'evening';
        assert.deepEqual(transportFee(shift), 'free')
    });

});
