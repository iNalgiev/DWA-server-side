'use strict'

var punt = {
    //TODO A

};

var bepaalAfstand = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);

}

//TODO B
var puntA = {};
puntA.x = 10;
puntA.y = 20;

var puntB = {
    x: 40,
    y: 30
};

console.log(puntA.bepaalAfstand());
console.log(puntB.bepaalAfstand());

