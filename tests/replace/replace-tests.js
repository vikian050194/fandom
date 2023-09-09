import assert from "node:assert";

describe("replace", function () {
    it("no elements before - no elements after", function () {
        const container = window.document.createElement("div");

        const elements = [];

        assert.equal(container.children.length, 0);

        replace(container, elements);

        assert.equal(container.children.length, 0);
    });

    it("two elements before - no elements after", function () {
        const container = window.document.createElement("div");
        container.appendChild(window.document.createElement("div"));
        container.appendChild(window.document.createElement("div"));

        const elements = [];

        assert.equal(container.children.length, 2);

        replace(container, elements);

        assert.equal(container.children.length, 0);
    });

    it("two elements before - two elements after", function () {
        const container = window.document.createElement("div");
        container.appendChild(window.document.createElement("div"));
        container.appendChild(window.document.createElement("div"));

        const firstDiv = window.document.createElement("div");
        const secondDiv = window.document.createElement("div");

        const elements = [firstDiv, secondDiv];

        assert.equal(container.children.length, 2);

        replace(container, elements);

        assert.equal(container.children.length, 2);
        assert.deepEqual(container.children[0], firstDiv);
        assert.deepEqual(container.children[1], secondDiv);
    });
});