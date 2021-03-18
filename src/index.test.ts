 import { app } from './server';
 import * as supertest from 'supertest';
 let expect = require("chai").expect;

 const request = supertest(app);

describe('Main app', () => {
  it('Testing to see if Mocha works', () => {
    expect(1).to.equal(1);
  });

  it('gets the test endpoint', async () => {
     const response = await request.get('/')

     expect(response.status).to.equal(200);
     expect(response.text).to.equal('My spider diary <3');
  });
});