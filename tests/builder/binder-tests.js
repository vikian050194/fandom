import assert from "node:assert";

import { Binder } from "../../src/index.js";

describe("builder: binder", function () {
    it("single", function () {
        // Arrange
        const divBinder = new Binder(() => { });
        
        // Act
        const actual = builder.div().bind(divBinder).close().done();

        // Assert
        assert.equal(actual.length, 1);
        const [actualNode] = actual;
        assert.equal(actualNode.binders.length, 1);
        const binder = actualNode.binders[0];
        assert.equal(binder, divBinder);
    });

    it("couple", function () {
        // Arrange
        const firstDivBinder = new Binder(() => { });
        const secondDivBinder = new Binder(() => { });

        // Act
        const actual = builder.div().bind(firstDivBinder).bind(secondDivBinder).close().done();

        // Assert
        assert.equal(actual.length, 1);
        const [actualNode] = actual;
        assert.equal(actualNode.binders.length, 2);
        assert.equal(actualNode.binders[0], firstDivBinder);
    });
});