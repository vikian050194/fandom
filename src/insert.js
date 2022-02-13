export const insert = (container, elements) => {
    for (const element of elements) {
        container.appendChild(element);
    }
};
