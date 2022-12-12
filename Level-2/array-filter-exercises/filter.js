//Part 1
function fiveAndGreaterOnly(arr) {
    const result = arr.filter(arr => arr > 5)
    return result
  }
  // test
  console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]
   
  //Part 2
  function evensOnly(arr) {
    const evens = arr.filter( arr => arr % 2 == 0)
    return evens
  }
  // test
  console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]
  

  //Part 3
  function fiveCharactersOrFewerOnly(arr) {
    const fiveOrLess = arr.filter(arr => arr.length <= 5)
    return fiveOrLess
  }
  // test
  console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]
  

  //Part 4
  function peopleWhoBelongToTheIlluminati(arr){
    const yesItsThem = arr.filter(arr => arr.member === true)
    return yesItsThem
  }
  // test
  console.log(peopleWhoBelongToTheIlluminati([
      { name: "Angelina Jolie", member: true },
      { name: "Eric Jones", member: false },
      { name: "Paris Hilton", member: true },
      { name: "Kayne West", member: false },
      { name: "Bob Ziroll", member: true }
  ]));
  // =>
  //[ { name: 'Angelina Jolie', member: true },
  //  { name: 'Paris Hilton', member: true },
  //  { name: 'Bob Ziroll', member: true } ]


  //Part 5
  function ofAge(arr){
    const age = arr.filter(arr => arr.age > 18)
    return age 
  }
  // test
  console.log(ofAge([
      { name: "Angelina Jolie", age: 80 },
      { name: "Eric Jones", age: 2 },
      { name: "Paris Hilton", age: 5 },
      { name: "Kayne West", age: 16 },
      { name: "Bob Ziroll", age: 100 }
  ]));
  // =>
  //[ { name: 'Angelina Jolie', age: 80 },
  //  { name: 'Bob Ziroll', age: 100 } ]    