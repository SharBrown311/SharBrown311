//1: Rest Operator-
function collectAnimals(...animals) {
  return [...animals]
}
console.log(
collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))
// ["dog", "cat", "mouse", "jackolope", "platypus"]


//2:Write a function that returns a food object with the array names as properties-

function combineFruit(fruit, sweets, vegetables){
  return {
      fruit, 
      sweets: [...sweets], 
      vegetables:[...vegetables]
  }
}

console.log(combineFruit(["apple", "pear"],
           ["cake", "pie"],
           ["carrot"]))



 //  //=> {
//        fruit: ["apple", "pear"],
//        sweets: ["cake", "pie"],
//        vegetables: ["carrot"]
// }


//3: Destructuring-
function parseSentence({location, duration}){
  return `We're going to have a good time in ${location} for ${duration}`
}
console.log(
parseSentence({
  location: "Burly Idaho",
  duration: "2 weeks"
}));




//4: Destructuring
function returnFirst(items){
  const [firstItem, , ,] = items;
  return firstItem
}
console.log(returnFirst(["apple", "pear", "cake", "pie", "carrot"]))
//5: Destructuring

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites([firstFav, secondFav, thirdFav, ...arr]){
    /*your code here*/
    return `My top three favorite activities are ${firstFav}, ${secondFav}, and  ${thirdFav}!`
}
console.log(
returnFavorites(favoriteActivities)
)


//6: Rest and Spread
function combineAnimals(a, b, c) {
  return [...a, ...b, ...c]
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(
  combineAnimals([...realAnimals], [...magicalAnimals], [...mysteriousAnimals]));


//7: ES6

// function product(a, b, c, d, e) {
//   var numbers = [a,b,c,d,e];

//   return numbers.reduce(function(acc, number) {
//     return acc * number;
//   }, 1)
// }

product = (a, b, c, d, e) => [a, b, c, d, e].reduce((acc, number) => {
  return acc * number;
}, 1)

console.log(product(1, 2, 3, 4, 5))

//8: ES6

// function unshift(array, a, b, c, d, e) {
//   return [a, b, c, d, e].concat(array);
// }

unshift = (arr, a, b, c, d, e) => [a, b, c, d, e, ...arr];
let arr = ["wow" , "yes"]
console.log(unshift(arr, 1, 23, 'no', false, 1))

//9:ES6
// function populatePeople(names){
//   return names.map(function(name){
//       name = name.split(" ");
//       // your code
//       return {
//           firstName: firstName,
//           lastName: lastName
//       }
//   })
// }

populatePeople = (names) =>
        names.map((name)=>{
          const [firstName, lastName] = name.split(" ")
          return {firstName: firstName, lastName: lastName}
        })
console.log(
populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]