function solve(input){
    let towns = {};

    for(let i =0; i<input.length; i++){
        let [town, population] = input[i].split(' <-> ');
        population = +population;
        
        if (!towns.hasOwnProperty(town)){
            towns[town]=population;
        }else{
            towns[town]+=population;
        }
}

Object.entries(towns).forEach(([town,population])=> console.log(`${town} : ${population}`))

}
solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'Sofia <-> 1',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);