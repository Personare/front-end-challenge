import ListBuilder from "./ListBuilder";
import chai from "chai";

const expect = chai.expect;

describe("ListBuilder", () => {
    it("limit", () => {
        const result = new ListBuilder(["a", "b", "c"]).limit(2).build();
        expect(result).to.deep.equal(["a", "b"]);
    });

    it("duplicate", () => {
        const result = new ListBuilder(["a", "b", "c"]).duplicate().build();
        expect(result).to.deep.equal(["a", "b", "c", "a", "b", "c"]);
    });

    it("generateItemId", () => {
        const result = new ListBuilder([{ name: "a" }, { name: "b" }])
            .generateItemId()
            .build();

        expect(result).to.have.lengthOf(2);
        expect(result[0]).to.have.property("id");
        expect(result[1]).to.have.property("id");
    });

    it("generateItemId", () => {
        const result = new ListBuilder([{ name: "a" }, { name: "b" }])
            .generateItemKey()
            .build();

        expect(result).to.have.lengthOf(2);
        expect(result[0]).to.have.property("key");
        expect(result[1]).to.have.property("key");
    });
});
