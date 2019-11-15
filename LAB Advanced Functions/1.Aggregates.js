function solve(inputArr) {
    console.log(`Sum = ` + inputArr.reduce((a, b) => a + b));
    console.log(`Min = ` + Math.min(...inputArr));
    console.log(`Max = ` + Math.max(...inputArr));
    console.log(`Product = ` + inputArr.reduce((a, b) => a * b));
    console.log(`Join = ` + inputArr.join(''));

}
solve([2, 3, 10, 5])


// The output should be the printed on the console.
// Display the sum of all elements in the array, the value of the smallest,
// the value of the biggest,
// the product of all elements and a string of all elements concatenated.