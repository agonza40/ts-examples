// Parameter types go after the parameter

function plusOne (n:number): number {
    return n + 1;
}

// A function's type can be expressed as (parameter List) => return type
//Example:

let fn: (n:number)=>number;

fn = plusOne;
fn = n => n + 1;

// Optional parameters
type OptionalParams = (notOptional, optional?)=>any;

//Default parameters
//Treated like optional
fn = (n: number, other = 0) => n + other;

//We can have variable number of parameters with the "rest" operator
function manyArgs (...args:string[]):string {
    return args.join(' ');
}

//Multiple function signatures

function manySignatures (s: string): string;
function manySignatures (s: boolean): boolean;
function manySignatures (s: number): number;
function manySignatures (s: any):any {
    return s;
}