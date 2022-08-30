var fruits = ['banana', 'apple', 'orange', 'watermelon'];
var vegetables = ['carrot' , 'tomato' , 'pepper' , 'lettuce'];

var vegetables = vegetables.pop();
console.log("vegetables: ", vegetables);
//output: "vegetables: " "lettuce"

var fruits = fruits.shift();
console.log("fruit: " , fruit);
//output: "fruit: " "banana"

var fruits = fruits.indexOf("orange", fruits)
console.log(fruitsSecondChange)
//output "fruits: 1

var vegetablesSecondChange = vegetables.length
console.log(vegetablesSecondChange)
//output:3
var vegetablesThirdChange = vegetables.push(3)
console.log(vegetables)
//output:// [object Array] (4)
//["carrot","tomato","pepper",3]
var food = fruits.concat(vegetables)
console.log(food)
//output: // [object Array] (8)
//["apple","orange","watermelon",1,"carrot","tomato","pepper",3]
var foodTwo = food.splice(4 , 2)
console.log(foodTwo)
//output: // [object Array] (2)
//["carrot","tomato"]
var food = food.reverse()
console.log(food)
//output: // [object Array] (6)
//[3,"pepper",1,"watermelon","orange","apple"]
var food = food.join();
console.log(food)
//output: "3,pepper,1,watermelon,orange,apple"