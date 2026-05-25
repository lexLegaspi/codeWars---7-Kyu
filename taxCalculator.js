// Write a function to calculate compound tax using the following table:
// For $10 and under, the tax rate should be 10%.
// For $20 and under, the tax rate on the first $10 is %10, and the tax on the rest is 7%.
// For $30 and under, the tax rate on the first $10 is still %10, the rate for the next $10 is still 7%, and everything else is 5%.
// Tack on an additional 3% for the portion of the total above $30.
// Return 0 for invalid input(anything that's not a positive real number).
// Examples:
// An input of 10, should return 1 (1 is 10% of 10)
// An input of 21, should return 1.75 (10% of 10 + 7% of 10 + 5% of 1)
// * Note that the returned value should be rounded to the nearest penny.

// My Solution:

function taxCalculator(total) {
  let excess = total - 30;
  // Return the amount of tax for the supplied total
  if (total > 30) {
    let excess = total - 30;
    return +(2.2 + excess * 0.03).toFixed(2);
  } else if (total > 20 && total <= 30) {
    let excess = total - 20;
    return +(1.7 + excess * 0.05).toFixed(2);
  } else if (total > 10 && total <= 20) {
    let excess = total - 10;
    return +(1 + excess * 0.07).toFixed(2);
  } else if (Number.isInteger(total) && total > 0) {
    return +(total * 0.1).toFixed(2);
  } else {
    return 0;
  }
}
