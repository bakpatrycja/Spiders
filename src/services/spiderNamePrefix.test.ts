 import  {addPrefix}  from './spiderNamePrefix';
 let expect = require("chai").expect;

describe('SpiderNamePrefix', function() {
    describe('checks adding prefix', function() {
        const input = 'Tarantula';
        const output = 'Spider-Tarantula';
        it('should return "Spider-Tarantula"', function() {
            expect(addPrefix(input)).to.equal(output);
        });
    });
});