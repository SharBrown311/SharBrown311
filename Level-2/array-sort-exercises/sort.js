//Part 1

function leastToGreatest(arr) {
    const result = arr.sort((a , b) => a - b)
    return result
  }
  
  console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90]
  

//Part 2
function greatestToLeast(arr) {
    const backwards = arr.sort((a , b ) => b - a)
    return backwards
  }
  
  console.log(greatestToLeast([1, 3, 5, 2, 90, 20])); // [90, 20, 5, 3, 2, 1]
  
  //Part 3
  function lengthSort(arr) {
    const sorted = arr.sort((a , b)=> a.length - b.length)
        return sorted
    
  }
  
  console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "wolf", "eaten", "family"]
  
  //Part 4
  function alphabetical(arr) {
   const alpha = arr.sort()
   return alpha
}

console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "eaten", "family", "wolf"]

//Part 5
function byAge(arr){
    const aged = arr.sort((a,b)=> a.age - b.age)
        return aged
  
  }
  
  console.log(byAge([
      { name: "Quiet Samurai", age: 22 },
      { name: "Arrogant Ambassador", age: 100 },
      { name: "Misunderstood Observer", age: 2 },
      { name: "Unlucky Swami", age: 77 }
  ]));
  // => [ { name: 'Misunderstood Observer', age: 2 },
  //  { name: 'Quiet Samurai', age: 22 },
  //  { name: 'Unlucky Swami', age: 77 },
  //  { name: 'Arrogant Ambassador', age: 100 } ]