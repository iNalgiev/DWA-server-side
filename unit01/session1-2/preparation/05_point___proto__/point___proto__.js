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


/* teacher only */
///**
// * ANSWERS
// */
//'use strict'
//
//var punt = {
//    /**
//     * ANSWER A
//     */
//    bepaalAfstand: function() {
//        return Math.sqrt(this.x * this.x + this.y * this.y);
//    }
//};
//
///**
// * ANSWER A Alternative
// */
////var punt = {};
////punt.bepaalAfstand = function() {
////    console.log("this heeft waarde: " + this);
////    return Math.sqrt(this.x * this.x + this.y * this.y);
////}
//
///**
// * ANSWER B
// */
//var puntA = Object.create(punt);
//puntA.x = 10;
//puntA.y = 20;
//
////Note, See properties object
//var puntB = Object.create(punt, {
//    x: {value: 40},
//    y: {value: 30}
//});
//
//console.log(puntA.bepaalAfstand());
//console.log(puntB.bepaalAfstand());
/* end teacher only */