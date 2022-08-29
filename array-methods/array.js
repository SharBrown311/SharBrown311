var fruit = ['banana', 'apple', 'orange', 'watermelon'];
var vegetables = ['carrot' , 'tomato' , 'pepper' , 'lettuce'];

var poppedItem = vegetables.pop();
console.log(poppedItem);
//output removed last index item lettuce
console.log("vegetables: ", vegetables)
//output: "vegetables: " // [object Array] (3)
//["carrrot","tomato","pepper"]

var firstElement =  fruit.shift()
console.log(firstElement)
//output : banana

var orangeIndex = fruit.indexOf("orange", fruit)
console.log(orangeIndex)