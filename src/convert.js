import { insert } from "./insert";

const createElement = (tag, attributes) => {
    const element = window.document.createElement(tag);

    if (attributes.classList && attributes.class) {
        throw new Error("Use either classList or class");
    }

    if (attributes.classList) {
        attributes.class = attributes.classList.join(" ");
        delete attributes["classList"];
    }

    if (attributes.style) {
        for (let key in attributes.style) {
            element.style[key] = attributes.style[key];
        }
        delete attributes["style"];
    }

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
        for (const [action, handler] of node.handlers) {
            element.addEventListener(action, handler);
        }
    }

    return elements;
};
