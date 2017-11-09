// Spread
// like the inverse of rest
export let strings = ['a ', 'list ', 'of', 'strings']
'join '.concat(...strings);
// 'join a list of strings'

//Object shorthand
let a = 5;
let b = 3; 
let obj = {
    a,
    b,
    sum () {
        return this.a + this.b;
    },
    get difference () {
        return this.a - this.b;
    }
}
let c:number = obj.sum();
let d:number = obj.difference;

//Destructuring - assign to
let [first, second, ...rest] = strings;
first === 'a ';
second === 'list ';
// rest is the remaining elements
// works with objects too

let {difference} = obj;
difference === 2;

//Template strings
let str = `${a} + ${b} = ${obj.sum()}`

//Decorators - wrap a property or class
//Used in angular