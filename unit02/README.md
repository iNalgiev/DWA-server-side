# Session 2.1: Advanced Function Usage

## Preparation 1: reading material + video
* Watch the video [http://www.objectplayground.com/](http://www.objectplayground.com/)
up to 19:28 'Subclasses'
* Read the text [http://eloquentjavascript.net/05_higher_order.html]
(http://eloquentjavascript.net/05_higher_order.html) up to 'JSON' (about half way).
* Read the text [http://speakingjs.com/es5/ch16.html](http://speakingjs.com/es5/ch16.html)
completely.

## Preparation 2: Q&A
[Please post 2 questions, remarks, or discussion items.]
(https://github.com/HANICA/DWA-server-side/issues/4)

## Submission Form
Please use the [this form]
(https://docs.google.com/forms/d/16OuNKpqe2mp2DLybSDpIjtwyhE5ZjHTWqjA5r7iOuRM/viewform?usp=send_form)
to submit the URLs to the answers of preparation 3 and 4

## Preparation 3 'point version 3'
A. **Constructor:** Create a constructor function for creating points. A point constructor takes
two parameters: x and y and sets the x and y coordinate of the newly created point to
these values.

B. **Function to method:** Change the function 'distance' to the method 'distance' of the prototype object of
the constructor.

C. **new:** Create two new points with different coordinates using the constructor above.
Call the method 'distance' on both objects and print the output.

D. **Object Diagram:** Draw an object diagram of all objects involved when
the two objects are created.


## Preparation 4  'timed increase'
This program consists of three functions that add some value to the total. Due to the asynchrounsity 
of the function calls, the total is shown before all functions have executed.

Make sure the total is shown after the third function has executed. Do not change the way the functions 
are called.


## Classroom Activities
1.  **Q&A:** We'll try to answer as many of your wonderful questions as time will allow.
1.  **Homework discussion:** Feedback and in-depth discussion based on yur submissions for the homework
1.  **New exercises:** There will be some time to practise you JavaScript skills in follow up exercises


Demo New Material
-----------------
* 'demo readline module'

Class Assignments
-----------------

### Assignment 1 'hangman version 6'

# Session 2.2: Asynchronous and intro HTTP

## Preparation 1: reading material
* Read the text
[http://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177]
(http://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177)

## Submission Form
Please use the [this form]
(https://docs.google.com/forms/d/1AHZ2CcIGJCEWS9ozmmNQAL78KpwSrbHjpGi2i2O3mF8/viewform?usp=send_form)
to submit the URLs to the answers of preparation 2 and 3.

## Preparation 2 'three questions'
Maak een programma dat drie vragen stelt en elk antwoord “echoed”. Gebruik de module readline

Laat klaar zien dat je nu moet oppassen met de volgorde

Zelf doen, opgave vragen stellen

Gegeven een array met vragen.

Ga net zo lang door met vragen stellen op de commandline totdat je alle vragen uit de array gehad hebt

[http://nodejs.org/api/readline.html](http://nodejs.org/api/readline.html)

## Preparation 3 'intro http server'
A. Start the http-server by typing:
```
node --harmony intro_http_server.js
```
In a browser surf to ```localhost:3000``` and make sure you'll see 'hello world' in your browser window

B. Try to find the message headers of the response in different browsers.
What are the default response headers and values that node sends back?

C. Remove this line and inspect behaviour in multiple browsers (put is back when done)
Don't forget to restart te server after every change.

D. On the server: log all request headers, the request urls and the request methods

E. On the server: store the number of requests and send them to the client. Only GET request should be processed

## Classroom Activities
1.  **Homework discussion:** Feedback and in-depth discussion based on your submissions for the homework
1.  **Asynchronous Exceptions :** We'll show how to deal with exceptions in callbacks.
1.  **New exercises:** There will be some time to practise you JavaScript in follow up exercises

Demo New Material
-----------------
* 'exeptions async'

Class Assignments
-----------------

### Assignment 1 'hangman version 7'

### Assignment 2 'hangman version 8'

# Session 2.3: Test and Asynchronous testing

## Test Preparation
Prepare for the small-test by learning:

1. [http://www.objectplayground.com/](http://www.objectplayground.com/) up to 19:28 'subclasses'
1. [http://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177]
   (http://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177)
   up to 'Using HTTP in Web Frameworks and Libraries'. Make sure you understands the protocol basics.
   Don't memorize the status codes, but you should know the anatomy of an URL and the most
   commonly known HTTP methods by heart.
1. [http://speakingjs.com/es5/ch01.html](http://speakingjs.com/es5/ch01.html) completely.  

## Classroom activities
1. **The small-test:** Earn some points!
1. **Workshop about asynchronous testing**
