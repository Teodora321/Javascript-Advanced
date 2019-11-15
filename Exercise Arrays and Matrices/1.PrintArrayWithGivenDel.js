function solve(params) {
    let delimeter = params.pop();
    let result = params.join(delimeter);
    console.log(result)

}
solve(['One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-'])