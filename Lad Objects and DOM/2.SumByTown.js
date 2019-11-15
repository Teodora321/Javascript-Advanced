function sumByTown(arr) {
    let towns = {};
    let town, income;

    for (let i = 0; i < arr.length; i += 2) {
        town = arr[i];
        income = Number(arr[i + 1]);

        if (towns.hasOwnProperty(town)) {
            towns[town] += income;
        } else {
            towns[town] = income;
        }
    }

    console.log(JSON.stringify(towns));
}


sumByTown([ 'Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4' ])