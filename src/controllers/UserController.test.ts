import { app } from '../server';
import * as supertest from 'supertest';
let expect = require("chai").expect;

const request = supertest(app);

describe('UserController', () => {
  it('gets the test endpoint', async () => {
    const response = await request.get('/users/1');
    expect(response.body.id).to.equal(1);
  });

  it('creates a user with provided details', async () => {
    const response = await request.post('/users');
    expect(response.status).to.equal(400);
  });

  it('creates a user without provided details', async () => {
    const response = await request.post('/users').send({
      name: "Jean-Luc",
      surname: "Picard",
      age: 150
    });
    expect(response.status).to.equal(201);
  });
});