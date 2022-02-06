import { State, Node } from "./state";

export class TreeBuilder {
    constructor() {
        this.state = new State();
    }

    just(tag, attributes) {
        this.state.add(new Node(tag, attributes));
        return this;
    }

    open(tag, attributes){
        this.state.insert(new Node(tag, attributes));
        return this;
    }

    text(value){
        this.state.setText(value);
        return this;
    }

    _addHandler(action, handler) {
        this.state.handle(action, handler);
    }

    onClick(handler) {
        this._addHandler("click", handler);

        return this;
    }

    onHover(handler) {
        this._addHandler("mouseenter", handler);

        return this;
    }

    close(){
        this.state.jump();
        return this;
    }

    build() {
        if(this.state.isRoot){
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

    input(attributes) {
        this.just("input", attributes);
        return this;
    }
}
