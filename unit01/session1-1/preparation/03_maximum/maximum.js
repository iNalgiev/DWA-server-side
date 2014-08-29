
'use strict'

function maximum(list) {
    /* TODO A) */
}

/* TODO B) */

/* TODO C) */


/* teacher only */
/** ANSWERS */
///**
// * ANSWER A)
// */
//function maximum(list) {
//    var max = list[0];
//
//    for (var i = 0, len = list.length; i  < len; i++) {
//        if (list[i] > max) {
//            max = list[i];
//        }
//    }
//    return max;
//}
//
///**
// * ANSWER B)
// */
//var numbers = [10, 30, 25];
//console.log("maximum: " + maximum(numbers));
//
///**
// * TEACHER CLASS QUESTION why can't we use a for in
// * like in the code below (for in iterates over property names)
// * check https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// */
//var arr = ['a', 5, 28];
//for (var i in arr) {
//    console.log(i);
//    //use console.log(arr[i]) and everything is fine
//}
///**
// * TEACHER CLASS NOTE Ecmascript 6 might give us for...of lus, and/or the
// * for each Jeuuuj!
// * check https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// */
//
////Testjes
///**
// * TEACHER CLASS NOTES no compiler, no compiler errors
// * Errors result in exceptions. JavaScript programs will run up until the exception.
// * We will study exceptions in greater detail later
// */
//
//var nummbers = [10, 30, 25];
//console.log("test  1: " + maximum(nummbers));
//
///**
// * ANSWER C-1)
// * TEACHER CLASS QUESTION what is the output of lijst[0] when lijst === []
// */
//var emptyArray = [];
//console.log("test  emptyArray: " + maximum(emptyArray));
//
//
///**
// * ANSWER C-2
// * TEACHER CLASS NOTE Elementen Arrays can hold elements with different data types
// * floats and integers are both of type Number
// */
//var withFloats = [1.2, 10, 3.8];
//console.log("test  metFloats: " + maximum(withFloats));
//
///**
// * ANSWER C-3
// */
//var withStrings = [10, 4, 'hallo', 20];
//console.log("test metStrings: " + maximum(withStrings));
//
///**
// * TEACHER CLASS QUESTION What happens if you compare a String to a Number
// */
//var v1 = 'hallo';
//var v2 = 4;
//console.log("?? :" + (v1 === v2));
//
///**
// * TEACHER CLASS NOTE Change v2 in a String to show that String compare can be done with ===
// * specs:
// * http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.6
// */
//
///**
// * TEACHER CLASS NOTE Show that arrays are mutable
// */
//var nieuweLengte = metStrings.push(10);
//console.log("test metStrings 2 " + metStrings);
//console.log("test nieuwe lengte " + nieuweLengte);
//
///**
// * ANSWER C-4
// * TEACHER CLASS NOTE The difference between undefined and null and a reference error
// *
// * check http://www.ecma-international.org/ecma-262/5.1/#sec-4.3
// * in comparison with  http://speakingjs.com/es5/ch01.html#basic_undefined_null
// */
//var uninitialized;
//console.log("test  nietGeinit:" + maximum(uninitialized));
//
//var empty1 = null;
//console.log("maximum: " + maximum(empty1));
//
//console.log("maximum: " + maximum(undeclared));
//
//var empty2 = undefined;
//console.log("maximum: " + maximum(empty2));
/* end teacher only */