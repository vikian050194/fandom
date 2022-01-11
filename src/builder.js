import { State } from "./state";

export class NodeBuilder {
    constructor() {
        this.state = new State();
    }

    _createElement(tag, attributes) {
        const element = document.createElement(tag);

        for (let key in attributes) {
            element.setAttribute(key, attributes[key]);
        }

        return element;
    }

    _addElement(tag, attributes) {
        const element = this._createElement(tag, attributes);
        this.state = this.state.addElement(element);

        return this;
    }

    reset() {
        this.state = new State();
    }

    addElement(element) {
        this.state = this.state.addElement(element);

        return this;
    }

    _insertElement(tag, attributes) {
        const element = this._createElement(tag, attributes);
        this.state = this.state.insertElement(element);

        return this;
    }

    insertElement(element) {
        this.state = this.state.insertElement(element);

        return this;
    }

    div(attributes) {
        return this._addElement("div", attributes);
    }

    span(attributes) {
        return this._addElement("span", attributes);
    }

    h1(attributes) {
        return this._addElement("h1", attributes);
    }

    withText(text) {
        const content = document.createTextNode(text);
        this.state.index.appendChild(content);

        return this;
    }

    withDiv(attributes) {
        return this._insertElement("div", attributes);
    }

    _addHandler(action, handler) {
        this.state.index.addEventListener(action, handler);
    }

    onClick(handler) {
        this._addHandler("click", handler);

        return this;
    }

    build() {
        return this.state.elements;
    }

    wrap($wrapper) {
        for (let element of this.state.elements) {
            $wrapper.appendChild(element);
        }
    }
}
