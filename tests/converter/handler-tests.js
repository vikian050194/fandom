import assert from "assert";
import { Node } from "../../src/state";

describe("Converter: handler", function () {
    it("click", function () {
        const div = new Node("div");
        const clickHandler = () => {};
        div.handlers.set("click", clickHandler);

        const nodes = [div];

        const actual = converter.convert(nodes);

        assert.equal(actual.length, 1);

        const [domNode] = actual;

        assert.equal(domNode.onclick, clickHandler);
    });

    it("hover", function () {
        const div = new Node("div");
        const hoverHandler = () => {};
        div.handlers.set("mouseenter", hoverHandler);

        const nodes = [div];

        const actual = converter.convert(nodes);

        assert.equal(actual.length, 1);

        const [domNode] = actual;

        assert.equal(domNode.onmouseenter, hoverHandler);
    });
});