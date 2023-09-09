import assert from "node:assert";

describe("builder: one level", function () {
    it("custom", function () {
        const actual = builder.open("custom").close().done();

        assert.equal(actual.length, 1);

        const [actualNode] = actual;

        assert.equal(actualNode.tag, "custom");
        assert.deepEqual(actualNode.attributes, {});
        assert.equal(actualNode.nodes.length, 0);
    });

    it("div", function () {
        const actual = builder.div().close().done();

        assert.equal(actual.length, 1);

        const [actualNode] = actual;

        assert.equal(actualNode.tag, "div");
        assert.deepEqual(actualNode.attributes, {});
        assert.equal(actualNode.nodes.length, 0);
    });

    it("span", function () {
        const actual = builder.span().close().done();

        assert.equal(actual.length, 1);

        const [actualNode] = actual;

        assert.equal(actualNode.tag, "span");
        assert.deepEqual(actualNode.attributes, {});
        assert.equal(actualNode.nodes.length, 0);
    });

    it("h1", function () {
        const actual = builder.h1().close().done();

        assert.equal(actual.length, 1);

        const [actualNode] = actual;

        assert.equal(actualNode.tag, "h1");
        assert.deepEqual(actualNode.attributes, {});
        assert.equal(actualNode.nodes.length, 0);
    });

    it("button", function () {
        const actual = builder.button().close().done();

        assert.equal(actual.length, 1);

        const [actualNode] = actual;

        assert.equal(actualNode.tag, "button");
        assert.deepEqual(actualNode.attributes, {});
        assert.equal(actualNode.nodes.length, 0);
    });

    it("two div", function () {
        const actual = builder.div().close().div().close().done();

        assert.equal(actual.length, 2);

        const [node1, node2] = actual;

        assert.equal(node1.tag, "div");
        assert.equal(node2.tag, "div");
    });

    it("div and span", function () {
        const actual = builder.div().close().span().close().done();

        assert.equal(actual.length, 2);

        const [node1, node2] = actual;

        assert.equal(node1.tag, "div");
        assert.equal(node2.tag, "span");
    });

    it("is not root", function () {
        builder.div();

        assert.throws(() => builder.done(), Error, "it is not root");
    });

    it("push", function () {
        const modelFotPush = builder.button().close().done();

        const actual = builder.push(modelFotPush).done();

        const [actualNode] = actual;

        assert.equal(actualNode.tag, "button");
        assert.deepEqual(actualNode.attributes, {});
        assert.equal(actualNode.nodes.length, 0);
    });
});