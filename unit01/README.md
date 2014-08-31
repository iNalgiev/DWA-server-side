# Objectives

In this week you’ll…

* acquaint yourself with the basics of the JavaScript language including different language types,
objects and build in object types;
* gain a deep understanding of JavaScript functions and how to use 'this';
* learn the difference between classical inheritance and prototypical inheritance;
* understand the prototype property and use it in your programs;
* practice writing command line JavaScript programs in the Node.JS environment.
* understand the CommonJS Module system and and use it to organize your code.
* use the following Node Modules: Console, File System (synchronous functions only),
 Modules and Globals (ok, this is not a module but anyways) learn how to catch basic operational errors


# Session 1.1: Introduction to JavaScript

## Preparation 1: reading material + video
* Read the text [http://speakingjs.com/es5/ch01.html](http://speakingjs.com/es5/ch01.html)
 up to and including ‘strict mode’. Don't worry to much if you don't understand the part about
 'Exception Handling' yet. We will introduce this concept in session 1.2.
* Watch the video [http://www.objectplayground.com/](http://www.objectplayground.com/)
up to 5:46 'Prototypical Inheritance'

## Preparation 2: Q&A
[Please post 2 questions, remarks, or discussion items
regarding to the literature and video's for this session.]
(../../../issues/1)

## Submission Form
Please use the [this form](https://docs.google.com/forms/d/1GeBr8ZQtcuU9VLZZAbHb3I_M5lj_6ghjIdpHWP3-I4w/viewform?usp=send_form)
to submit the URLs to the answers of preparation 3, 4 and 5.

## Preparation 3: 'maximum'
A. **Java to JavaScript:** Write a function that takes an array of integers and returns
its maximum. Do not use JavaScript built in functions. You will get plenty of change to do that.  
Below is a Java implementation of this function:
```java
public int maximum(int[] list) {
  int max = list[0];
  for (int number : list) {
    if (number > max) {
      max = number;
    }
  }
  return max;
}
```

B. **Test it:** Below is a small test for this function:
Use a JavaScript version to test your code.  
_Hint:_ the behaviour of the `for each`-loop in JavaScript might surprise you.
```java
int[] numbers = {10, 30, 25};
System.out.println("maximum: " + maximum(numbers));
```

C. **Edge cases**: Test your function using the inputs listed below. Write down the result
for every test:
   1. Empty array.  
   1. Array with floating point numbers.  
   1. Array with Strings.  
   1. Uninitialized array.  

## Preparation 4 'point version 1'
A. Maak een variabele puntA en stop hier een object in met de variabele x en y.
Geef x en y een willekeurige waarde.
Gooi dit object in de functie console.log en inspecteer de uitvoer  

B. Voeg aan het object in puntA een functie toe die de afstand bepaald tussen
het punt (0, 0) en het object zelf.  
De afstand tussen punt (x, y) en punt (0, 0) kun je berekenen met  √(x² + y²)

C. Test deze functie door console.log(puntA.afstand()) aan te roepen.

D. Probeer ook een console.log(puntA.afstand) zonder haakjes.  
Verklaar de uitvoer.

E.Maak nog een variabele puntB, geef deze ook dezelfde functie
bepaalafstand volgens bovenstaande definitie

F. Maak een array met ten minste drie complete punt-objecten
(je mag de variabelen en/of objecten gebruiken die je eerder hebt gemaakt).
_Hint_: Als je al flauw wordt van het kopiëren van de functie bepaalafstand
dan is dat prima. In de les gaan we hier wat aan doen.

G.Pas de functie uit de vorige opgave aan zodat deze het punt retourneert met
de grootste afstand.

H. Verwijder de functie bepaalafstand uit één object uit de array. Voer de functie
bepaalafstand opnieuw uit. Welke uitvoer krijg je nu.

I. Één van de twee functies maximum en bepaalafstand wordt ook wel een methode genoemd.
Welke is dit en waarom?

## Preparation 5 'hangman version 1'
In this (and future) exercise you'll create an implementation of the game hangman

A. In de variabele guessedLetters komen straks de geraden letters. Nu moet er op elke
posititie in deze array een “_” komen. Zorg ervoor dat geraden net zoveel elementen
bevat als woord characters en zorg ervoor dat  elk element gelijk is aan “_”

B. Maak de functie guessLetter(letter).

Deze functie krijgt een letter mee. Als deze letter in het oorspronkelijke
woord voorkomt dan moet in de array geraden op de juiste positie(s) de waarde “_”
vervangen worden door de letter

Daarnaast moet, pogingen met 1 opgehoogd worden als de geprobeerder letter niet in het
woord voorkomt.

Test de functie guessLetter een aantal keer aan te roepen met verschillende letters en
de variabele geraden en pogingen naar de console te schrijven.

Vervangen van letters in Strings is moeilijk omdat strings primitieve types zijn.
Een oplossing is om er een array van te maken, deze te wijzigen en vervolgens de array weer
naar een string om te zetten.

Zie de methoden split uit String

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split]
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

En join uit Array

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join]
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

## Classroom activities
1.  **Q&A:** We'll try to answer as many of your wonderful questions as time will allow.
1.  **Homework discussion:** Feedback and in-depth discussion based on yur submissions for the homework
1.  **Demo:** We'll show some new JavaScript concepts and techniques.
1.  **New exercises:** There will be some time to practise you JavaScript in follow up exercises


Demo New Material
----
* 'scope'
* 'point version 2'
* 'command line'

Class Assignments
---
### Assignment 1 'hangman version 3'

# Session 1.2: More JavaScript

## Preparation 1: reading material + video
* Read the text [http://speakingjs.com/es5/ch15.html](http://speakingjs.com/es5/ch15.html)
up to 'More Control over Function Calls: call(), apply() and bind()
* Read the complete text [http://eloquentjavascript.net/chapter5.html](http://eloquentjavascript.net/chapter5.html)
* Read the part about 'Module Systems' of
[http://speakingjs.com/es5/ch31.html#module_systems](http://speakingjs.com/es5/ch31.html#module_systems)
* Watch the video [http://www.objectplayground.com/](http://www.objectplayground.com/)
up to 9:11 'prototypical inheritance'

## Preparation 2: Q&A
[Please post 2 questions, remarks, or discussion items.]
(../../../issues/3)

## Submission Form
Please use the [this form]
(https://docs.google.com/forms/d/1O5t8-hIQpzQKtO8neDBH-FeTptQINSVsXkC5VWB3kQc/viewform?usp=send_form)
to submit the URLs to the answers of preparation 3, 4, 5 and 6.

## Preparation 3: 'input to number array'
De functie toNumberArray() stopt alle
getallen die worden meegegeven op de commandline in een array en
retourneert deze. Ga ervan uit dat er alleen integers meegegeven worden.

A. Implementeer deze functie. Het runnen van dit programma:

```
node --harmony input_to_number_array 8 2 12
```
Zou onderstaande output moeten leveren
```
[ 8, 2, 12 ]
```

_Hint:_ de argumenten die je meegeeft op de commandline zijn strings.
Om te converteren zie
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt]
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

B. Verander de functie-declaratie zodanig dat de functie beschikbaar is in
andere javascript-bestanden. Gebruik daarvoor het module-systeem van Node.js:
[http://nodejs.org/api/modules.html#modules_modules]
(http://nodejs.org/api/modules.html#modules_modules)

## Preparation 4: 'point object diagram'
Draw an object diagram (including functions) of the code below:
```javascript
var bepaalAfstand = function() {
    console.log("this heeft waarde: " + this);
    return Math.sqrt(this.x * this.x + this.y * this.y);
}

var puntA = {};
puntA.x = 10;
puntA.y = 20;

puntA.bepaalAfstand = bepaalAfstand;

var puntB = {
    x: 40,
    y: 30,
    bepaalAfstand: bepaalAfstand

};

console.log(puntB.bepaalAfstand());
```

## Preparation 5: 'point \_\_proto\_\_'
A. We gaan nu puntA en puntB toegang geven tot deze methode door gebruik
 te maken van prototypal inheritance. Het object punt gaat fungeren als
  prototype object voor puntA en puntB.

Verander bepaalAfstand van een functie die het nu is naar een methode van het
object punt (met dezelfde naam).

B. Zorg ervoor dat het object punt het proto object van puntA en puntB wordt.
Doe dit door gebruik te maken van Object.create zoals in 6:30 te zien is.

Houd de initialisatie van de variabele x en y wel bij puntA en puntB.
Het object punt hoeft dus geen variabele x en y te bevatten.

C. Teken het objectdiagram en geef duidelijk aan waar this naar wijst als regel 22 wordt
uitgevoerd.

D. We voegen de regel:
```javascript
console.log(punt.bepaalAfstand());
```
toe

Geef in het diagram uit opgave C aan waar this naar wijst
terwijl deze regel wordt uitgevoerd.

E. Leg aan de hand van het diagram uit wat er mis gaat.

F. Geef een oplossing op waarbij je gebruik maakt van call op basis van 11:34

## Preparation 6: 'function fun'
Geef per onderdeel aan welke waarde er in de variabele resultaat zit en van welk
datatype deze variabele is:
Plaats de antwoorde in de code.

A.
```javascript
function optellen(a, b) {
    return a + b;
}
var resultaat = optellen(1, 2);
```

B.
```javascript
function optellen(a, b) {
    return a + b;
}
var resultaat = optellen;
```

C.
```javascript
function optellen(a, b) {
    return a + b;
}
var tussenresultaat = optellen;
var resultaat = tussenresultaat(1, 2);
```

D.
```javascript
function optellen(a, b) {
    return a + b;
}

var resultaat = resultaat(1, 2);
```

E.
```javascript
var resultaat = function(a, b) {
    return a + b;
}
```

F.
```javascript
var resultaat = function optellen(a, b) {
    return a + b;
}
```

G.
```javascript
var resultaat = function(a, b) {
    return a + b;
}(1, 2);
```

## Classroom activities
1. **Q&A:** We'll try to answer as many of your wonderful questions as time will allow.
1. **Homework discussion:** Feedback and in-depth discussion based on yur submissons for the homework.
1. **Exceptions:** We'll introduce exception handling in JavaScript.
1. **New exercises:** There will be some time to practise you JavaScript in follow up exercises.


Class Assignments
---
### Assignment 1 'hangman version 4'

# Session 1.3: Test and Testing

## Test Preparation
Prepare for the small-test by learning:

1. [http://www.objectplayground.com/](http://www.objectplayground.com/)
up to 9:11 'prototypal inheritance'. Also make sure you are able to draw object diagrams.
1.  [http://speakingjs.com/es5/ch01.html](http://speakingjs.com/es5/ch01.html)
up to and including ‘strict mode’
1. [http://speakingjs.com/es5/ch15.html](http://speakingjs.com/es5/ch15.html)
up to 'More Control over Function Calls: call(), apply() and bind()

## Classroom activities
1. **The small-test:** Earn some points!
1. **Workshop about testing** We'll introduce testing in JavaScript and leave some time for you to
play with different tests.
