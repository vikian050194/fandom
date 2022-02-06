import { TreeBuilder, TreeConverter } from "../src";

export const mochaHooks = {
    beforeAll(done) {
        global.window = {
            document: {
                createElement: tag => {
                    const children = [];
                    return {
                        tag,
                        children,
                        appendChild: (...x) => children.push(...x)
                    };
                },
                createTextNode: value => {
                    return { tag: "text", value };
                }
            }
        };

        done();
    },

    beforeEach(done) {
        global.builder = new TreeBuilder();
        global.converter = new TreeConverter();

        done();
    }
};