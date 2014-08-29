'use strict'

/**
 * You can type in each example to check
 * your answer
 */
function optellen(a, b) {
    return a + b;
}
var resultaat = optellen(1, 2);

console.log(resultaat);

/* teacher only */
/** ANSWERS */

/**
 * A) value: 3 type: Number
 * B) value: a reference to an object type: Object (with prototype Function)
 * C) value: 3 type: Number
 * D) value and type: nothing, a TypeError is thrown because resultaat
 *    is undefined and you can't call undefined
 * E) value: a reference to an object type: Object (with prototype Function)
 * F) value: a reference to an object type: Object (with prototype Function)
 *    the difference is that this object has a name now
 *    you can all resultaat.name to get optellen
 * G) value: 3 type: Number
 */
/* end teacher only */