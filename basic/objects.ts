
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
    constructor (public length: number = 0) {
    }
}

class AnotherLengthyBoi {
    get length():number {
        return this.str.length;
    }
    constructor (public readonly str:string) {}
}

class AnotherLengthyBoiInterface extends AnotherLengthyBoi {}
// Extracts the classes interface and leaves the implementation behind

// To make a hash object: {[index: string | number]: }
type NumberHash = {[index: string]: number};
