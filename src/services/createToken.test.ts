 import  {createToken}  from './createToken';
 let expect = require("chai").expect;

describe('createToken', function() {
    describe('checks if token is created', function() {
        let userId = 1;
        
        it('should return token', function() {
            expect(createToken(userId)).to.have.lengthOf.above(0);
        });
    });
});