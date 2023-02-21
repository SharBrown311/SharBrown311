var read = require('readline-sync')


const zombieSlayer = {
  name: '',
  inventory: [], 
  health: 10, 

}

const zombie = {
  zombieName: ['ripper', 'cruncher', 'mangler', 'shredder'], 
  health: 10, 
  specialItems: ['stop sign', 'fire-hydrant', 'brass-knuckles', 'granny']
}

currentZombie = zombie.zombieName[0]

function gameStart(){
  let name = read.question('Welcome to Zombie Land, whats your name?')
  zombieSlayer.name = name.toUpperCase()
  let gameYN = read.keyInYN('Hello ' + name, " are you gonna rid us of this zombie mayhem?")
    if(gameYN === true){
      walk()
    }else{
      quit()
    }
}
gameStart()



function quit(){
  console.log('Take care zombie slayer')
  process.exit()
}

function run(){
  console.log('You ran away')
  walk()
}
function walk(){
  pressedKey = read.keyIn('Would you like to continue ' + zombieSlayer.name + '? : [w]alk / [p]layer', {limit: ["w", "p"]})
  if(pressedKey === 'p'){
    console.log(zombieSlayer)

  }else if (pressedKey === 'w'){
    walkPrompt()
  }
}



function walkPrompt() {
  // Allows Random Attack 1/4
  let attackProb = Math.floor((Math.random() * 4) + 1)
  promptProb = Math.floor((Math.random() * 4) + 1)

  while (attackProb <= 3) {
    if (promptProb === 1) {
      pressedKey = read.keyIn("Hey " + zombieSlayer.name + " be careful watch the side streets!: [w/p] ", { limit: ["w", "p"] })
    } else if (promptProb === 2) {
      pressedKey = read.keyIn("Hey " + zombieSlayer.name + " Shh...stay low! : [w/p] ", { limit: ["w", "p"] })
    } else if (promptProb === 3) {
      pressedKey = read.keyIn(" After this I will need like twelve vacations " + zombieSlayer.name + " : [w/p] ", { limit: ["w", "p"] })
    } else if (promptProb === 4) {
      pressedKey = read.keyIn("Oh look another burning car... : [w/p] ", { limit: ["w", "p"] })
    }
    if (pressedKey === "p") {
      console.log(zombieSlayer.name)
      return walk()
    } else if (pressedKey === "w") {
      walkPrompt()
    }
  }
  zombieAppears()
}
n

function zombieAppears(){
  let zombieProbability = Math.floor((Math.random() * 10) + 1)
    if(zombieProbability <= 3){
      console.log(zombie.zombieName[0] + `${zombie.zombieName} appears in front of you.`)
      return currentZombie = zombie.zombieName[0], firstStrike()
    }else if (zombieProbability >3 && zombieProbability < 5){
    console.log(zombie.zombieName[1] + `${zombie.zombieName} appears in front of you.`)
    return currentZombie = zombie.zombieName[1], firstStrike()
    }else if(zombieProbability >=5 && zombieProbability < 8){
      console.log(zombie.zombieName[2] + `${zombie.zombieName} appears in front of you.`)
      return currentZombie = zombie.zombieName[2], firstStrike()
    }else if(zombieProbability >= 8){
      console.log(zombie.zombieName[3] + `${zombie.zombieName} appears in front of you.`)
      return currentZombie = zombie.zombieName[3], firstStrike()
    }
  }

  function firstStrike(){
    zombieSlayer.health = 10
    zombie.health = 10
    console.log(zombie.zombieName + " : " + zombie.health )
    console.log(zombieSlayer.name + " : " + zombieSlayer.health)

    let turn = Math.floor((Math.random() * 2 ) + 1)
      if(turn <= 1){
        console.log(zombieSlayer.name + "strikes first!")
        playerStrike()
      }else{
        return zombieStrike()
      }
  }

  function playerStrike(){
    let moves = ['Attack' , 'Run away', 'Show Inventory']
    moves[-1] = quit
    let index = read.keyInSelect(movies, "Whats your move?", {cancel: 'Quit'})
    if(moves[index] === 'Attack')
  }