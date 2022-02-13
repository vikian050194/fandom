import assert from "assert";

describe("couturier: just", function () {
    it("custom", function () {
        const actual = couturier.just("custom").done();

        assert.equal(actual.length, 1);

        const [actualNode] = actual;

        assert.equal(actualNode.tag, "custom");
    });
    
    it("input", function () {
        const actual = couturier.input().done();

        assert.equal(actual.length, 1);

        const [actualNode] = actual;

        assert.equal(actualNode.tag, "input");
    });
});