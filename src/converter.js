export class TreeConverter {
    convert(nodes) {
        const elements = [];

        for (const node of nodes) {
            const element = this._createElement(node.tag, node.attributes);
            elements.push(element);

            // TODO extract method
            if (node.text) {
                const text = this._createText(node.text);
                element.appendChild(text);
            }

            // TODO extract method + refactoring (do not use recursion)
            if (node.nodes.length) {
                const children = this.convert(node.nodes);
                for (const c of children) {
                    element.appendChild(c);
                }
            }

            // TODO extract method
            if (node.handlers.size) {
                for (const [action, handler] of node.handlers) {
                    element.addEventListener(action, handler);
                }
            }
        }

        return elements;
    }

    _createElement(tag, attributes) {
        const element = window.document.createElement(tag);

        for (let key in attributes) {
            element.setAttribute(key, attributes[key]);
        }

        return element;
    }

    _createText(value) {
        return window.document.createTextNode(value);
    }
}