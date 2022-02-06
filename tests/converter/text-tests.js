import assert from "assert";
import { Node } from "../../src/state";

describe("Converter: text", function () {
    it("div with text", function () {
        const div = new Node("div");
        div.text = "test";

        const nodes = [div];

        const actual = converter.convert(nodes);

        assert.equal(actual.length, 1);

        const [domNode] = actual;

        assert.equal(domNode.tag, "div");
        
        const [textNode] = domNode.children;
        assert.equal(textNode.tag, "text");
        assert.equal(textNode.value, "test");
    });
});