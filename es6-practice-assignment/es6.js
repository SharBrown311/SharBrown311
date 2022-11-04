//Replace all the vars with let and const

let mansName = "John"
const age = 101

function runForLoop(pets) {
    var petObjects = []
    for (var i = 0; i < pets.length; i++) {
        var pet = { type: pets[i] }
        var name;
        if (pets[i] === "cat") {
            name = "Fluffy"
        } else {
            name = "Spot"
        }
        console.log("Pet's name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("Man's name: ", mansName)
    return petObjects
}

runForLoop(["cat", "dog"])


//Rewrite .map using arrow function
const carrots = ['bright orange', 'ripe', 'rotten']


mapVegetables= arr => arr.map(carrot =>{
  return {type: 'carrot', name: carrot}
})
console.log(mapVegetables(carrots))

//Rewrite filter using arrow function
const people = [
  {
    name: 'Princess Peach', 
    friendly: false
  },
  {
    name:"Luigi", 
    friendly: true
  }, 
  {
    name: 'Mario', 
    friendly: true
  }, 
  {
    name: 'Bowser', 
    friendly: false
  }
]
filterForFriendly = arr =>arr.filter(person =>person.friendly)
console.log(filterForFriendly(people))

//Rewrite functions to be arrow functions
function doMathSum(a, b) {
  return a + b
}

var produceProduct = function(a, b) {
  return a * b
}


doMathSum = (a, b) => a + b 
console.log(doMathSum(10, 10))//test
produceProduct = (a, b) => a * b
console.log(produceProduct(5 , 5))//test


//Write a printString function 
const obj = {firstName: 'Kat', lastName: 'Stark', age: 40}
function printString(firstName = 'Jane', lastName = 'Does', age = 100){
  return `Hi ${obj.firstName} ${obj.lastName}, how does it feel to be ${obj.age}?`
  //template literal
  + "Hi" + " " + obj.firstName + " " + obj.lastName + ", how does it feel to be " + obj.age + "?"
//concated string
}
console.log(printString(obj))

const animals = [
  {
      type: "dog",
      name: "theodore"
  },
  {
      type: "cat",
      name: "whiskers"
  },
  {
      type: "pig",
      name: "piglette"
  },
  {
      type: "dog",
      name: "sparky"
  }
];

function filterForDogs(arr) {
   return arr.filter(animal => {
       if (animal.type === "dog") {
           return true
       } else {
           return false
       }
   })
}
filterForDogs = arr => arr.filter(animal =>animal.type === 'dog')
console.log(filterForDogs(animals))

//Template Literals

const hi = {location: 'Hawaii', name: 'Janice'}
welcome = (location, name) => `Hi ${hi.name}!
Welcome to ${hi.location}. 
I hope you enjoy your stay.
Please ask the president of ${hi.location} if you need anything.`
console.log(welcome(hi))

//Templating