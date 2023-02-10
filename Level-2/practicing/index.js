




const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')//unshift adds to the beginning of the array
shoppingCart.push('Sugar')//push adds to the end of the array
const sliced = shoppingCart.slice(4, 5)//makes a copy of the element


const filtered = shoppingCart.filter(function(value){
  return value === "Honey"
})
console.log(shoppingCart)
shoppingCart.splice(4, 1)
console.log(shoppingCart)


// console.log(filtered)
// console.log(sliced)
// console.log(shoppingCart)


//toString(): The JavaScript method toString() converts an array to a string separated by a comma.


// concat: This method combines two arrays together or add more items to an array and then return a new array.
//join(): The JavaScript join() method combines all array elements into a string. It is similar to toString() method, but here you can specify the separator instead of the default comma.


// push(): This method adds items to the end of an array and changes the original array.
//
//pop(): This method removes the last item of an array and returns it. 

//shift(): This method removes the first item of an array and returns it. 

//unshift(): This method adds an item(s) to the beginning of an array and changes the original array. 


// forEach: for doing a thing with or to every entry in an array;
// filter: for producing a new array containing only qualifying entries;
// map: for making a one-to-one new array by transforming an existing array;
// some: to check whether at least one element in an array fits some description;
// every: to check whether all entries in an array match a description;
// find: to look for a value in an array


const tea = shoppingCart.splice(3 , 1)
console.log(shoppingCart)
shoppingCart.splice(3, 0, 'Green-Tea')
shoppingCart.splice(1, 0, 'Strawberry Rolls')
//array name   //index number, how many elements to delete, 'string to be added'
console.log(shoppingCart)