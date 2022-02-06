import { TreeBuilder, TreeConverter } from "../src";

export const mochaHooks = {
    beforeAll(done) {
        global.window = {
            document: {
                createElement: tag => {
                    const children = [];
                    const mockElement = {
                        tag,
                        children,
                        appendChild: (...x) => children.push(...x)
                    };
                    
                    const addEventListener = (action, handler) => {
                        mockElement[`on${action}`] = handler;
                    };

                    mockElement.addEventListener = addEventListener;

                    return mockElement;
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