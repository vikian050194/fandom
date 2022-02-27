import assert from "assert";

describe("convert: one level", function () {
    it("one div", function () {
        const nodes = [
            new Node("div")
        ];

        const actual = convert(nodes);

        assert.equal(actual.length, 1);

        const [domNode] = actual;

        assert.equal(domNode.tag, "div");
        assert.equal(domNode.children.length, 0);
    });

    it("one div and attributes", function () {
        const nodes = [
            new Node("div", { id: 42 })
        ];

        const actual = convert(nodes);

        assert.equal(actual.length, 1);

        const [domNode] = actual;

        assert.equal(domNode.tag, "div");
        assert.equal(domNode.id, 42);
        assert.equal(domNode.children.length, 0);
    });

    it("two div", function () {
        const nodes = [
            new Node("div"),
            new Node("div")
        ];

        const actual = convert(nodes);

        assert.equal(actual.length, 2);

        const [domNode1, domNode2] = actual;

        assert.equal(domNode1.tag, "div");
        assert.equal(domNode2.tag, "div");
    });

    it("div and span", function () {
        const nodes = [
            new Node("div"),
            new Node("span")
        ];

        const actual = convert(nodes);

        assert.equal(actual.length, 2);

        const [domNode1, domNode2] = actual;

        assert.equal(domNode1.tag, "div");
        assert.equal(domNode2.tag, "span");
    });
});