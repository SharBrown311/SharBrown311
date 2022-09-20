//Problem #1
function largestNum(numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i ++){
      if(numbers[i] > largest){
        largest = numbers[i];
      }
    }
    console.log(largest)
  }
  //test data
  largestNum([6 , 13 , 250 , 3])//test #1 => 250
  largestNum([3 , 5 , 2 , 8 , 1])//test #2 => 8
  largestNum([-13 , 40 , 3 , 0 , 19 , 22])//test #3 =>40



c
  //Problem #2

function lettersWithStrings(letterArr , b){
    let words = letterArr[0];
    for(let i = 0; i < letterArr.length; i ++){
      if(letterArr[i].includes(b)){
        words = letterArr[i]
        console.log(words)
      }
    }
  }
  
  // test data
  lettersWithStrings(["$hello!", "%%^%%", "test!"], "!") // =>"$hello!" "test!"
  lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!")// =>"C%4!" "Hey!"
  lettersWithStrings(["yellow", "green", "^up^", "down", "dog"], "h")//=> [empty]

//Problem #3
let divisible = false;
function isDivisible(num1 , num2){
  if(num1 % num2 === 0){
    divisible = true;
    console.log(divisible)
  }else{
    isDivisible = false;
    console.log(divisible)
  }
}
//test data
isDivisible(4 , 2) //=> test#1 = true
isDivisible(9 , 3) //=> test#2 = true
isDivisible(15, 4) //=>test #3 = false
