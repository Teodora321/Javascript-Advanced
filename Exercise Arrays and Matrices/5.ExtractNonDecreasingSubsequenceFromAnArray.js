function solve(input) {
    let biggest = input[0];
    let result = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] >= biggest) {
            result.push(input[i]);
            biggest = input[i];
        }
    }
    console.log(result.join('\n'))
}
solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24])