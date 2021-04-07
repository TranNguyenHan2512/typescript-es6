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
class test{
    a = 1;
    run(){
        console.log(this.a);
    }
}
let a = new test();
a.run();