export class TreeConverter {
    convert(nodes) {
        const elements = [];

        for (const node of nodes) {
            const element = this._createElement(node.tag, node.attributes);
            elements.push(element);

            if(node.text){
                const text = this._createText(node.text);
                element.appendChild(text);
            }

            if(node.nodes.length){
                const children = this.convert(node.nodes);
                element.appendChild(...children);
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

    _addHandler(action, handler) {
        this.state.handle(action, handler);
    }

    onClick(handler) {
        this._addHandler("click", handler);

        return this;
    }

    wrap(wrapper) {
        for (let element of this.state.elements) {
            wrapper.appendChild(element);
        }
    }
}