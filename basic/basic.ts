
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
