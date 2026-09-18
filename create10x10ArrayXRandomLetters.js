// Create 10x10 array and randomly fill each cell with 'A', 'B', 'C' or 'D' 
// and ensure that each row contain at least one occurance of each letter. 
// Example: [ ['A', 'A', 'B', 'C', 'B', 'D', 'A', 'C', 'C', 'D'], ['A', 'B', 'B', 'C', 'B', 'D', 'A', 'A', 'C', 'D'], ['A', 'A', 'A', 'C', 'B', 'D', 'A', 'C', 'C', 'D'], ['C', 'A', 'B', 'C', 'B', 'C', 'D', 'B', 'C', 'A'], ['A', 'A', 'B', 'D', 'B', 'B', 'A', 'C', 'B', 'A'], ['B', 'A', 'B', 'C', 'B', 'D', 'A', 'B', 'C', 'B'], ['A', 'A', 'D', 'C', 'A', 'D', 'B', 'C', 'C', 'C'], ['B', 'A', 'B', 'C', 'B', 'D', 'B', 'C', 'C', 'D'], ['D', 'A', 'B', 'C', 'B', 'D', 'A', 'C', 'C', 'D'], ['A', 'A', 'B', 'C', 'B', 'D', 'A', 'C', 'C', 'D'], ]

// My Solution:

function array10(){
  function randomizer(){
    return ['A', 'B', 'C', 'D'][Math.floor(Math.random() * 4)]
  }

  let arr = new Array(10).fill(new Array(10).fill(0))

  return arr.map(x => {
    let used = []

    return x.map(y => {
      let current = randomizer()

      while (used.length < 4 && used.includes(current)) {
        current = randomizer()
      }

      used.push(current)

      return current
    })
  })
}