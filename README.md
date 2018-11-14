# Getting started

## Terminal

`npm run watch`

This checks for any coding changes and when saved, compiles and updates the hosted page.

> Red text are problems that you need to debug what it says in the message above.

## Browser

http://localhost:3000/

It should reload every few seconds, but sometimes you do need to refresh the web page yourself.

## Code updates

In the file corresponding to the one you are trying to solve (e.g. [nov15TranslationA.js](src\nov15TranslationA.js)) update the translation when you want to try a letter.

e.g. if you think ciphered letter `K` corresponds to an `a` then change the `_` in the translation to be `a`:

~~~javascript
translation.K = "_";
~~~

should become

~~~javascript
translation.K = "a";
~~~

Save the file and it will show you all those letters in the column on the right.

