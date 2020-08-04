let assert = require("assert");
let countRegNumber = require("../countRegNumber");


describe('The countRegNumber function calculates the total number of registrations in a list' , function(){
    it('should count 3 registration numbers' , function(){
    	var regNum = 'CA 182736,CY 523519,CJ 812328';
        assert.equal(3, countRegNumber(regNum));    
    });
    it('should count 5 registration numbers' , function(){
    	var regNum = 'CA 182736,CY 523519,CJ 812328,MP 3535,CA 123';
        assert.equal(5, countRegNumber(regNum));    
    });
    it('should count 7 registration numbers' , function(){
    	var regNum = 'CA 182736,CY 523519,CJ 812328,CA 524,CY 3657, L 568 N, GP 888';
        assert.equal(7, countRegNumber(regNum));   
    });

});