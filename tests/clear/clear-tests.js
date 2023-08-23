import assert from "assert";

describe("clear", function () {
    it("no elements before - no elements after", function () {
        const container = window.document.createElement("div");

        const elements = [];

        assert.equal(container.children.length, 0);

        clear(container, elements);

        assert.equal(container.children.length, 0);
    });

    it("two elements before - no elements after", function () {
        const container = window.document.createElement("div");
        container.appendChild(window.document.createElement("div"));
        container.appendChild(window.document.createElement("div"));

        assert.equal(container.children.length, 2);

        clear(container);

        assert.equal(container.children.length, 0);
    });
});