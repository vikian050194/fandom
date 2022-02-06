import assert from "assert";
import { Node } from "../../src/state";

describe("Converter: one level", function () {
    it("one div", function () {
        const nodes = [
            new Node("div")
        ];

        const actual = converter.convert(nodes);

        assert.equal(actual.length, 1);

        const [domNode] = actual;

        assert.equal(domNode.tag, "div");
        assert.equal(domNode.children.length, 0);
    });
    
    it("two div", function () {
        const nodes = [
            new Node("div"),
            new Node("div")
        ];

        const actual = converter.convert(nodes);

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

        const actual = converter.convert(nodes);

        assert.equal(actual.length, 2);

        const [domNode1, domNode2] = actual;

        assert.equal(domNode1.tag, "div");
        assert.equal(domNode2.tag, "span");
    });
});