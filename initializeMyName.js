// Some people just have a first name; some people have first and last names and some people have first, middle and last names.

// You task is to initialize the middle names (if there is any).

// Examples
// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

// My Solution:

function initializeNames(name) {
  // Insert your brilliant code here
  if (name.split(" ").length <= 2) return name;

  let initials = name
    .split(" ")
    .slice(1, -1)
    .map((x) => x[0] + ".")
    .join(" ");
  name = name.split(" ");
  return name[0] + " " + initials + " " + name[name.length - 1];
}
