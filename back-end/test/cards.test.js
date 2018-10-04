const chai = require("chai");
const request = require("supertest");
const app = require("../src/app");

const expect = chai.expect;

describe("/cards", () => {
    it("test success", done => {
        request(app)
            .get("/cards")
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                expect(res.body).to.have.property("imagesUrl");
                expect(res.body).to.have.property("imageBackCard");
                expect(res.body).to.have.property("cards");
                done(err);
            });
    });
});
