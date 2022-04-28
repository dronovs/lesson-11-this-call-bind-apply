'use strict'

let ladder = {
    step: 0,
    up: function() {
        this.step++;
        return this;
    },
    down: function() {
        this.step--;
        return this;
    },
    showStep: function() {
        console.log( this.step );
    }
};

ladder.up().up().up().down().showStep();

console.log(ladder);