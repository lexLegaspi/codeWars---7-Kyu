// Oliver likes to roast a chicken on a Sunday Afternoon.

// He knows that in order to get it just how he wants it, he should roast it for 20 minutes for every 450g of uncooked weight plus an additional 20 minutes

// You are given a weight of a uncooked chicken in kg, return for how long it needs to be roasted - in hours and minutes, rounding up to the nearest five minutes.

// If the chicken is to be roasted for more than 2 hours then write hrs, otherwise write hr.

// If the chicken is to be roasted for less than an hour, only give the number of minutes.

// If the uncooked weight is 0, return "There is no chicken!"

// An example time is 2 hrs 45 mins

// My Solution:

function cookingTime(weight) {
  if (weight === 0) return "There is no chicken!";
  let units = weight / 0.45;
  let total = Math.ceil((units * 20 + 20) / 5) * 5;
  let hour = Math.floor(total / 60);
  let minutes = total % 60;
  let result = "";
  if (hour > 1) {
    result += hour + " hrs";
  } else if (hour == 1) result += hour + " hr";
  if (minutes > 0) result += " " + minutes + " mins";

  return result.trim();
}
