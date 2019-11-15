function solve(input){
    let words={};

    input[0].match(/\w+/g)
    .forEach(word=>{
        if(!words.hasOwnProperty(word)){
            words[word]=0;
        }
        words[word]++
    })
    console.log(JSON.stringify(words))  
}
solve([ 'Far too slow, you\'re far too slow.' ])