'use strict'

let person = {
    name: 'Serhii',
    lastname: 'Dronov',
    age: 30,
    gender: 'Male',
    hasChildren: false,
    sayHi() {
        console.log(`Hello, ${this.name}`);
    },
}

let user = {
    name: 'Vladimir',
    lastname: 'Putin',
    nickname: 'Hu*lo',
    age: 13,
    gender: 'Unknown',
    hasChildren: false,
}


function bindingFunc (obj, someArg, anotherArg) {
    return () => {return `${obj.name} ${obj.lastname}, ${someArg}, ${anotherArg}`};
}


const boundFunc = bindingFunc(person, 'wind', 'of change');
const secondBoundFunc = bindingFunc(user, 'Russian battleship', 'go away');

console.log(boundFunc());
console.log(secondBoundFunc());