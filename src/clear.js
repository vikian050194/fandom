export const clear = (root) => {
    while (root.firstChild) {
        root.removeChild(root.lastChild);
    }
};
