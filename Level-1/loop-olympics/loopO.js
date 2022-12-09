//Preliminaries - Array For Loop
    //Part 1.) Write a For Loop that will print the numbers 0-9 //
    //in the console//  
    for (i = 0 ; i < 10; i ++){
      console.log(i)
    }



//Part 2.) Write a for loop that prints to the console 9 through 0 .  
for (i = 9  ; i > -1 ; i -= 1){
    console.log(i)
}



//Part 3.)Write a for loop that prints these fruits to the console.
1
const fruits = ['Banana' , 'Orange' ,'Apple', 'Kiwi'];
for (x of fruits){
    console.log(x)
}



//Bronze Medal
   //Part 1.) Write a for loop that will push the numbers 
   //0 through 9 to an array.

    var numberArray = [];

   for(var i = 1; i <= 10; i++){
       numberArray.push(i);
    }
   
    console.log(numberArray);

  

   //Part 2.)Write a for loop that prints to the console 
    //only even numbers 0 through 100.

    for (i = 1; i <= 100; i ++){
        if( i % 2 === 0){
            console.log(i)
        }
    }


//Part 3.) Write a for loop that will push every other fruit to an array.

const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
function everyOtherFruit(array){
   var newFruitArray =[];
  for (var i = 1; i < fruit.length; i += 2){
    newFruitArray.push(fruit[i])
   }
   return newFruitArray.join(", ")
}
console.log(everyOtherFruit(fruit))




//Silver
//Part 1.)Write a loop that will print out all the names of the people of the people array
let peopleArray = [
  {
    name: 'Harrison Ford', 
    occupation: 'Actor'
  },
  {
    name: 'Justin Bieber',
    occupation: 'Singer'
  },
 {
   name: 'Vladimir Putin',
   occupation: 'Politician'
 },
 {
   name: 'Oprah', 
   occupation: 'Entertainer'
 }
]
//for each method on an array of objects
peopleArray.forEach(function(obj){
 console.log(obj.name)
})


// Part 2.)Write a loop that pushes the names into a names array, and the occupations into an occupations array.
peopleArray = [
    {
     name: 'Harrison Ford', 
     occupation: 'Actor'
   },
   {
     name: 'Justin Bieber',
     occupation: 'Singer'
   },
   {
     name: 'Vladimir Putin',
     occupation: 'Politician'
   },
   {
     name: 'Oprah', 
     occupation: 'Entertainer'
   }
]
let arrOfNames =[];
let arrOfOccupations = [];
for(let i = 0; i <peopleArray.length; i ++){
 arrOfNames.push(peopleArray[i].name)
 arrOfOccupations.push(peopleArray[i].occupation)
}
console.log(arrOfNames);
console.log(arrOfOccupations)
