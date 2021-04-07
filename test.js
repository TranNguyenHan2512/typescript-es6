// let displaycolor = function(...colors){
//     for(let color in colors){
//         console.log('$(a)')
//     }
// };
// displaycolor('red ${}', 'yellow','blue');
// let a = 0
// let abc = {
//     a : 'a',
//     b : 'b'
// };
// let {a : f, b : g} = abc;
// console.log("" + f + g);
// let a = '1';
// console.log(`${a}`)
var test = /** @class */ (function () {
    function test() {
        this.a = 1;
    }
    test.prototype.run = function () {
        console.log(this.a);
    };
    return test;
}());
var a = new test();
a.run();
