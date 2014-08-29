require('util');

'use strict'

//TODO A B C D E F G H

/* teacher only */
/** ANSWERS */

/**
 * Antwoord A en B
 *
 */
var puntA = {
    x: 10,
    y: 20,

    bepaalAfstand: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
};

/**
 * Antwoord C
 *
 */
console.log("opgave C: " +  puntA.bepaalAfstand());

/**
 * Antwoord D
 * Door puntA.bepaalAfstand voeren we de functie niet uit,
 * maar returnen we de referentie naar die functie.
 *
 * Doordat we met een string concateneren, wordt de methode toString
 * uitgevoerd op het functie-object en volgens
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/ToString
 *
 * krijgen we dan de source code
 */
console.log("opgave D: " + puntA.bepaalAfstand);
/**
 * Onderstaande code geeft een andere uitvoer.
 * Dat komt doordat console.log geen toString uitvoert (maar utils.inspect)
 * op zijn argument tenzij je expliciet meegeeft dat je een string wilt hebben
 * zie http://nodejs.org/api/console.html#console_console_log_data
 */
console.log(puntA.bepaalAfstand);

/**  *************************************** */

/**
 * Antwoord E
 */

var puntB = {
    x: 40,
    y: 30,

    /**
     * @Opmerking nu zitten we code te kopieren. Zie
     * Punt_v2.js voor mogelijke oplossingen.
     */
    bepaalAfstand: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
};

/**
 * Antwoord F
 */
var puntC = {
    x: 1,
    y: 26,

    bepaalAfstand: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
};

var punten  = [puntA, puntB, puntC];


/**
 * Antwoord G
 *
 */
function maximum(puntenLijst) {
    var max = puntenLijst[0].bepaalAfstand();
    for (var i = 1; i < puntenLijst.length; i++) {
        if (puntenLijst[i].bepaalAfstand() > max ) {
            max = puntenLijst[i].bepaalAfstand();
        }
    }
    return max;
}

console.log("antw G: " + maximum(punten));

/** *****************************************/

/**
 * Antwoord H, nu krijgen we een exception
 */
var puntD = {
    x: 1,
    y: 26
};

punten.push(puntD);

console.log("antw H: " + maximum(punten));

/** Antwoord I
 * bepaalAfstand hoort bij een object en is daarom een methode.
 *
 */
/* end teacher only */