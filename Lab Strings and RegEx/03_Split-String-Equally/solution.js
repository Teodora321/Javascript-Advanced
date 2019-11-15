function solve() {
    let text = document.getElementById('text').value;
    let groupSize = Number(document.getElementById('number').value);

    if (text.length % groupSize > 0) {
        let reminder = text.length % groupSize;
        let charTFill  = groupSize-reminder;
        text=text + text.substr(0, charTFill);
        
    }
    let result = [];
    for( let i = 0; i < text.length; i+=groupSize){
        result.push(text.substr(i, groupSize));
    }
    
    document.getElementById('result').innerHTML=result.join(' ');
}