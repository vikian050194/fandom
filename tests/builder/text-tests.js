import assert from "assert";

describe("builder: text", function () {
    it("div with text", function () {
        const actual = builder.div().text("test").close().done();

        assert.equal(actual.length, 1);

        const [actualNode] = actual;

        assert.equal(actualNode.tag, "div");
        assert.equal(actualNode.text, "test");
        assert.deepEqual(actualNode.attributes, {});
        assert.equal(actualNode.nodes.length, 0);
    });
});