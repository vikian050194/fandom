import assert from "assert";

describe("builder: close", function () {
    it("close with default value", function () {
        const actual = builder.div().close(1).done();

        assert.equal(actual.length, 1);

        const [actualNode] = actual;

        assert.equal(actualNode.tag, "div");
        assert.deepEqual(actualNode.attributes, {});
        assert.equal(actualNode.nodes.length, 0);
    });

    it("close with custom value", function () {
        const actual = builder.div().div().close(2).done();

        assert.equal(actual.length, 1);

        const [actualNode] = actual;

        assert.equal(actualNode.tag, "div");
        assert.deepEqual(actualNode.attributes, {});
        assert.equal(actualNode.nodes.length, 1);
        assert.equal(actualNode.nodes[0].tag, "div");
        assert.deepEqual(actualNode.nodes[0].attributes, {});
        assert.equal(actualNode.nodes[0].nodes.length, 0);
    });

    it("close with wrong value", function () {
        builder.div().div().close(-2);

        assert.throws(() => builder.done(), Error, "it is not root");
    });
});