import { State, Node } from "./state";

export class Builder {
    constructor() {
        this.state = new State();
    }

    just(tag, attributes) {
        this.state.add(new Node(tag, attributes));
        return this;
    }

    open(tag, attributes) {
        this.state.insert(new Node(tag, attributes));
        return this;
    }

    text(value) {
        this.state.setText(value);
        return this;
    }

    on(action, handler) {
        this.state.handle(action, handler);
    }

    onClick(handler) {
        this.on("click", handler);
        return this;
    }

    onChange(handler) {
        this.on("change", handler);
        return this;
    }

    onHover(handler) {
        this.on("mouseenter", handler);
        return this;
    }

    close() {
        this.state.jump();
        return this;
    }

    done() {
        if (this.state.isRoot) {
            const result = this.state.index.nodes;
            this.state = new State();
            return result;
        }

        throw new Error("it is not root");
    }

    div(attributes) {
        this.open("div", attributes);
        return this;
    }

    span(attributes) {
        this.open("span", attributes);
        return this;
    }

    h1(attributes) {
        this.open("h1", attributes);
        return this;
    }

    button(attributes) {
        this.open("button", attributes);
        return this;
    }

    input(attributes) {
        this.just("input", attributes);
        return this;
    }

    push(models) {
        for (const model of models) {
            this.state.add(model);
        }
        return this;
    }
}