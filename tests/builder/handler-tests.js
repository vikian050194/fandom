import assert from "node:assert";

describe("builder: handler", function () {
    describe("chain", function () {
        it("click", function () {
            const clickHandler = () => { };
            const actual = builder.div().onClick(clickHandler).close().done();

            assert.equal(actual.length, 1);

            const [actualNode] = actual;

            assert.equal(actualNode.handlers.size, 1);

            const handler = actualNode.handlers.get("click");

            assert.equal(handler, clickHandler);
        });

        it("hover", function () {
            const hoverHandler = () => { };
            const actual = builder.div().onHover(hoverHandler).close().done();

            assert.equal(actual.length, 1);

            const [actualNode] = actual;

            assert.equal(actualNode.handlers.size, 1);

            const handler = actualNode.handlers.get("mouseenter");

            assert.equal(handler, hoverHandler);
        });

        it("change", function () {
            const changeHandler = () => { };
            const actual = builder.div().onChange(changeHandler).close().done();

            assert.equal(actual.length, 1);

            const [actualNode] = actual;

            assert.equal(actualNode.handlers.size, 1);

            const handler = actualNode.handlers.get("change");

            assert.equal(handler, changeHandler);
        });
    });

    describe("the set", function () {
        it("div's click & hover", function () {
            // Arrange
            const clickHandler = () => { };
            const hoverHandler = () => { };

            // Act
            const actual = builder.div(null, { click: clickHandler, hover: hoverHandler }).close().done();

            // Assert
            assert.equal(actual.length, 1);
            const [actualNode] = actual;
            assert.equal(actualNode.handlers.size, 2);
            assert.equal(actualNode.handlers.get("click"), clickHandler);
            assert.equal(actualNode.handlers.get("hover"), hoverHandler);
        });

        it("input's change", function () {
            // Arrange
            const changeHandler = () => { };

            // Act
            const actual = builder.input(null, { change: changeHandler }).done();

            // Assert
            assert.equal(actual.length, 1);
            const [actualNode] = actual;
            assert.equal(actualNode.handlers.size, 1);
            assert.equal(actualNode.handlers.get("change"), changeHandler);
        });
    });
});