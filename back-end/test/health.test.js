const chai = require("chai");
const request = require("supertest");
const app = require("../src/app");

const expect = chai.expect;

describe("/health-check", () => {
    it("test success", done => {
        request(app)
            .get("/health-check")
            .end(function(err, res) {
                expect(res.statusCode).to.equal(200);
                expect(res.body).to.deep.equal({ status: "UP" });
                done();
            });
    });
});
