//UPPERCASE and lowercase
//capitilizeAndLowercase("HelLo") // => "HELLOhello"

function capitilizeAndLowercase(){
  var string = "HelLo"
  var capped = string.toUpperCase()
  console.log(capped)
  var lowered = string.toLowerCase()
  console.log(lowered)
  var joined = capped.concat(lowered)
  console.log(joined)
}
//Find the middle index and round
//findMiddleIndex("Hello") // => 2

function findMiddleIndex(str){
  if(str.length % 2 == 1){
    var rounded = Math.floor(str.length / 2)
    return rounded;
  }
  while(str.length % 2 == 0){
    return str
  }
}
console.log(findMiddleIndex("Hello"))
//output : 2
 
  //findMiddleIndex("Hello World") // => 5
  
function findMiddleIndex(str){
  if(str.length % 2 == 1){
    var rounded = Math.floor(str.length / 2)
    return rounded;
  }
  while(str.length % 2 == 0){
    return str
  }
}
console.log(findMiddleIndex("Hello World"))
//output: 5

//Use slice in a function to return first 
//half of a string

function returnFirstHalf(str){
  if(str.length % 2 == 1){ //0 for even 1 for odd
    return str.slice(0, str.length / 2)
  }
  return str
}
console.log(returnFirstHalf("Hello"))
//output: 'He'





function returnFirstHalf(str){
  if(str.length % 2 == 1){ //0 for even 1 for odd
    return str.slice(0, str.length / 2)
  }
  return str
}
console.log(returnFirstHalf("Hello World"))
//output: "Hello"



//function returns first half Uppercased
//and second half lowercased
 
function capitilizeAndLowercase(word){
  return word.slice(0, Math.floor(word.length/2)).toUpperCase() 
  + word.slice(Math.floor(word.length)/2).toLowerCase()

}

console.log(capitilizeAndLowercase('Hello World'))
console.log(capitilizeAndLowercase('Hello my name is Sharon'))//test
//Optional


function capitilize(str){
  var strOne = str.split(" ")
   //console.log(strOne)//["hey","friends!","practice","practice","practice!"]
  var str1 = strOne[0] + " " + strOne[1]
   //console.log(str1)//"hey friends!"
 var str1Copy = str1.split('')
 //console.log(str1Copy)//["h","e","y"," ","f","r","i","e","n","d","s","!"]
 var str1Copy1 = str1Copy[0].toUpperCase();//H
 var str1Copy2 = str1Copy[4].toUpperCase()//F
 var str1Complete = str1Copy1 + str1Copy[1] + str1Copy[2] +str1Copy[3]+ str1Copy2 + str1Copy[5] + str1Copy[6] + str1Copy[7] + str1Copy[8] + str1Copy[9] + str1Copy[10] + str1Copy[11] 
 //console.log(str1Complete)
var str2 = strOne[2] +  " " +strOne[3]+ " " + strOne[4]
var str2Copy = str2.toUpperCase()
//console.log(str2Copy)//H
 var result = str1Complete.concat(str2Copy)
 return(result)
}///NOT THE RIGHT WAY
console.log(capitilize("hey friends! practice practice practice!"))

