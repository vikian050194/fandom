import assert from "node:assert";

import { Binder } from "../../src/index.js";

describe("binder", function () {
    it("init and call", function () {
        // Arrange
        let expectedElement = {};
        let actualElement = null;
        const func = (e) => { actualElement = e; };
        const binder = new Binder(func);

        // Act
        binder.init(expectedElement);
        binder.call();

        // Assert
        assert.equal(actualElement, expectedElement);
    });
});