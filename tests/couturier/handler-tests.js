import assert from "assert";

describe("couturier: handler", function () {
    it("click", function () {
        const clickHandler = () => {};
        const actual = couturier.div().onClick(clickHandler).close().done();

        assert.equal(actual.length, 1);

        const [actualNode] = actual;

        assert.equal(actualNode.handlers.size, 1);

        const handler = actualNode.handlers.get("click");

        assert.equal(handler, clickHandler);
    });

    it("hover", function () {
        const hoverHandler = () => {};
        const actual = couturier.div().onHover(hoverHandler).close().done();

        assert.equal(actual.length, 1);

        const [actualNode] = actual;

        assert.equal(actualNode.handlers.size, 1);

        const handler = actualNode.handlers.get("mouseenter");

        assert.equal(handler, hoverHandler);
    });
});