let test = (function () {
    let sum = 0;
    return function add(number) {
        sum += number
        add.toString = function () {
            return sum;
        };
        return add
    }
    
})();
console.log(test(1)(3)(10).toString())