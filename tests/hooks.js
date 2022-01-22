import { NodeBuilder } from "../src";

export const mochaHooks = {
    beforeAll(done) {
        global.window = {
            document: {
                createElement: tag => {
                    return { tag };
                }
            }
        };

        done();
    },

    beforeEach(done) {
        global.nb = new NodeBuilder();

        done();
    }
};