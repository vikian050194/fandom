import assert from "assert";

describe("Simple", function () {
    it("div", function () {
        const expected = [{ tag: "div" }];

        const actual = nb.div().build();

        assert.deepEqual(actual, expected);
    });

    it("span", function () {
        const expected = [{ tag: "span" }];

        const actual = nb.span().build();

        assert.deepEqual(actual, expected);
    });

    it("h1", function () {
        const expected = [{ tag: "h1" }];

        const actual = nb.h1().build();

        assert.deepEqual(actual, expected);
    });

    it("custom", function () {
        const expected = [{ tag: "custom" }];

        const actual = nb.addElement("custom").build();

        assert.deepEqual(actual, expected);
    });
});