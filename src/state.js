export class State {
    constructor(index, elements = []) {
        this.index = index;
        this.elements = elements;
    }

    addElement(element) {
        const index = element;
        const elements = [...this.elements, element];

        return new State(index, elements);
    }

    insertElement(element) {
        const index = element;
        this.index.appendChild(element);

        return new State(index, this.elements);
    }

}
