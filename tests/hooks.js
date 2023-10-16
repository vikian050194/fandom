import { Builder, convert, clear, insert, replace } from "../src";
import { Node } from "../src/state";

class MockDomElement {
    constructor(tag) {
        this.tag = tag;
        this.children = [];
        this.style = {};
    }

    get firstChild() {
        if (this.children.length) {
            return this.children[0];
        }

        return undefined;
    }

    appendChild = (...x) => this.children.push(...x);

    removeChild = (x) => {
        const index = this.children.indexOf(x);
        this.children.splice(index, 1);
    };

    addEventListener = (action, handler) => {
        this[`on${action}`] = handler;
    };

    setAttribute = (key, value) => {
        this[key] = value;
    };
}

export const mochaHooks = {
    beforeAll(done) {
        global.window = {
            document: {
                createElement: tag => {
                    return new MockDomElement(tag);
                },
                createTextNode: value => {
                    return { tag: "text", value };
                }
            }
        };

        global.convert = convert;
        global.clear = clear;
        global.insert = insert;
        global.replace = replace;

        global.Node = Node;

        done();
    },

    beforeEach(done) {
        global.builder = new Builder();

        done();
    }
};