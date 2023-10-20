export class Binder {
    constructor(func) {
        this.func = func;
        this.call = this.call.bind(this);
    }

    init($root) {
        this.$root = $root;
    }

    call() {
        this.func(this.$root);
    }
}