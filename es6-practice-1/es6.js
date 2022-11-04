
function getAgeRange({age}){
  let ageRange;
  if(age < 18 ){
     ageRange = "Child"
  }else if (age >= 18 && age < 80){
     ageRange = "Adult"
  }else{
     ageRange = "Elderly Person"
  
  }
  return ageRange
}
const person = {name: "Andrea", age: 27}
person.ageRange = getAgeRange(person)
document.writeln(`The " ${person.ageRange}, ${person.name}, is ${person.age} years old.`)
// Why is ageRange not defined?
// because it was never created so ageRange is an 
// undeclared and undefined variable//and because let is a local scope as opposed to global scope
// How can we fix this function with var?
// var makes this a local or global
// How can we fix this function avoiding the use of var?
// by declaring ageRange outside of the if else if statement.
// Why would you use const vs let?
// I wouldnt





const springMonths = [" March " , " April ", " May "]
const fallMonths = [" September ", " October ", " November "]
//replace this line with one that uses a spread operator
const fringeMonths = [...springMonths, ...fallMonths]
document.writeln(springMonths, fallMonths, fringeMonths)