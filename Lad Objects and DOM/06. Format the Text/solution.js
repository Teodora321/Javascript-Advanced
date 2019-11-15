function solve() {
  let inputElement = document.getElementById('input');
  let outputElement = document.getElementById('output');

  let textInput = inputElement.textContent
    .split('.')
    .map(x=>(x+='.'));

    for(let i = 0; i < textInput.length; i++){
      if (i%3===0){
        let p = document.createElement('p');
        p.textContent=textInput.slice(i, i + 3).join('');
        outputElement.appendChild(p);
      }

    }

}