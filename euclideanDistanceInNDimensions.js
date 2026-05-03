// Implement a function to calculate the distance between two points in n-dimensional space.
// The two points will be passed to your function as arrays of the same length.

// My Solution:

function euclideanDistance(point1, point2) {
  let differences = [];
  for (let i = 0; i < point1.length; i++) {
    differences.push(Math.pow(point1[i] - point2[i], 2));
  }
  return Math.sqrt(differences.reduce((a, b) => a + b, 0));
}
