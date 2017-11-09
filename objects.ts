
interface Lengthy {
    length: number;
}

let l: Lengthy = [];
l = 'Hello darkness my old friend';
l = {
    length: 120
}

let point: {
    x: number,
    y: number
}

interface Point2D {
    x: number;
    y: number;
}

interface Point3D extends Point2D {
    z: number;
}

class OneLengthyBoi implements Lengthy {
    constructor (public length: number = 0) {}
}

class AnotherLengthyBoi {
    get length():number {
        return this.str.length;
    }
    constructor (public readonly str:string) {}
}

interface AnotherLengthyBoiInterface extends AnotherLengthyBoi {}
// Extracts the classes interface and leaves the implementation behind
// This would be the same as:
interface AnotherLengthyBoiInterface {
    length: number;
    readonly str: string;
}

// To make a hash object: {[index: string | number]: }
type NumberHash = {[index: string]: number};

interface OptionalProperties {
    notOptionalProp: number;
    optionalProp?: number;
}

// Function/method properties
interface ObjectWithFunctions {
    fn (): any;
    fn2 : () => any;
}
