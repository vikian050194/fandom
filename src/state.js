export class Node {
    constructor(tag, attributes = {}) {
        this.tag = tag;
        this.attributes = attributes;
        this.nodes = [];
        this.text = null;
        this.handlers = new Map();
        this.binders = [];
    }
}

const ROOT_TAG = "ROOT";

export class RootNode extends Node {
    constructor() {
        super(ROOT_TAG);
    }
}

export class State {
    constructor() {
        this.index = new RootNode();
        this.stack = [];
    }

    add(node) {
        this.index.nodes.push(node);
    }

    insert(node) {
        this.add(node);
        this.stack.push(this.index);
        this.index = node;
    }

    setText(value) {
        this.index.text = value;
    }

    handle(action, handler) {
        this.index.handlers.set(action, handler);
    }

    static handle(node, action, handler) {
        node.handlers.set(action, handler);
    }

    jump() {
        this.index = this.stack.pop();
    }

    get isRoot() {
        return this.stack.length === 0;
    }

    bind(binder) {
        this.index.binders.push(binder);
    }
}
