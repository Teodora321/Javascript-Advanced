function solve(params) {
    let arr = [];
    let number = 1;
    arr.push(number);
    for (let i = 1; i < params.length; i++) {
        number++
        if (params[i] === 'add') {
            arr.push(number)
        } else if (params[i] === 'remove') {
            arr.pop();
        } 
    }
    if (arr.length===0) {
        console.log('Empty')
    } else {
        console.log(arr.join('\n'))
    }
}
solve(['add',
    'add',
    'add',
    'add',
    'add'])