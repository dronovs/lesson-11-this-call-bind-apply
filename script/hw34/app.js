'use strict';

function insertWordInto (mainString) {
    return (secondaryString) => {
        let splitMainString = mainString.split(' ');
        splitMainString.splice((splitMainString.length / 2), 0, secondaryString);
        return splitMainString.join(' ');
    }
}

let insert = insertWordInto('Из песни не выбросишь');

let someString = insert('слов');

console.log(someString);