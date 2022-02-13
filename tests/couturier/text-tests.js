import assert from "assert";

describe("couturier: text", function () {
    it("div with text", function () {
        const actual = couturier.div().text("test").close().done();

        assert.equal(actual.length, 1);

        const [actualNode] = actual;

        assert.equal(actualNode.tag, "div");
        assert.equal(actualNode.text, "test");
        assert.deepEqual(actualNode.attributes, {});
        assert.equal(actualNode.nodes.length, 0);
    });
});