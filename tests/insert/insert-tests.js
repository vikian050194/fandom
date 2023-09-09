import assert from "node:assert";

describe("insert", function () {
    it("no elements", function () {
        const container = window.document.createElement("div");

        const elements = [];

        insert(container, elements);

        assert.equal(container.children.length, 0);
    });

    it("two elements", function () {
        const container = window.document.createElement("div");
        const firstDiv = window.document.createElement("div");
        const secondDiv = window.document.createElement("div");

        const elements = [firstDiv, secondDiv];

        insert(container, elements);

        assert.equal(container.children.length, 2);
        assert.deepEqual(container.children[0], firstDiv);
        assert.deepEqual(container.children[1], secondDiv);
    });
});