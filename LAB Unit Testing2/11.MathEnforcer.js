let mathEnforcer = {
    addFive: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

let expect = require('chai').expect;

describe('mathEnforcer', function () {
    describe('addfive', function () {
        it('should check if the argument is not a number',
            () => {
                expect(mathEnforcer.addFive('a')).to.equal(undefined);
                expect(mathEnforcer.addFive([])).to.equal(undefined);
                expect(mathEnforcer.addFive({})).to.equal(undefined);
                expect(mathEnforcer.addFive(true)).to.equal(undefined);
                expect(mathEnforcer.addFive(() => true)).to.equal(undefined);
            })
        it('should check if the argument is a number',
            () => {
                expect(mathEnforcer.addFive(2)).to.equal(7);
                expect(mathEnforcer.addFive(-2)).to.equal(3);
                expect(mathEnforcer.addFive(2.1)).to.equal(7.1);

        })
    });
    describe('subtractTen', function () {
        it('should check if the argument is not a number',
            () => {
                expect(mathEnforcer.subtractTen('a')).to.equal(undefined);
                expect(mathEnforcer.subtractTen([])).to.equal(undefined);
                expect(mathEnforcer.subtractTen({})).to.equal(undefined);
                expect(mathEnforcer.subtractTen(true)).to.equal(undefined);
                expect(mathEnforcer.subtractTen(() => true)).to.equal(undefined);
            })
        it('should check if the argument is a number',
            () => {
                expect(mathEnforcer.subtractTen(20)).to.equal(10);
                expect(mathEnforcer.subtractTen(-20)).to.equal(-30);
                expect(mathEnforcer.subtractTen(11.1)).to.equal(1.0999999999999996);

            })
    });
    describe('sum', function () {
        it('should check if the first argument is not a number',
            () => {
                expect(mathEnforcer.sum('a', 4)).to.equal(undefined);
                expect(mathEnforcer.sum([],4)).to.equal(undefined);
                expect(mathEnforcer.sum({},4)).to.equal(undefined);
                expect(mathEnforcer.sum(true,4)).to.equal(undefined);
                expect(mathEnforcer.sum(() => true,4)).to.equal(undefined);
            })
        it('should check if the second argument is not a number',
            () => {
                expect(mathEnforcer.sum(4, 'a')).to.equal(undefined);
                expect(mathEnforcer.sum(4,[])).to.equal(undefined);
                expect(mathEnforcer.sum(4,{})).to.equal(undefined);
                expect(mathEnforcer.sum(4,true)).to.equal(undefined);
                expect(mathEnforcer.sum(4, () => true)).to.equal(undefined);
            })
        it('should check if the argument is a number',
            () => {
                expect(mathEnforcer.sum(2, 2)).to.equal(4);
                expect(mathEnforcer.sum(2, -2)).to.equal(0);
                expect(mathEnforcer.sum(2, 1.20)).to.equal(3.20);
                expect(mathEnforcer.sum(1.20, 1.20)).to.equal(2.40);
                expect(mathEnforcer.sum(-2, 2)).to.equal(0);

            })
    });
})


