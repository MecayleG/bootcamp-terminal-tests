let assert = require("assert");
let greet = require("../greet");

describe('The greet function' , function(){
    it('should greet Mecayle' , function(){
        assert.equal(greet('Mecayle'), 'Hello, Mecayle');

    });
    it('should greet Lila' , function(){
        assert.equal(greet('Lila'), 'Hello, Lila');

    });
    it('should greet Rephan' , function(){
        assert.equal(greet('Rephan'), 'Hello, Rephan');

    });

});