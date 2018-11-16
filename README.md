# JavaScript Fns as First Class Data: Do behavior

## Learning Goals

- Create a "First-Class" function

## Introduction

(Talk about first class functions again with a basic example)

## Create a "First-Class" Function

We're going to create a web greeting! Working in [24 hour time](https://en.wikipedia.org/wiki/24-hour_clock),
create a set of conditions that will give the user different greetings
depending on the time that is submitted. The `<input>` element is of
type `time`, which will automatically convert your `AM` and `PM` hours
to 24 hour time.

We've given some starter code in `index.html` that contains the form
field and an `h1`. Write code in `index.js` in a function called `greet`
that will produce  the following results when the `submit` button
is _clicked_:

- If the time is earlier than 12pm, return "Good Morning".
- If the time is between 12pm and 5pm, return "Good Afternoon".
- If the time is later than 5pm, return "Good Evening".

The `greet` function should return the greeting in string form. Additionally,
program the `greet` function to update the DOM on the `h1` element with id of
`greeting`.

**NOTE:** The value returned from the `<input>` will be of type `String`.
You’ll need to take the `String` of the 24 hour time and covert it to a number.
The `split()` [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
and the `parseInt()` [functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) should help.

## Conclusion

## Resources
