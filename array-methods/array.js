var fruits = ['banana', 'apple', 'orange', 'watermelon'];
var vegetables = ['carrot' , 'tomato' , 'pepper' , 'lettuce'];

var vegetables = vegetables.pop();
console.log("vegetables: ", vegetables);
//output: "vegetables: " "lettuce"

var fruits = fruits.shift();
console.log("fruit: " , fruits);
//output: "fruit: " "banana"

var fruits = fruits.indexOf("orange", fruits)
console.log(fruitsSecondChange)
//output "fruits: 1

var vegetablesSecondChange = vegetables.length
console.log("Vegetables: " , vegetablesSecondChange)
//output:3
var vegetablesThirdChange = vegetables.push(3)
console.log("Vegetables: " , vegetables)
//output:
//["carrot","tomato","pepper",3]
var foods = fruits.concat(vegetables)
console.log("Foods: " , foods)
//output: // [object Array] (8)
//["apple","orange","watermelon",1,"carrot","tomato","pepper",3]
var foodsTwo = foods.splice(4 , 2)
console.log("Foods: " , foodsTwo)
//output: // [object Array] (2)
//["carrot","tomato"]
var foods = foods.reverse()
console.log("Foods: " , foods)
//output: // [object Array] (6)
//[3,"pepper",1,"watermelon","orange","apple"]
var foods = foods.join();
console.log("Foods: " , foods)
//output: "3,pepper,1,watermelon,orange,apple"