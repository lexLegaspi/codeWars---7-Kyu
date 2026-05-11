// In Russia regular bus tickets usually consist of 6 digits. The ticket is called lucky when the sum of the first three digits equals to the sum of the last three digits. Write a function to find out whether the ticket is lucky or not. Return true if so, otherwise return false. Consider that input is always a string. Watch examples below.

// isLucky('123321') => 1+2+3 = 3+2+1 => true // The ticket is lucky
// isLucky('12341234') => false // Only six-digit numbers allowed :(
// isLucky('12a21a') => false // Letters are not allowed :(
// isLucky('100200') => false // :(
// isLucky('22') => false // :(
// isLucky('abcdef') => false // :(

// My Solution:

function isLucky(ticket) {
  const isInt = (x) => Number.isInteger(x);
  if (ticket.length != 6) return false;
  if (typeof Number(ticket) != "number") return false;
  let half1 = ticket
    .slice(0, ticket.length / 2)
    .split("")
    .map(Number)
    .reduce((a, b) => a + b, 0);
  let half2 = ticket
    .slice(ticket.length / 2)
    .split("")
    .map(Number)
    .reduce((a, b) => a + b, 0);

  return half1 == half2;
}
