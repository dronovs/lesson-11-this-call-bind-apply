'use strict';

const exampleArr = [1, 2, [3, 4, [5, 6, 7]], 8, [9, 10, [11, [12, [13]]]]];

function flat (array) {
    if (arguments.length > 1) throw new Error('Function accepts only 1 argument');
    let resultArr = [];
        for (let item of array) {
            if (Array.isArray(item)) {
                resultArr.push.apply(resultArr, flat(item));
            } else {
                resultArr.push(item);
            }
        }
        return resultArr;
}

console.log(flat(exampleArr));
