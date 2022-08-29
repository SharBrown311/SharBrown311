//Preliminaries - Array For Loop
    //Part 1.) Write a For Loop that will print the numbers 0-9 //
    //in the console//
    //let i;  
    // for (i = 0 ; i < 10; i ++){
    //     console.log(i)
    // }
//outputs 
//0
//1
//2
//3
//4
//5
//6
//7
//8
//9


//Part 2.) Write a for loop that prints to the console 9 through 0 .  
// for (i = 9  ; i > -1 ; i -= 1){
//     console.log(i)
// }
//output 
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0


//Part 3.)Write a for loop that prints these fruits to the console.

// const fruits = ['Banana' , 'Orange' ,'Apple', 'Kiwi'];
// for (x of fruits){
//     console.log(x)
// }
//outputs
//Banana
//Orange
//Apple
//Kiwi


//Bronze Medal
    //Part 1.) Write a for loop that will push the numbers 
    //0 through 9 to an array.

    // var numberArray = [];

    // for(var i = 1; i <= 10; i++){
        // numberArray.push(i);
    // }
    
    // console.log(numberArray);

    //outputs
    // [
    //     1, 2, 3, 4,  5,
    //     6, 7, 8, 9, 10
    //   ]

    //Part 2.)Write a for loop that prints to the console 
     //only even numbers 0 through 100.

    //  for (i = 1; i <= 100; i ++){
    //     if( i % 2 === 0){
    //         console.log(i)
        // }
    //  }
     //output 
// 2
// 4
// 6
// 8
// 10
// 12
// 14
// 16
// 18
// 20
// 22
// 24
// 26
// 28
// 30
// 32
// 34
// 36
// 38
// 40
// 42
// 44
// 46
// 48
// 50
// 52
// 54
// 56
// 58
// 60
// 62
// 64
// 66
// 68
// 70
// 72
// 74
// 76
// 78
// 80
// 82
// 84
// 86
// 88
// 90
// 92
// 94
// 96
// 98
// 100

//Part 3.) Write a for loop that will push every other fruit to an array.

// const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// function everyOtherFruit(array){
  //  var newFruitArray =[];
  //  for (var i = 1; i < fruit.length; i += 2){
    // newFruitArray.push(fruit[i])
  //  }
  //  return newFruitArray.join(", ")
// }console.log(everyOtherFruit(fruit))

//output
//"orange, kiwi, peach"
//Silver
//Part 1.)Write a loop that will print out all the names of the people of the people array
// const peopleArray = [
//   {
//     name: 'Harrison Ford', 
//     occupation: 'Actor'
//   },
//   {
//     name: 'Justin Bieber',
//     occupation: 'Singer'
//   },
//   {
//     name: 'Vladimir Putin',
//     occupation: 'Politician'
//   },
//   {
//     name: 'Oprah', 
//     occupation: 'Entertainer'
//   }
// ]
// //for each method on an array of objects
// peopleArray.forEach(function(obj){
//   console.log(obj.name)
// })
//output
//Harrison Ford
// Justin Bieber
// Vladimir Putin
// Oprah

// Part 2.)Write a loop that pushes the names into a names array, and the occupations into an occupations array.
// const peopleArray = [
    // {
      // name: 'Harrison Ford', 
      // occupation: 'Actor'
    // },
    // {
      // name: 'Justin Bieber',
      // occupation: 'Singer'
    // },
    // {
      // name: 'Vladimir Putin',
      // occupation: 'Politician'
    // },
    // {
      // name: 'Oprah', 
      // occupation: 'Entertainer'
    // }
// ]
// let arrOfNames =[];
// let arrOfOccupations = [];
// for(let i = 0; i <peopleArray.length; i ++){
  // arrOfNames.push(peopleArray[i].name)
  // arrOfOccupations.push(peopleArray[i].occupation)
// }
// console.log(arrOfNames);
// console.log(arrOfOccupations)

// output
// [ 'Harrison Ford', 'Justin Bieber', 'Vladimir Putin', 'Oprah' ]
// [ 'Actor', 'Singer', 'Politician', 'Entertainer' ]
