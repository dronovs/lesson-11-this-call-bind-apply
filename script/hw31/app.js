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


function getFullName (arg1, arg2) {
    return `${this.name} ${this.lastname} ${arg1} ${arg2}`;
}



const binding = (func, obj, ...bindingArgs) => (...args) => {
        return func.call(obj, ...bindingArgs, ...args);
}

const boundFunction = binding(getFullName, user, 'get', 'lost');
const secondBoundFunction = binding(getFullName, person, 'is a good', 'boy');
console.log(boundFunction());
console.log(secondBoundFunction());