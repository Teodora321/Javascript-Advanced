function lookupChar(string, index) {
    if (typeof (string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

let expect = require('chai').expect;

describe('lookupChar', function () {
    it('should check if the arguments are valid',
        () => {
            expect(lookupChar(1, 4)).to.be.equal(undefined);
            expect(lookupChar('string', 'number')).to.be.equal(undefined);
            expect(lookupChar('string', 3.5)).to.be.equal(undefined);
        });
    it('should check if the arguments are in valid range',
        () => {
            expect(lookupChar('hello', 7)).to.be.equal('Incorrect index');
            expect(lookupChar('hello', 5)).to.be.equal('Incorrect index');
            expect(lookupChar('hello', -7)).to.be.equal('Incorrect index');

        })
    it('should return the correct char index',
        () => {
            expect(lookupChar('hello', 0)).to.be.equal('h');
            expect(lookupChar('hello', 2)).to.be.equal('l');
           
    })

});