// let array1: string[] = ['apple', 'banana', 'mango']
// let array2: number[] = [1,2,3]
// let array3: boolean[] = [true, false, false]

let array1: Array<string> = ['apple', 'banana', 'mango']

function genericFunction<T>(arg:T) :T {
    return arg
}

const someStringValue = genericFunction<string>('hello world')
const someNumberValue = genericFunction<number>(2)

interface GenericInterface<T> {
    value: T,
    getValue: () => T,
}

const genericString:GenericInterface<string> = {
    value: 'hello world',
    getValue() {
        return this.value
    },
}

async function someFunct(): Promise<string> {
    return 'hello world'
}

// const result = someFunc()

// createArray<string>(3, 'hello')
// createArray<number>(4, 100)

function generateStringArray(length:number, value:string):string[]{
    let result:string[] = []
    result = Array(length).fill(value)
    return result
}
function createArray<T>(length:number, value:T):Array<T>{
    let result:T[] = []
    result = Array(length).fill(value)
    return result
}

console.log(generateStringArray(5, 'hello'));
let arrayStrings = createArray<string>(10, 'hello')
let arrayNumbers = createArray<number>(10, 100)

console.log(arrayStrings);
console.log(arrayNumbers);





