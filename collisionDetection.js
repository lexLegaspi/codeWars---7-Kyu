// Create a function to determine whether or not two circles are colliding. You will be given the position of both circles in addition to their radii:

// function collision(x1, y1, radius1, x2, y2, radius2) {
//   // collision?
// }
// If a collision is detected, return true. If not, return false.

// My Solution:

function collision(x1, y1, radius1, x2, y2, radius2) {
  // collision?
  let requiredDistance = radius2 + radius1;
  let circleDistance = Math.hypot(x2 - x1, y2 - y1);
  return circleDistance <= requiredDistance;
}
