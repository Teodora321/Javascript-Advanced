function solve(input) {
    let result = [];

    input.slice(1)

        .forEach(element => {
            let [Town, Latitude, Longitude] = element
                .split('|')
                .filter(x => x !== '')
                .map(x => x.trim(' '))


            result.push({ Town, Latitude: +Latitude, Longitude: +Longitude })

        })
    console.log(JSON.stringify(result))


}
solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])


