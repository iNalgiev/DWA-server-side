'use strict'

function toNumberArray() {
    //TODO A

}


var list = toNumberArray();

console.log(list);

//TODO B

/* teacher only */
/** ANSWERS **/

//'use strict'
//
//function inputToNumberArray() {
//    /**
//     * ANSWER A
//     */
//    var list = [];
//    for (var i = 2; i < process.argv.length; i++) {
//        list.push(parseInt(process.argv[i], 10));
//    }
//    return list;
//}
//
//
//var list = inputToNumberArray();
//
//console.log(list);
//
///**
// * ANSWER B
// */
//module.exports = inputToNumberArray; //No ()
////in another js-file:
////var mySuperCoolFunction = require('input_to_numbered_array')
////list = mySuperCoolFunction();
//
///**
// * ANSWER B Alternative
// */
//exports.inputToNumberArray = inputToNumberArray; //No ()
////in another js-file:
////var mySuperCoolObject = require('input_to_numbered_array')
////list = mySuperCoolObject.inputToNumberArray();
//
///**
// * ANSWER B: wrong, overwriting the exports object
// */
//exports = inputToNumberArray;
/* end teacher only */