import assert from "assert";

describe("builder: just", function () {
    it("custom", function () {
        const actual = builder.just("custom").done();

        assert.equal(actual.length, 1);

        const [actualNode] = actual;

        assert.equal(actualNode.tag, "custom");
    });
    
    it("input", function () {
        const actual = builder.input().done();

        assert.equal(actual.length, 1);

        const [actualNode] = actual;

        assert.equal(actualNode.tag, "input");
    });
});