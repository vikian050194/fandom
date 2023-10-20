import { clear } from "./clear.js";
import { insert } from "./insert.js";

export const replace = (container, elements) => {
    clear(container);
    insert(container, elements);
};
