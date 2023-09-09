import assert from "node:assert";

describe("convert: just", function () {
    it("custom", function () {
        const node = new Node("custom");

        const actual = convert([node]);

        assert.equal(actual.length, 1);

        const [domNode] = actual;

        assert.equal(domNode.tag, "custom");
    });

    it("input", function () {
        const node = new Node("input");

        const actual = convert([node]);

        assert.equal(actual.length, 1);

        const [domNode] = actual;

        assert.equal(domNode.tag, "input");
    });
});