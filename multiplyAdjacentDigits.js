// Multiply the adjacent digits which are not separated by a '-' or a '+' in a string, then do the sum.

// Examples
// "53+5"    -->   20  # = 5 * 3 + 5
// "266-66"  -->   36  # = 2 * 6 * 6 - 6 * 6
// "555"     -->  125  # = 5 * 5 * 5

// My Solution:

function digitMultiplication(expr) {
  let numbers = [];
  let operators = [];
  let current = "";

  for (let char of expr) {
    if (char === "+" || char === "-") {
      numbers.push(current);
      operators.push(char);
      current = "";
    } else {
      current += char;
    }
  }

  numbers.push(current);

  let result = 0;

  for (let i = 0; i < numbers.length; i++) {
    let num;

    if (numbers[i].length > 1) {
      num = numbers[i]
        .split("")
        .map((x) => Number(x))
        .reduce((a, b) => a * b, 1);
    } else {
      num = Number(numbers[i]);
    }

    if (i === 0) {
      result = num;
    } else if (operators[i - 1] === "+") {
      result += num;
    } else {
      result -= num;
    }
  }

  return result;
}
