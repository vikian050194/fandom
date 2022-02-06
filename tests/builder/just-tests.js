import assert from "assert";

describe("Builder: just", function () {
    it("custom", function () {
        const actual = builder.just("custom").build();

        assert.equal(actual.length, 1);

        const [actualNode] = actual;

        assert.equal(actualNode.tag, "custom");
    });
    
    it("input", function () {
        const actual = builder.input().build();

        assert.equal(actual.length, 1);

        const [actualNode] = actual;

        assert.equal(actualNode.tag, "input");
    });
});