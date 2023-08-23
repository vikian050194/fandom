import { clear } from "./clear";
import { insert } from "./insert";

export const replace = (container, elements) => {
    clear(container);
    insert(container, elements);
};
