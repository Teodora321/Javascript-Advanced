function solve() {
    let str = '';

    function append(string) {
        str += string;
    };
    function removeStart(n) {
        str = str.substr(n);
    };
    function removeEnd(n) {
        str = str.substring(0, str.length - n);
    };
    function print() {
        console.log(str)
    };
    return {
        append,
        removeStart,
        removeEnd,
        print
    };
};
const manipulator = solve();
manipulator.append('hello');
manipulator.print();
manipulator.removeEnd(2);
manipulator.print();
