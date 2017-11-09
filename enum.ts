
export enum NumberValues {
    FIRST_VALUE,
    SECOND_VALUE,
    THIRD_VALUE = 19
}

enum StringValues {
    FIRST_VALUE = 'first',
    SECOND_VALUE = 'second',
    THIRD_VALUE = 'third'
}

// Will match literal values
let zero:0 = NumberValues.FIRST_VALUE;
zero = NumberValues.THIRD_VALUE;

let str: 'first' = StringValues.FIRST_VALUE;