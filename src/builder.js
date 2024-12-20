import { State, Node } from "./state.js";

export class Builder {
    constructor() {
        this.state = new State();
    }

    just(tag, attributes, handlers) {
        const node = new Node(tag, attributes);
        this.state.add(node);
        if (handlers) {
            for (const key in handlers) {
                State.handle(node, key, handlers[key]);
            }
        }
        return this;
    }

    open(tag, attributes, handlers) {
        this.state.insert(new Node(tag, attributes));
        if (handlers) {
            for (const key in handlers) {
                this.on(key, handlers[key]);
            }
        }
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

    close(count = 1) {
        for (let i = 0; i < count; i++) {
            this.state.jump();
        }
        return this;
    }

    done() {
        if (this.state.isRoot) {
            const result = this.state.index.nodes;
            this.state = new State();
            return result;
        }

        throw new Error("Wrong state: there are some unclosed items");
    }

    div(attributes, handlers) {
        this.open("div", attributes, handlers);
        return this;
    }

    span(attributes, handlers) {
        this.open("span", attributes, handlers);
        return this;
    }

    h1(attributes, handlers) {
        this.open("h1", attributes, handlers);
        return this;
    }

    button(attributes, handlers) {
        this.open("button", attributes, handlers);
        return this;
    }

    input(attributes, handlers) {
        this.just("input", attributes, handlers);
        return this;
    }

    checkbox(attributes, handlers) {
        const checkboxAttributes = { ...attributes, type: "checkbox" };
        this.just("input", checkboxAttributes, handlers);
        return this;
    }

    push(models) {
        for (const model of models) {
            this.state.add(model);
        }
        return this;
    }

    bind(binder) {
        this.state.bind(binder);
        return this;
    }
}