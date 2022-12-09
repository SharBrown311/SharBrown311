var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]
const newPeople = [
    {firstName: 'Amelia', lastName: 'Earhart' , age: 106},
    {firstName: 'Brian' , lastName: 'Jankovich' , age: 83},
    {firstName: 'Emily' , lastName: 'Hudson' , age: 85}
]

const whole = newPeople.concat(peopleArray)
console.log(whole)

const sortedByAge = whole.filter(function(person){
    if(person.age >= 18){
        return person
    }
})
console.log(sortedByAge)
const sortedByName = sortedByAge.sort(function(a , b){
    if(a.lastName > b.lastName){
        return 1
    }
    if(a.lastName < b.lastName){
        return -1
    }
})
console.log(sortedByName)

const liAdded = sortedByName.reduce(function(final , person){
    final.push('<li>' + person.firstName + ' ' + person.lastName + ' is ' + person.age + '</li>' )
    return final
}, [])
const removed = liAdded.splice(1 , 1)
console.log(liAdded)
console.log(removed)

let matchedPersons = [];
let searchForY = 'y'

searchForY = searchForY.toLowerCase()
    liAdded.forEach(item =>{
        if(item.toLowerCase().indexOf(searchForY) !== -1){
            console.log(item)
            matchedPersons.push(item)
        }
        console.log(matchedPersons)
    })
 


// function sortedOfAge(arr){
//     Array.filter(function(person){//filter
//         if(person.age >= 18){
//             return person
//         }
//         arr.sort(function(a , b){
//                 if(a.lastName < b.lastName)
//                 return -1;
//                 if(a.lastName > b.lastName)
//                 return 1;
//                 return 0;
//              })
             
//         }
        
//     )}
// console.log(peopleArray.sort(sortedOfAge))


// console.log(sortedOfAge(peopleArray));


 




