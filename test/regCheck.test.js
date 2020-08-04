
let assert = require("assert");
let regCheck = require("../regCheck");

describe('The regCheck function checks if the registration number matches the town given' , function(){
    it('should return true if town matches registration' , function(){
    	var regsNum = 'DC 55 YU GP'
    	var town = 'GP'
        assert.equal(true, regCheck(regsNum, town));        
    });
   it('should return false if town does not match registration' , function(){
    	var regsNum ='DC 55 YU GP'
    	var town = 'L'
        assert.equal(false, regCheck(regsNum, town));        
    });
   it('Should return true if town matches registration' , function(){
    	var regsNum = 'FGT 123 MP'
    	var town = 'MP'
        assert.equal(true, regCheck(regsNum, town));        
    });

});