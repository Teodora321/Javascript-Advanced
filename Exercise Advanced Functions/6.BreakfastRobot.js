(function () {
    const ingredientsObj = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 };
    const recipesObj = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };

    const prepare = (recipe, neededQty)=>{
        const neededIngredients = Object.entries(recipesObj[recipe]);
        for (let [ing, qty] of neededIngredients) {
            let productsStored = ingredientsObj[ing] * neededQty;
            if (qty > productsStored) {
                return `Error: not enough ${ing} in stock`
            }
        }
        for (let[ing, qty] of neededIngredients) {
            ingredientsObj[ing] -= neededQty * qty;
        }
        return `Success`

    }

    return function (input) {
        let tokens = input.split(' ');
        let command = tokens[0];

        if (command === 'restock') {
            ingredientsObj[tokens[1]] += Number(tokens[2]);
            return `Success`;
        } else if (command === 'prepare') {
            return prepare(tokens[1], Number(tokens[2]));

        } else if (command === 'report') {
            return Object.entries(ingredientsObj)
                .map((kvp) => `${kvp[0]}=${kvp[1]}`)
                . join(' ');
        }

    }

})()
console.log(manager('restock flavour 50'))
console.log(manager('prepare lemonade 4'));
