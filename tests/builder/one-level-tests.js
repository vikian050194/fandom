import assert from "assert";

describe("One level", function () {
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