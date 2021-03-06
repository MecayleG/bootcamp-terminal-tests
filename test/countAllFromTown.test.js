let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");

describe('countAllFromTown counts all registration numbers for a specific town' , function(){
	it('should return 3 for CL' , function(){
	var count = 'CL 124,CY 567,CL 345, CY 456,CL 341, CY 789';
	var town = "CL"
	assert.equal(countAllFromTown(count, town), 3);
        
	});
	it('should return 2 for CF' , function(){
	var count = 'CL 124,CY 567,CF 345,CY 456,CL 341,CF 789';
	var town = "CF"
	assert.equal(countAllFromTown(count, town), 2);
        
	});
	it('should return 4 for CJ' , function(){
	var count = 'CJ 124,CA 567,CJ 345,CY 456,CJ 341,CJ 789';
	var town = "CJ"
	assert.equal(countAllFromTown(count, town), 4);
        
	});
  });