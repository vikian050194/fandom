import assert from "assert";

describe("Builder: handler", function () {
    it("click", function () {
        const clickHandler = () => {};
        const actual = builder.div().onClick(clickHandler).close().build();

        assert.equal(actual.length, 1);

        const [actualNode] = actual;

        assert.equal(actualNode.handlers.size, 1);

        const handler = actualNode.handlers.get("click");

        assert.equal(handler, clickHandler);
    });

    it("hover", function () {
        const hoverHandler = () => {};
        const actual = builder.div().onHover(hoverHandler).close().build();

        assert.equal(actual.length, 1);

        const [actualNode] = actual;

        assert.equal(actualNode.handlers.size, 1);

        const handler = actualNode.handlers.get("mouseenter");

        assert.equal(handler, hoverHandler);
    });
});