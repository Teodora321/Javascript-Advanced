function solve() {
	let input = document.getElementById('input').value;
	let result = document.getElementById('resultOutput');

	let weight = input;
	weight = weight
        .toString()
        .split('')
        .map(Number)
        .reduce((a, b) => a + b, 0);

    let sum = weight % 9 || 9;

    let outputResult = input
        .slice(sum, input.length - sum)
        .match(/.{1,8}/gi)
        .map(e => String.fromCharCode(Number.parseInt(e, 2)))
        .filter(e => /[A-Za-z\s]/.test(e))
		.join('');

	result.textContent=outputResult;
		
	
}