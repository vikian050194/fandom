import assert from "assert";

describe("convert: text", function () {
    it("div with text", function () {
        const div = new Node("div");
        div.text = "test";

        const nodes = [div];

        const actual = convert(nodes);

        assert.equal(actual.length, 1);

        const [domNode] = actual;

        assert.equal(domNode.tag, "div");
        
        const [textNode] = domNode.children;
        assert.equal(textNode.tag, "text");
        assert.equal(textNode.value, "test");
    });
});