// Your goal is to create a function that takes a guess (string) and optionally a phone number (string).

// Based on the guess, your function should display only the matching digits in the phone number, and hide the other digits with #:

// guess = "052"
// number = "123-451-2345"
// // would return the string: "#2#-#5#-2##5"
    
// guess = "142"
// number = "123-451-2345"
// // would return the string: "12#-4#1-2#4#"
// The guess is a string of containing unordered and distinct digits (0-9). It will never be empty and will never contains any other characters.

// The phone number will always be a ten digit number in the format ###-###-####. If no phone number is supplied, 123-451-2345 should be used as the default.

// My Solution:


function guessMyNumber(guess, number = '123-451-2345') {
  // Your code here
  return number.split('').map(x=> {
    if(guess.includes(x) || x == '-'){
       return x
       }else{
      return '#'
    }
  }).join('');
}