import assert from "node:assert";

describe("convert: class and classList", function () {
    it("class", function () {
        const nodes = [
            new Node("div", { class: "style1" })
        ];

        const actual = convert(nodes);

        assert.equal(actual.length, 1);

        const [domNode] = actual;

        assert.equal(domNode.tag, "div");
        assert.equal(domNode.class, "style1");
        assert.equal(domNode.children.length, 0);
    });

    it("classList", function () {
        const nodes = [
            new Node("div", { classList: ["style1", "style2"] })
        ];

        const actual = convert(nodes);

        assert.equal(actual.length, 1);

        const [domNode] = actual;

        assert.equal(domNode.tag, "div");
        assert.equal(domNode.class, "style1 style2");
        assert.equal(domNode.children.length, 0);
    });

    it("class and classList", function () {
        const nodes = [
            new Node("div", { class: "style1", classList: ["style2", "style3"] })
        ];

        assert.throws(() => convert(nodes), Error, "Use either classList or class");
    });
});