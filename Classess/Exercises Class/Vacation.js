class Vacation{
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    };
    registerChild(name, grade, budget) {
        if (budget < this.budget) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`
        }
        if (!this.kids.hasOwnProperty(grade)) {
            this.kids[grade] = [];
            this.kids[grade].push(`${name}-${budget}`)
        } else {
            for (let kid of this.kids[grade]) {
                if (kid === `${name}-${budget}`) {
                    return `${name} is already in the list for this ${this.destination} vacation.`
                };
            };
            this.kids[grade].push(`${name}-${budget}`);
        }
        return this.kids[grade];
    }
    removeChild(name, grade) {
        if (this.kids.hasOwnProperty(grade)) {
            for (let kid of this.kids[grade]) {
                let kidInfo = kid.split('-');
                let kidName = kidInfo[0];
                let kidIndex = this.kids[grade].indexOf(kid);
                if (kidName === name) {
                    this.kids[grade].splice(kidIndex, 1);
                    return this.kids[grade];
                }
            }
        }
        return `We couldn't find ${name} in ${grade} grade.`

    }
    get numberOfChildren() {
        this._numberOfChildren = 0;
        for (let grade in this.kids) {
            this._numberOfChildren += this.kids[grade].length;
        }
        return this._numberOfChildren;
    }

    toString() {
        if (this.numberOfChildren === 0) {
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`
        }
        Object.entries(this.kids).sort((a, b) => a[0] - b[0]);
        let result = `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}\n`
        for (let grade in this.kids) {
            result += `Grade: ${grade}\n`
            let current = 1;
            for (let kid of this.kids[grade]) {
                result += `${current}. ${kid}\n`;
                current++;
            }
        }
        return result;
    }
}
let vacation = new Vacation('Mr Pesho', 'San diego', 2000);
vacation.registerChild('Gosho', 5, 2000);
vacation.registerChild('Lilly', 6, 2100);

console.log(vacation.removeChild('Gosho', 9));

vacation.registerChild('Pesho', 6, 2400);
vacation.registerChild('Gosho', 5, 2000);

console.log(vacation.removeChild('Lilly', 6));
console.log(vacation.registerChild('Tanya', 5, 6000))



//{grade:[{name:'Ivan', budget:23}]}