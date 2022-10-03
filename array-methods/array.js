var fruits = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];


//1:
var vegetables1st = vegetables.pop()
console.log(vegetables1st)
console.log('Vegetables: ' , vegetables)

//2:
fruits1st = fruits.shift()
console.log(fruits1st)
console.log('Fruits: ' , fruits)

//3: 
fruits2nd = fruits.indexOf('orange' , fruits)
console.log(fruits2nd)
console.log('Fruits' , fruits)

//4:
fruits3rd = fruits.push(fruits2nd)
console.log(fruits3rd)
console.log('Fruits: ', fruits)

//5: 
vegetables2nd = vegetables.length
console.log(vegetables2nd)
console.log('Vegetables: ' , vegetables)

//6:
vegetables3rd = vegetables.push(vegetables2nd)
console.log(vegetables3rd)
console.log('Vegetables: ' , vegetables)

//7:
var food = fruits.concat(vegetables)
console.log('Food: ' , food)

//8:
foods2nd = food.splice( 4, 2)
console.log(foods2nd)
console.log('Food: ' , food)


//9: 
food = food.reverse()
console.log('Food: ' , food)

//10: 
food = food.toString()
console.log('Food: ' , food)