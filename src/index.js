// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    return matrix
        .map((el, i) => {
            if (i % 2) return el.reverse();
            return el;
        })
        .flat();
};
