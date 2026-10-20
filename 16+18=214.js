// For this kata you will have to forget how to add two numbers.

// ...16+18=214

// In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

// You may assume both integers are positive integers.

// My Solution:

function add(num1, num2) {
  let max = Math.max(String(num1).split('').length, String(num2).split('').length)
  let tempNum1 = [...Array(max - String(num1).length).fill('0'), ...String(num1)];
  let tempNum2 = [...Array(max - String(num2).length).fill('0'), ...String(num2)]

  return +tempNum1.map((x, i) => Number(x) + Number(tempNum2[i])).join('')
}