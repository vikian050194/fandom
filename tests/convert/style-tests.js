import assert from "node:assert";

describe("convert: style", function () {
    it("single", function () {
        // Arrange
        const nodes = [
            new Node("div", { style: { color: "red" } })
        ];

        // Act
        const actual = convert(nodes);
        const [domNode] = actual;

        // Assert
        assert.deepEqual(domNode.style, { color: "red" });
    });

    it("couple", function () {
        // Arrange
        const nodes = [
            new Node("div", { style: { color: "red", fontSize: "12px" } })
        ];

        // Act
        const actual = convert(nodes);
        const [domNode] = actual;

        // Assert
        assert.deepEqual(domNode.style, { color: "red", fontSize: "12px" });
    });
});