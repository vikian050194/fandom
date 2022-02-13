import { Couturier, convert, insert, replace } from "../src";
import { Node } from "../src/state";

class MockDomElement {
    constructor(tag) {
        this.tag = tag;
        this.children = [];
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
        global.insert = insert;
        global.replace = replace;

        global.Node = Node;

        done();
    },

    beforeEach(done) {
        global.couturier = new Couturier();

        done();
    }
};