import assert from "assert";
import { Node } from "../../src/state";

describe("Converter: two levels", function () {
    it("div into div", function () {
        const firstDiv = new Node("div");
        const secondDiv = new Node("div");
        firstDiv.nodes.push(secondDiv);

        const nodes = [firstDiv];

        const actual = converter.convert(nodes);

        assert.equal(actual.length, 1);

        const [rootNode] = actual;
        const [innerNode] = rootNode.children;

        assert.equal(rootNode.tag, "div");
        assert.equal(innerNode.tag, "div");
    });

    it("span into div", function () {
        const div = new Node("div");
        const span = new Node("span");
        div.nodes.push(span);

        const nodes = [div];

        const actual = converter.convert(nodes);

        assert.equal(actual.length, 1);

        const [rootNode] = actual;
        const [innerNode] = rootNode.children;

        assert.equal(rootNode.tag, "div");
        assert.equal(innerNode.tag, "span");
    });

    it("two h1 into div", function () {
        const div = new Node("div");
        const firstH = new Node("h1");
        const secondH = new Node("h1");
        div.nodes.push(firstH, secondH);

        const nodes = [div];

        const actual = converter.convert(nodes);

        assert.equal(actual.length, 1);

        const [rootNode] = actual;
        const [innerNode1, innerNode2] = rootNode.children;

        assert.equal(rootNode.tag, "div");
        assert.equal(innerNode1.tag, "h1");
        assert.equal(innerNode2.tag, "h1");
    });
});