import assert from "node:assert";

describe("builder: class and classList", function () {
    it("class", function () {
        const actual = builder.div({ class: "style1" }).close().done();

        assert.equal(actual.length, 1);

        const [actualNode] = actual;

        assert.equal(actualNode.tag, "div");
        assert.deepEqual(actualNode.attributes, { class: "style1" });
        assert.equal(actualNode.nodes.length, 0);
    });

    it("classList", function () {
        const actual = builder.div({ classList: ["style1", "style2"] }).close().done();

        assert.equal(actual.length, 1);

        const [actualNode] = actual;

        assert.equal(actualNode.tag, "div");
        assert.deepEqual(actualNode.attributes, { classList: ["style1", "style2"] });
        assert.equal(actualNode.nodes.length, 0);
    });

    it("class and classList", function () {
        const actual = builder.div({ class: "style1", classList: ["style2", "style3"] }).close().done();

        assert.equal(actual.length, 1);

        const [actualNode] = actual;

        assert.equal(actualNode.tag, "div");
        assert.deepEqual(actualNode.attributes, { class: "style1", classList: ["style2", "style3"] });
        assert.equal(actualNode.nodes.length, 0);
    });
});