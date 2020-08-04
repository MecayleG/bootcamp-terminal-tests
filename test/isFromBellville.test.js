let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe('The isFromBellville function' , function(){
    it('should return true for CY' , function(){
    	var name = ["CY 123","CJ 123", "CY 568", "CA 378"]
        assert.equal(true, isFromBellville('CY'));
         });
    it('should return false for CJ' , function(){
    	var name = ["CY 123","CJ 123", "CY 568", "CA 378"]
        assert.equal(false, isFromBellville('CJ'));
	 });
    it('should return false for CA' , function(){
    	var name = ["CY 123","CJ 123", "CY 568", "CA 378"]
        assert.equal(false, isFromBellville('CA'));
	 });

});