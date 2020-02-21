const request = require('supertest');

const server = require('./server.js');

it ('check if db env is running on testing', function() {
    expect(process.env.DB_ENV).toBe('testing');
})

describe("sever", () => {
    describe("GET", () => {
        it ("shoudl return 200 OK status", () =>{
            return request(server)
                .get('/')
                .then(res => {
                    expect(res.status).toBe(200);
                })
        })
        it ("shoudl return JSON response", () => {
            return request(server)
                .get('/')
                .then(res => {
                    expect(res.type).toMatch(/json/)
                })
        })

        it ("shoudl return an API property with value 'Server is alive...'", () => {
            return request(server)
                .get("/")
                .then(res => {
                    expect(res.body.api).toBe("up")
                })
        })
    
    })
})