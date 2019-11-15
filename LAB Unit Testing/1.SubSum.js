function solve(arr, firstIndex, secondIndex) {

    if (!Array.isArray(arr)) {
        return NaN;
    }
    if (firstIndex < 0) {
        firstIndex = 0;
    }
    if (secondIndex >= arr.length) {
        secondIndex = arr.length - 1;
    }
    if (arr.length === 0) {
        return 0;
    }

    if (!arr.every(Number)) {
        return NaN;
    }

    return arr.slice(firstIndex, secondIndex + 1)
        .map(Number)
        .reduce((a, b) => a + b);
}