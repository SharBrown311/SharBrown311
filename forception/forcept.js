
    //alphabet = alphabet.toUpperCase()
    //alphabet = alphabet.split('')

    
// function forception(people , alphabet){
//     
//     var result = [];
//     for (var i = 0 ; i < people.length; i ++){
//         result.push(people[i].concat(':'));
//         for(var j = 0; j <alphabet.length; j ++){
//             result.push(alphabet.toUpperCase().split('')[j])
//         }
//     }
// return result;
        
// }
// console.log(result);
var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var resultOfForception = function(people , alphabet){
var result = [];
for(var i = 0; i < people.length; i ++){
    result.push(people[i].concat(":"));
    for(var j = 0; j < alphabet.length; j ++){
        result.push(alphabet.toUpperCase().split("")[j]);
    }
}
return result
}
console.log(resultOfForception(people , alphabet))

//output : // [object Array] (135)
//["Jon:","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
//"Jacob:","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
//"Jingle:","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
//"Heimer:","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
//"Schmidt:","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]