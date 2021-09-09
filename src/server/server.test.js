import 'babel-polyfill'
const request = require('supertest');

const {app, mockAPIResponse} = require('./index')

it('responds with json', async function() {
    const test = await request(app)
    .get('/test')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    console.log(test.body);
    expect(test.body).toEqual(mockAPIResponse)
});

