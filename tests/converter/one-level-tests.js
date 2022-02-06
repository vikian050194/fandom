import assert from "assert";
import { Node } from "../../src/state";

describe("One level", function () {
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