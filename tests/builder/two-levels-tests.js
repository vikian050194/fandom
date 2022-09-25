import assert from "assert";

describe("builder: two levels", function () {
    it("div into div", function () {
        const actual = builder.div().div().close().close().done();

        assert.equal(actual.length, 1);

        const [root] = actual;

        assert.equal(root.tag, "div");
        assert.equal(root.nodes.length, 1);

        const [child] = root.nodes;

        assert.equal(child.tag, "div");
        assert.equal(child.nodes.length, 0);
    });

    it("span into div", function () {
        const actual = builder.div().span().close().close().done();

        assert.equal(actual.length, 1);

        const [root] = actual;

        assert.equal(root.tag, "div");
        assert.equal(root.nodes.length, 1);

        const [child] = root.nodes;

        assert.equal(child.tag, "span");
        assert.equal(child.nodes.length, 0);
    });

    it("two h1 into div", function () {
        const actual = builder.div().h1().close().h1().close().close().done();

        assert.equal(actual.length, 1);

        const [root] = actual;

        assert.equal(root.tag, "div");
        assert.equal(root.nodes.length, 2);

        const [ha, hb] = root.nodes;

        assert.equal(ha.tag, "h1");
        assert.equal(ha.nodes.length, 0);

        assert.equal(hb.tag, "h1");
        assert.equal(hb.nodes.length, 0);
    });
});