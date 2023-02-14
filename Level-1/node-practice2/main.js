var readline = require('readline-sync');
//Narration 
isAlive = true;
hasWon = false;
///GREETING
console.log("Welcome to Zombie land")
var playerName = readline.question('What is your name? ')
console.log(playerName)
var greeting = readline.keyIn("Hello " + playerName + "! Do you want to [w]alk , [p]rint your status, or [q]uit? ", {limit: "wqp"})
 console.log(greeting)



 while(isAlive && !hasWon) {
  const choice1 = readline.keyIn(
    "Would you like to walk [w] , show your stats [p] , or quit [q]",  {limit: 'wpq'})
    if(choice1 === 'w'){
      walking()
    }else if (choice1 === 'p'){
      print()
    }else if (choice1 === 'q'){
      quit()
    }
  }



  var choice2 = readline.keyIn( playerName + " Do you want to [a]ttack , [r]un , [p]rint your status , or [q]uit? ", {limit: "arpq"})








// FUNCTIONS

//PLAYER FUNCTION

function ZombieSlayer (playerName, healthStat, attackPower){
  this.playerName = playerName, 
  this.healthStat = healthStat, 
  this.attackPower = attackPower
  this.inventory = {
    specialItems: []
  }
  this.enemiesFought = 0
  this.showStats = () => console.clear()
  readline.keyInPause(
    `Your current stats are: name: ${playerName} | healthStat: ${this.healthStat} | inventory: ${this.inventory.specialItems}`
  )
 
}

 const player = new ZombieSlayer(playerName, 150 , 20)



 ///ENEMY FUNCTION


function Enemy(name , healthStat, enemyAttackPower, enemyItem){
  this.name = name
  this.healthStat = healthStat
  this.enemyAttackPower = enemyAttackPower
  this.enemyItem = enemyItem
}

let arrayOfEnemies = [
new Enemy('Lurker' , 40, 'stop sign'),
new Enemy('Biter' ,40 , 'brass knuckles' ),
new Enemy('Empty' , 40 , 'telekinesis'),
new Enemy('Ravager' , 45 , 'fire hydrants'),
]


///WALKING FUNCTION
function walking() {
function generateZombie() {
  var randomZombie = Math.floor(Math.random() * 3)
  if(randomZombie == 0 || randomZombie == 2) {
    console.log("No enemies have appeared")
  }else if(arrayOfEnemies.length <= 0) {
    console.log("There are no more zombies left. ")
    isHuman = false
  }else if(randomZombie == 1){
    zombieAppears()
}
console.log("A" + `${Enemy.name}` + " has appeared" )
 var randomZombie = arrayOfEnemies[Math.floor(Math.random() * arrayOfEnemies.length)]

}
}


///RUN FUNCTION
function run(){
if(arrayOfEnemies.length === 3){
  player.healthStat -= 5
  console.log(`You run away as fast as  you can from the ${Enemy.name} but could not seem to run fast enough without getting hit.`)
}else{
  console.log(`You got really lucky and escaped the ${Enemy.name}`)
}
}

//PRINT FUNCTION 
function print(){
  showStats()
}

//ATTACK FUNCTION
function attack(enemy){
  while(player.healthStat > 0 && enemy.healthStat > 0){
    let zombieSlayerAttack = Math.floor(Math.random() * player.healthStat)
    let enemyAttack = Math.floor(Math.random() * enemy. healthStat)
    player.healthStat -= enemyAttack
    enemy.healthStat -= zombieSlayerAttack

    console.clear()
    readline.keyInPause(
      ``
    )
  }
}


//WON FUNCTION
function won(){
  if(enemyArr.length <= 0){
    console.log('There are no more Zombies, you have beaten the apocalypse')
  }else{
    walking()
  }
}

//QUIT FUNCTION 
function quit(){
  hasWon = true
  console.log('See ya next time')
}


//RANDOM ENEMY FUNCTION
function randomEnemy(){
  let randomChance = Math.floor(Math.random() * arrayOfEnemies.length)
  return arrayOfEnemies[randomChance]
}


//RANDOM ENEMY ENCOUNTER FUNCTION

function enemyEncounter(){
  let enemy = enemySelect()
  console.clear()
  readline.keyInPause(`You have encountered an ${enemy.name}`)
  let choice2 = readline.keyIn('Would you like to [a]ttack, [r]un, or [q]uit')  
  if(choice2 === 'r'){
    if(Math.random() > .5){
      run()
    }else{
      console.log('The ${enemy.name} attacks.')
      player.healthStat -= 15
      console.log(`Your health is now ${player.healthStat}`  )
        attack(enemy)
    }
  }else if(choice1 === 'a'){
      attack(enemy)
  }
    }







// ----------------------------------------------
