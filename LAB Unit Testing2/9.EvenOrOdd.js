function isOddOrEven(string) {
    if (typeof (string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

let expect = require('chai').expect;

describe('isOddOrEven', function () {
    it('should describe if the argument is not a string',
        () => {
            expect(isOddOrEven(1)).to.be.equal(undefined);
            expect(isOddOrEven([1, 2, 3])).to.be.equal(undefined);
            expect(isOddOrEven(0)).to.be.equal(undefined);
            expect(isOddOrEven({})).to.be.equal(undefined);
            expect(isOddOrEven(true)).to.be.equal(undefined);
            expect(isOddOrEven(() => true)).to.be.equal(undefined);
            
        });
    it('should return an even string',
        () => {
            
            expect(isOddOrEven('abcd')).to.be.equal('even');
            expect(isOddOrEven('')).to.be.equal('even');
            expect(isOddOrEven('ab')).to.be.equal('even');
        });
    it('should return an odd string',
        () => {
            expect(isOddOrEven('abc')).to.be.equal('odd');

        });
})