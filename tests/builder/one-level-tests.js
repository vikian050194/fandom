import assert from "assert";

describe("Builder: one level", function () {
    it("custom", function () {
        const actual = builder.open("custom").close().build();

        assert.equal(actual.length, 1);

        const [actualNode] = actual;

        assert.equal(actualNode.tag, "custom");
        assert.deepEqual(actualNode.attributes, {});
        assert.equal(actualNode.nodes.length, 0);
    });

    it("div", function () {
        const actual = builder.div().close().build();

        assert.equal(actual.length, 1);

        const [actualNode] = actual;

        assert.equal(actualNode.tag, "div");
        assert.deepEqual(actualNode.attributes, {});
        assert.equal(actualNode.nodes.length, 0);
    });

    it("span", function () {
        const actual = builder.span().close().build();

        assert.equal(actual.length, 1);

        const [actualNode] = actual;

        assert.equal(actualNode.tag, "span");
        assert.deepEqual(actualNode.attributes, {});
        assert.equal(actualNode.nodes.length, 0);
    });

    it("h1", function () {
        const actual = builder.h1().close().build();

        assert.equal(actual.length, 1);

        const [actualNode] = actual;

        assert.equal(actualNode.tag, "h1");
        assert.deepEqual(actualNode.attributes, {});
        assert.equal(actualNode.nodes.length, 0);
    });

    it("two div", function () {
        const actual = builder.div().close().div().close().build();

        assert.equal(actual.length, 2);

        const [node1, node2] = actual;

        assert.equal(node1.tag, "div");
        assert.equal(node2.tag, "div");
    });

    it("div and span", function () {
        const actual = builder.div().close().span().close().build();

        assert.equal(actual.length, 2);

        const [node1, node2] = actual;

        assert.equal(node1.tag, "div");
        assert.equal(node2.tag, "span");
    });
});