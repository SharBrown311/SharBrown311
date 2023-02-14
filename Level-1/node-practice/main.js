var readlineSync = require('readline-sync');
//console must greet player with a message
console.log("Welcome to Zombie land")
var playerName = readlineSync.question('What is your name? ')
console.log(playerName)
var choice1 = readlineSync.keyIn("Hello " + playerName + "! Do you want to [w]alk or [q]uit? ", {limit: "wq"})
//create a constructor function for player and enemies
function Character(player, hp){
    this.player = player,
    this.hp = hp
}
let player = new Character(playerName, 100)
function Enemies(zombieName, hp, specialItem){
    this.zombieName = zombieName,
    this.hp = hp,
    this.specialItem = specialItem
}
let enemyArr = []
let zombie1 = new Enemies('joe', 40, 'axe')
let zombie2 = new Enemies('frank', 40, 'bat')
let zombie3 = new Enemies('sue', 40, 'nailfile')
let zombie4 = new Enemies('beth', 40, 'bottle')
enemyArr.push(zombie1, zombie2, zombie3, zombie4)
let isHuman = true
while(isHuman === true){
    if(choice1 === "w"){
        walking()
    }else if(choice1 === "q"){
        console.log("Player quit!")
        break
    }
}
function walking() {
    //use Math.random() to determine if an enemy appears
    var randomAppearance = Math.floor(Math.random() * 3)
    console.log(randomAppearance, "random")
//if random is grater then 0.70 is true if less then false
    if(randomAppearance == 0 || randomAppearance == 2) {
        console.log("No enemies appeared")
    }else if(enemyArr.length <= 0) {
        console.log("There are no zombies left. ")
        isHuman = false
    }else if(randomAppearance == 1){
            zombieAppear()
}
 //generate enemy function
function zombieAppear() {
    console.log("enemies have appeared" )
    // enemyArr[1]
    //(1)to randomize enemyarray, you can use math.floor and math.random
    var randomEnemy = enemyArr[Math.floor(Math.random() * enemyArr.length) + 0]
    //(2) you can get the user to decide to attack or run by using readline.sync's keyIn method
    var choice2 = readlineSync.keyIn( playerName + " Do you want to [a]ttack , [r]un , [p]rint stats, or [q]uit? ", {limit: "arpq"})
    console.log(choice2) 
      if(choice2 === 'a'){
        playerAttack()
      }else if(choice2 === 'r'){
        run()
      }else if(choice2 === 'q'){
        quit()
      }else if(choice2 === 'p'){
        print()
      }


}
   
//if the user decides to attack, then we can call the attack function
function playerAttack() {
    console.log("player has attacked")
while(isHuman = true){
       if(choice2 === "a"){
          playerAttack
        }else if(choice2 === "r"){
        //    console.log("Player attacked!")
        //    break
       // }
    //}
    //if the user decides to run, then we can call the run function
}
}
}