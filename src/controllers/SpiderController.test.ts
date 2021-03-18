import { app } from '../server';
import * as supertest from 'supertest';
let expect = require("chai").expect;

const request = supertest(app);

describe('SpiderController', () => {
  it('gets the test endpoint', async () => {
    const response = await request.get('/spiders/1');
    expect(response.body.id).to.equal(1);
  });

  it('creates a spider with provided details', async () => {
    const response = await request.post('/spiders');
    expect(response.status).to.equal(400);
  });

  it('creates a spider without provided details', async () => {
    const response = await request.post('/spiders').send({
      name: 'Test spider',
      isPet: true,
    });
    expect(response.status).to.equal(201);
  });
});