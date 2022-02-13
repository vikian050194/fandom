import { insert } from "./insert";

const createElement = (tag, attributes) => {
    const element = window.document.createElement(tag);

    for (let key in attributes) {
        element.setAttribute(key, attributes[key]);
    }

    return element;
};

const createTextNode = (value) => {
    return window.document.createTextNode(value);
};

export const convert = (nodes) => {
    const elements = [];

    for (const node of nodes) {
        const element = createElement(node.tag, node.attributes);
        elements.push(element);

        // TODO extract method
        if (node.text) {
            const text = createTextNode(node.text);
            element.appendChild(text);
        }

        // TODO extract method + refactoring (do not use recursion)
        if (node.nodes.length) {
            const children = convert(node.nodes);
            insert(element, children);
        }

        // TODO extract method
        if (node.handlers.size) {
            for (const [action, handler] of node.handlers) {
                element.addEventListener(action, handler);
            }
        }
    }

    return elements;
};
