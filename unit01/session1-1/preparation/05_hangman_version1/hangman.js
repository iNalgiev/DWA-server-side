const
    word = 'hallo';

var
    guessedLetters = '',
    nrMisses = 0;

/**
* TODO A
*/

function guessLetter(letter) {
    /**
    * TODO B
    */
}


console.log(guessedLetters);
console.log(nrMisses);

console.log('ANSWER: ' + word);

/* teacher only */
/** ANSWERS **/
//'use strict'
//
//const
//    word = 'hallo';
//
//var
//    guessedLetters = '',
//    nMisses = 0;
//
///**
// * ANSWER A
// */
//for (var i = 0, length = word.length; i < length; i++) {
//    guessedLetters += '_';
//}
//
//function guessLetter(letter) {
//    /**
//     * ANSWER B
//     */
//    var wordContainsLetter = false;
//    for (var i = 0, length = word.length; i < length; i++) {
//        if (word.charAt(i) === letter) {
//            wordContainsLetter = true;
//            var list = guessedLetters.split("");
//            list[i] = letter;
//            guessedLetters = list.join("");
//        }
//    }
//
//    if (!wordContainsLetter) {
//        nMisses++;
//    }
//}
//
//console.log(guessedLetters);
//console.log(nMisses);
//
//guessLetter('l');
//console.log(guessedLetters);
//console.log(nMisses);
//
//guessLetter('e');
//console.log(guessedLetters);
//console.log(nMisses);
//
//console.log('ANSWER: ' + word);
/* end teacher only */