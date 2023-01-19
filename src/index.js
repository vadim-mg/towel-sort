module.exports = function towelSort(matrix) {
    if (!matrix) return [];

    return matrix.reduce(
        (acc, val, i) => [...acc, ...(i % 2 ? val.reverse() : val)],
        []
    );
};
