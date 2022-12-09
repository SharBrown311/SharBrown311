//Part 1

function doubleNumbers(arr){
    return arr.map((num) => num * 2)
  }
  console.log(doubleNumbers([2 , 5 , 100]))

//Part 2

function stringItUp(arr){
    return arr.map((nums) => nums.toString())
  }
  
  console.log(stringItUp([2, 5, 100])); 
  // ["2", "5", "100"] ["2", "5", "100"]
  


//Part 3

function capitalizeNames(arr){
    const capNames = x =>x[0].toUpperCase() +
    x.slice(1).toLowerCase()
    let caps = arr.map(capNames)
    return caps
    }
  
   console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 

  

//Part 4
function namesOnly(arr){
    const names = arr.map(x => x.name)
    return names
  }
  
  console.log(namesOnly([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
  

  //Part 5
  function makeStrings(arr){
    const result = arr.map(arr => arr.age >= 18 ? arr.name + ' Can go to the Matrix' :arr.name + ' is under age!!')
    return result
  }
  
  console.log(makeStrings([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["Angelina Jolie can go to The Matrix",
  // "Eric Jones is under age!!",
  // "Paris Hilton is under age!!",
  // "Kayne West is under age!!",
  // "Bob Ziroll can go to The Matrix"]

  //Part 6
  function readyToPutInTheDOM(arr){
    return arr.map(function(obj){
        return '<h1>' + obj.name + '</h1>' +
               '<h2>' + obj.age + '<h2>'
    })
  }
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["<h1>Angelina Jolie</h1><h2>80</h2>",
  // "<h1>Eric Jones</h1><h2>2</h2>",
  // "<h1>Paris Hilton</h1><h2>5</h2>",
  // "<h1>Kayne West</h1><h2>16</h2>",
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]