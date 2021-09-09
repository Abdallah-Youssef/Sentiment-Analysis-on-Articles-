import 'babel-polyfill'
const request = require('supertest');

const {app, mockAPIResponse} = require('./index')

it('responds with json', function() {
    request(app)
    .get('/test')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(mockAPIResponse)
    .expect(200)
});

