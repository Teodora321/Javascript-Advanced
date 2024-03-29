class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    };

    registerChild(name, grade, budget) {
        if (budget < this.budget) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`
        };

        if (this.kids.hasOwnProperty(grade)) {
            for (let kid of this.kids[grade]) {
                if (kid === `${name}-${budget}`) {
                    return `${name} is already in the list for this ${this.destination} vacation.`
                }
            }
            this.kids[grade].push(`${name}-${budget}`);
        } else {
            this.kids[grade] = [];
            this.kids[grade].push(`${name}-${budget}`);
        }
        return this.kids[grade];
    }
    removeChild(name, grade) {
        if (this.kids.hasOwnProperty(grade)) {
            for (let kid of this.kids[grade]) {
                let [kidName, budget] = kid.split('-');
                let index = this.kids[grade].indexOf(kid);
                if (kidName === name) {
                    this.kids[grade].splice(index, 1);
                    return this.kids[grade];
                }

            }
        } else {
            return `We couldn't find ${name} in ${grade} grade.`
        }

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
    get numberOfChildren() {
        this._numberOfChildren = 0;
        for (let grade of this.kids[grade]) {
            this.kids[grade] += this.kids[grade].length;
        }
        return this._numberOfChildren;
    }
}

let vacation = new Vacation('Miss Elizabeth', 'Dubai', 2000);
vacation.registerChild('Gosho', 5, 3000);
vacation.registerChild('Lilly', 6, 1500);
vacation.registerChild('Pesho', 7, 4000);
vacation.registerChild('Tanya', 5, 5000);
vacation.registerChild('Mitko', 10, 5500)
console.log(vacation.toString());

