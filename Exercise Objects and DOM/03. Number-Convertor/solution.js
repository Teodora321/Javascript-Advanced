function solve() {
    let button = document.getElementsByTagName('button')[0];

    let inputElement = document.getElementById('input');
    let selectElement = document.getElementById('selectMenuTo')

    let binary = document.createElement('option');
    binary.setAttribute('value','binary');
    binary.textContent = 'Binary';

    let hexadecimal = document.createElement('option');
    hexadecimal.setAttribute('value', 'hexadecimal');
    hexadecimal.textContent = 'Hexadecimal';

    selectElement.appendChild(binary);
    selectElement.appendChild(hexadecimal);

    let result = document.getElementById('result');

    button.addEventListener('click', convert);

    function convert(){
        if (selectElement.value==='binary'){
            result.value = Number(inputElement.value).toString(2);
        }else if (selectElement.value ==='hexadecimal'){
            result.value =Number(inputElement.value).toString(16).toUpperCase();
        }

    }

}