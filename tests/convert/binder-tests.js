import assert from "node:assert";

import { Binder } from "../../src/index.js";

describe("convert: binder", function () {
    it("single", function () {
        // Arrange
        let actualElement = null;
        const func = (e) => { actualElement = e; };
        const binder = new Binder(func);
        const div = new Node("div");
        div.binders.push(binder);

        // Act
        const nodes = [div];
        const elements = convert(nodes);
        binder.call();

        // Assert
        assert.equal(elements.length, 1);
        const [expectedElement] = elements;
        assert.equal(actualElement, expectedElement);
    });

    it("couple", function () {
        // Arrange
        let firstActualElement = null;
        const firstFunc = (e) => { firstActualElement = e; };
        const firstBinder = new Binder(firstFunc);
        let secondActualElement = null;
        const secondFunc = (e) => { secondActualElement = e; };
        const secondBinder = new Binder(secondFunc);
        const div = new Node("div");
        div.binders.push(firstBinder);
        div.binders.push(secondBinder);

        // Act
        const nodes = [div];
        const elements = convert(nodes);
        firstBinder.call();
        secondBinder.call();

        // Assert
        assert.equal(elements.length, 1);
        const [expectedElement] = elements;
        assert.equal(firstActualElement, expectedElement);
        assert.equal(secondActualElement, expectedElement);
    });
});