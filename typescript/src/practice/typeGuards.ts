type ValueType = string | number | boolean
let value: ValueType
const random = Math.random()
value = random < 0.33 ? 'hello' : random < 0.66 ? 123.456 : true

function checkValue(value:ValueType): void {
    if (typeof value === 'string') {
        console.log(value.toLowerCase());
        return
    }
    if (typeof value === 'number') {
        console.log(value.toFixed(2));
        return
    }
    console.log(`boolean: ${value}`);

}
checkValue(value)


type Dog = { type: 'dog'; name: string; bark: () => void}
type Cat = { type: 'cat'; name: string; meow: () => void}
type Animal = Dog | Cat

// function makeSound(animal: Animal) {
//     if (animal.type === 'dog') {
//         animal.bark();
//     } else {
//         animal.meow()
//     }
// }

function makeSound(animal: Animal) {
    if ('bark' in animal) {
        animal.bark()
    } else {
        animal.meow()
    }
}

function printLength(str: string | null | undefined){
    if(str){
        console.log(str.length);
    } else {
        console.log('no string provided');
    }
}

printLength('hello')
printLength('')
printLength(null)
printLength(undefined)
// printLength()

// try {
//     throw 'some error'
//     throw new Error('This is error')
// } catch (error) {
//     if (error instanceof Error) {
//         console.log(`Caught an error object : ${error.message}`);
//     } else {
//         console.log('unknown error...');
//     }
// }

function checkInput(input: Date | string):string{
    if(input instanceof Date){
        return input.getFullYear().toString()
    }
    return input
}

const thisYear = checkInput(new Date())
const yearRandom = checkInput('2020-05-05')

console.log(thisYear);
console.log(yearRandom);

type Student = {
    name:string
    study:() => void;
}
type User = {
    name:string
    login:() => void;
}
type Person = Student | User

const randomPerson = (): Person => {
    return Math.random() > 0.5 
    ? {name: 'john', study: () => console.log('studying')}
    : {name: 'mary', login: () => console.log('logging in')}
}
const person = randomPerson()
console.log(person); 

function isStudent(person: Person):person is Student {
    // return 'study' in person
    return (person as Student).study() !== undefined
}

if(isStudent(person)) {
    person.study()
} else {
    person.login()
}

type IncrementAction = {
    type: 'increment'
    amount:number,
    timestamp: number,
    user:string
}
type DecrementAction = {
    type: 'decrement'
    amount:number,
    timestamp: number,
    user:string
}
type  Action = DecrementAction | IncrementAction

function reducer(state:number, action:Action){
    switch(action.type){
        case 'increment':
            return state + action.amount
        case 'decrement':
            return state - action.amount
        default:
            const unexpectedAction: never = action
            throw new Error(`Unexpected action: ${unexpectedAction}`);
            
    }
}

const newState = reducer(15, {
    user: 'john',
    type: 'increment',
    amount: 5,
    timestamp: 123456
})

