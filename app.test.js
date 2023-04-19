process.env.NODE_ENV = "test";
const request = require('supertest');
const items = require('./fakeDb');

const app = require('./app');

describe("GET /items", () => {
    test("Get all items", async () => {
        const res = await request(app).get("/items")
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({items: [
            {name: "popsicle", price: "1.45"}, 
            {name: "cheerios", price: "3.40"}
        ]});
    });
});

describe("GET /items/:name", () => {
    test("Get one item", async () => {
        const res = await request(app).get("/items/popsicle")
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({item:
            {name: "popsicle", price: "1.45"}, 
        });
    });
});

let doritos = {name: "doritos", price: "5.38"}

describe("POST /items", () => {
    test("Post new item", async () => {
        const res = (await request(app).post("/items").send(doritos));
        expect(res.statusCode).toBe(201)
        expect(res.body).toEqual({added: doritos});
    });
});