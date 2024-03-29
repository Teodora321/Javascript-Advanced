class Kitchen {
    constructor(budget) {
        this.budget = budget;
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];
    }
    loadProducts(products) {
        for (let product of products) {
            let [productName, productQuantity, productPrice] = product.split(' ');
            productQuantity = +productQuantity;
            productPrice = +productPrice;
            if (this.budget >= productPrice) {

                if (!this.productsInStock.hasOwnProperty(productName)) {
                    this.productsInStock[productName] = 0;
                }
                this.productsInStock[productName] += productQuantity;
                this.budget -= productPrice;
                this.actionsHistory.push(`Successfully loaded ${productQuantity} ${productName}`)


            } else {
                this.actionsHistory.push(`There was not enough money to load ${productQuantity} ${productName}`)
            }
        }
        return this.actionsHistory.join('\n');
    }
    addToMenu(meal, neededProductsArray, price) {
        for (let product of neededProductsArray) {
            let [productName, productQuantity] = product.split(' ');
            if (!this.menu.hasOwnProperty(meal)) {
                this.menu[meal] = { meal, productName, productQuantity, price };
                return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`
            } else {
                return `The ${meal} is already in our menu, try something different.`

            }
        }
    }
    showTheMenu() {
        let meals = Object.keys(this.menu);
        let result = ''
        if (meals.length !== 0) {
            for (let mealName of Object.keys(this.menu)) {
                result += `${mealName} - $ ${this.menu[mealName].price}\n`;
            }
            return result;
        } else {
            return `Our menu is not ready yet, please come later...`
        }
    }
    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) {
            return (
                `There is not ${meal} yet in our menu, ` +
                'do you want to order something else?'
            )
        }

        let products = this.menu[meal].products

        if (
            products.some(p => {
                let [productName, productQuantity] = p.split(' ')
                return (
                    !this.productsInStock.hasOwnProperty(productName) ||
                    this.productsInStock[productName] < productQuantity
                )
            })
        ) {
            return (
                'For the time being, we cannot complete your order ' +
                `(${meal}), we are very sorry...`
            )
        }

        products.forEach(product => {
            let [productName, productQuantity] = product.split(' ')
            this.productsInStock[productName] -= productQuantity
        })

        let price = this.menu[meal].price
        this.budget += price

        return (
            `Your order (${meal}) will be completed ` +
            `in the next 30 minutes and will cost you ${price}.`
        )
    }
}

let kitchen = new Kitchen(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showTheMenu());