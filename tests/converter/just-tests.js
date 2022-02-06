import assert from "assert";
import { Node } from "../../src/state";

describe("Converter: just", function () {
    it("custom", function () {
        const node = new Node("custom");

        const actual = converter.convert([node]);

        assert.equal(actual.length, 1);

        const [domNode] = actual;

        assert.equal(domNode.tag, "custom");
    });

    it("input", function () {
        const node = new Node("input");

        const actual = converter.convert([node]);

        assert.equal(actual.length, 1);

        const [domNode] = actual;

        assert.equal(domNode.tag, "input");
    });
});