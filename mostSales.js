// You work in the best consumer electronics corporation, and your boss wants to find out which three products generate the most revenue. Given 3 lists of the same length like these:

// products: ["Computer", "Cell Phones", "Vacuum Cleaner"]
// amounts: [3, 24, 8]
// prices: [199, 299, 399]
// Return the three product names with the highest revenues (amount * price), in descending order (highest to lowest revenue).

// Note: if multiple products have the same revenue, order them according to their original positions in the input list.

// My Solution:

function top3(products, amounts, prices) {
  let revenue = [];

  for (let i = 0; i < products.length; i++) {
    revenue.push(amounts[i] * prices[i]);
  }
  return products
    .map((x, i) => [x, revenue[i]])
    .sort((a, b) => b[1] - a[1])
    .map((x) => x[0])
    .slice(0, 3);
}
