'use strict'

let calculator = {
    askOperand () {
        let number = +prompt('Please, enter an operand');
        if (isNaN(number)) {
            while(isNaN(number)) {
                number = +prompt('Please, enter an operand');
            }
        }
        return number;
    },
    sum () {
        return this.numberOne + this.numberTwo;
    },
    mul () {
        return this.numberOne * this.numberTwo;
    },
    read () {
        this.numberOne = this.askOperand();
        this.numberTwo = this.askOperand();
    },
}
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
// console.log(calculator);
