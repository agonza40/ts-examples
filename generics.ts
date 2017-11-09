
// We already know one example: Arrays!
export let arr: Array<number> = [1, 2];

interface GraphNode<T> {
    value: T
    links: GraphNode<T>[]
}

let node: GraphNode<number> = {
    value: 0,
    links: []
};

// usable with functions too!
function map <T, U>(list: T[], fn: (item?: T, index?: number) => U): U[] {
    const newList: U[] = new Array(list.length);

    for(let i = 0; i < list.length; i++) {
        newList[i] = fn(list[i], i)
    }

    return newList;
}

//Types arguments can be inferred!
const stringArray = map(arr, n => 'Number ' + n)
const str: string = stringArray[0];

// Can add requirements to the type parameter
// This will let you access properties
function getValue <T, U extends GraphNode<T>> (n: U): T {
    return n.value;
}

let n: number = getValue(node)
