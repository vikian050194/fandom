export class Node {
    constructor(tag, attributes = {}, nodes = []) {
        this.tag = tag;
        this.attributes = attributes;
        this.nodes = nodes;
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

    jump(){
        this.index = this.stack.pop();
    }

    get isRoot(){
        return this.stack.length === 0;
    }
}
