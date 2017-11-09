
// add type annotations
let n: number = 0,
    b: boolean = true,
    s: string = 'Hello world!',
    nil: null = null,
    u: undefined = undefined,
    o: object = {
        n,
        b,
        s
    },
    a: number[],
    all: any; // Can be anything. USE SPARINGLY

// types can be inferred (this is cool!)

let x = 10;

x = 'alala'; // Compiler error because inferred type is number.

// Checks like these can reduce bugs by up to 15%!
// http://ttendency.cs.ucl.ac.uk/projects/type_study/documents/type_study.pdf

// Use a type alias to give a new name to a type
type Num = number;

let y: Num = 1;

// This will come in handy later

// Literal types
let t: true = false;
t = true;

let z: 0 = 0;
let zero: number = z;
