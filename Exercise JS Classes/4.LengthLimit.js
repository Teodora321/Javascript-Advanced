class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }
    increase(length) {
        this.innerLength += length;
    }
    decrease(length) {
        this.innerLength -= length;
        if (this.innerLength < 0) {
            this.innerLength = 0;
        };
    }
    toString() {
        let result = this.innerString;
        if (this.innerString.length > this.innerLength) {
            if (this.innerLength === 0) {
                result = '...';
            } else {
                result = this.innerString.substring(0, this.innerLength) + '...';
            }
        }
        return result;
    }
}
let test = new Stringer("Test", 5);
console.log(test.toString());
test.decrease(3);
console.log(test.toString());