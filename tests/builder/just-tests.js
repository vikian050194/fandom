import assert from "node:assert";

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

    it("checkbox", function () {
        const actual = builder.checkbox().done();

        assert.equal(actual.length, 1);

        const [actualNode] = actual;

        assert.equal(actualNode.tag, "input");
        assert.deepEqual(actualNode.attributes, { type: "checkbox" });
    });
});