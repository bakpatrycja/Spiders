import { app } from '../server';
import * as supertest from 'supertest';
let expect = require("chai").expect;
let chai = require('chai')
chai.use(require('chai-json-schema'));

const request = supertest(app);

describe('MergeController', () => {
  it('Validate structure of merged databases', async () => { 
    
    const response = await request.get('/merge');
    const mergedData = response.body;

    let objectSchema = {
      title: 'Merged database schema',
      type: 'object',
      required: ['users', 'spiders', 'exhibitions'],
      properties: {
        users: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: {
                type: 'number'
              },
              name: {
                type: 'string'
              },
              surname: {
                type: 'string'
              },
              age: {
                type: 'number'
              },
              createdAt: {
                type: 'string'
              },
              updatedAt: {
                type: 'string'
              }
            }
          }
        },
        spiders: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: {
                type: 'number'
              },
              name: {
                type: 'string'
              },
              isPet: {
                type: 'boolean'
              },
              belongsTo: {
                type: 'number'
              },
              createdAt: {
                type: 'string'
              },
              updatedAt: {
                type: 'string'
              }
            }
          }
        },
        exhibitions: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              _id: {
                type: 'string'
              },
              name: {
                type: 'string'
              },
              start_date: {
                type: 'string'
              }
            }
          }
        }
      }
    };
  
    expect(mergedData).to.be.jsonSchema(objectSchema);    
  });
});