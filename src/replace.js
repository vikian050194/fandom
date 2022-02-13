import { insert } from "./insert";

export const replace = (container, elements) => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    insert(container, elements);
};
