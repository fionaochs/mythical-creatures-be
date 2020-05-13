require('dotenv').config();
const connect = require('../utils/connect');
const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../app');

describe('creature routes', () => {
  beforeAll(() => {
    connect();
  });
  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });
  afterAll(() => {
    mongoose.connection.close();
  });
  it('creates a creature via POST', () => {
    return request(app)
      .post('/api/v1/creatures')
      .send({
        type: 'gnome',
        hobby: 'mining',
        food: 'mushrooms',
        weapon: true,
        image: 'image'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          type: 'gnome',
          hobby: 'mining',
          food: 'mushrooms',
          weapon: true,
          image: 'image',
          __v: 0
        });
      });
  });
});
