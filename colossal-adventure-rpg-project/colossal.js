const readline = require('readline-sync')
let userHealth = 100;
let userDamage = 35;
let weapons = ["Bow and Arrow", "Travelers Sword", "Torch" , 'Boomerang' , 'Bomb' , 'Slingshot'];
let enemies = ["Gibdo" , "Bokoblin" , "Deku Scrub" , "Lizalfos" , "Keese" , "Wizzrobe" , "Skulltula"]
const itemsToFind = ["Heart Container", "Fairy", "Potion" , "Dubious Food" , "Magic Apple"]
let inventory = [];


let enemy = {
	name: "unknown",
	damage: "unknown",
	health: 'unknown'
}


console.log("Welcome to Falling into Hyrule")
console.log('Playing your Nintendo, you fell asleep, only to wake and find yourself blinking into the sun. Your first thoughts are Was I sleep-walking, how did I get outside? But when your eyes adjust to the light you see the Deku Tree looming above you, standing firm tall and true, you would know this tree anywhere...but why are you here...looking at it....not through a tv.')
console.log('The Deku Tree speaks: Hello Little Warrior, we have been waiting for your return.')
var user = readline.question('What is your name Little Warrior?')
console.log('Greetings ' + user + '! ' + 'Are you ready to take on this quest?' )
console.log('You nod graciously but ... why does it feel like you have no choice in the matter?')

weaponsIndex = readline.keyInSelect(weapons, "What weapon would you like to take on your journey Little One?")

var weaponChoice = weapons[weaponChoice];

if(weaponChoice === 1){
    userDamage = 27
}else if(weaponChoice === 2){
    userDamage = 37
}else if(weaponChoice === 3){
    userDamage = 19
}else if(weaponChoice === 4){
    userDamage = 25
}else if(weaponChoice === 5){
    userDamage = 42
}else if(weaponChoice === 6){
    userDamage = 38
}

console.log('Go forth in your journey ' + user + ' and save us all.')

while(userHealth > 0){
   if(inventory.length >= 8){
        continue;
   } else {
        walking()
   }
}
//shouldnt call function inside function
function walking(){
    if(inventory.length >= 16){
        console.log('You win, ' + user + ' ! Congratulations!')
        }else{
            console.log("Press 'w' to walk")
            key = readline.keyIn("" , {hideEchoBack: true , mask: '', limit: 'wph'})
            if(key === "w"){
                var enemyEncounter = Math.random()
                if(enemyEncounter < .29){
                    generateEnemy()
                }else{
                    walking()
                    
                }
            }else if(key === 'p'){
                console.log(`Player: ${user} , Inventory:  ${inventory}, HP Remaining: ${userHealth}`)
            }else if (key === 'q'){
        quitting()
    } 
};
//instead of hardcoding use random number to get random enemy from array.
function generateEnemy(){
    var randomEnemy = Math.floor(Math.random() * 7 - 0  + 1) + 0;
    if(randomEnemy < 0){
        enemy.name = enemies[0];
        enemy.damage = 15;
        enemy.health = 40
        console.log("You have encountered a Gibdo! You can press 'f' to fight, 'r' to run, 'q' to quit or 'p' to view your inventory.")
        key = readline.keyIn("", {hideEchoBack: true, mask: '', limit: 'frqp'})
        if(key === "f"){
            fighting()
        }else if(key === 'r'){
            running()
        }else if(key === "q"){
            quitting()
        }else if(key === "p"){
            console.log(`Player: ${user}, Inventory: ${inventory}, HP Remaining: ${userHealth}`)
        }
}else if(randomEnemy < 1){
    enemy.name = enemies[1]
    enemy.damage =  10
    enemy.health = 50
    console.log("You have encountered a Bokoblin. You can press 'f' to fight, 'r' to run, 'q' to quit or 'p' to view your inventory.")
    key = readline.keyIn("" , {hideEchoBack: true, mask: '', limit: 'frqp'})
    if (key === "f"){
        fighting();
    } else if (key === "r"){
        running();
    }else if (key === "q"){
        quitting()
    }else if(key === "p"){
        console.log(`Player: ${user}- Inventory: ${inventory}- HP Remaining: ${userHealth}`)
    }
}else if(randomEnemy < 2){
        enemy.name = enemies[2]
        enemy.damage =  6
        enemy.health = 30
        console.log("You have encountered a Deku Scrub. You can press 'f' to fight, 'r' to run, 'q' to quit or 'p' to view your inventory.")
        key = readline.keyIn("" , {hideEchoBack: true, mask: '', limit: 'frqp'})
        if (key === "f"){
            fighting();
        } else if (key === "r"){
            running();
        }else if ( key === "q"){
            quitting()
        }else if(key === "p"){
            console.log(`Player: ${user}, Inventory: ${inventory}, HP Remaining: ${userHealth}`)
        }
}else if(randomEnemy < 3){
    enemy.name = enemies[3]
    enemy.damage =  12
    enemy.health = 65
    console.log("You have encountered a Lizalfos. You can press 'f' to fight, 'r' to run, 'q' to quit or 'p' to view your inventory.")
    key = readline.keyIn("" , {hideEchoBack: true, mask: '', limit: 'frqp'})
    if (key === "f"){
        fighting()
    } else if (key === "r"){
        running()
    }else if (key === "q"){
        quitting()
    }else if(key === "p"){
        console.log(`Player: ${user}, Inventory: ${inventory}, HP Remaining: ${userHealth}`)
    }
}else if(randomEnemy < 4){
    enemy.name = enemies[4]
    enemy.damage =  5
    enemy.health = 20
    console.log("You have encountered a Keese. You can press 'f' to fight, 'r' to run, 'q' to quit or 'p' to view your inventory.")
    key = readline.keyIn("" , {hideEchoBack: true, mask: '', limit: 'frqp'})
    if (key === "f"){
        fighting()
    } else if (key === "r"){
        running()
    }else if( key === "q"){
        quitting()
    }else if(key === "p"){
        console.log(`Player: ${user}, Inventory: ${inventory}, HP Remaining: ${userHealth}`)
    }
}else if(randomEnemy < 5){
        enemy.name = enemies[5]
        enemy.damage =  20
        enemy.health = 80
        console.log("You have encountered a Wizzrobe.You can press 'f' to fight, 'r' to run, 'q' to quit or 'p' to view your inventory.")
        key = readline.keyIn("" , {hideEchoBack: true, mask: '', limit: 'frqp'})
        if (key === "f"){
            fighting()
        } else if (key === "r"){
            running()
        }else if(key === "q"){
            quitting()
        }else if(key === "p"){
            console.log(`Player: ${user}, Inventory: ${inventory}, HP Remaining: ${userHealth}`)
        }
    }else if(randomEnemy < 6){
        enemy.name = enemies[6]
        enemy.damage =  1
        enemy.health = 10
        console.log("You have encountered a Skulltula. You can press 'f' to fight, 'r' to run, 'q' to quit or 'p' to view your inventory.")
        key = readline.keyIn("" , {hideEchoBack: true, mask: '', limit: 'frqp'})
        if (key === "f"){
            fighting()
        } else if (key === "r"){
            running()
        }else if (key === "q"){
            quitting()
        }else if(key === "p"){
            console.log(`Player: ${user}, Inventory: ${inventory}, HP Remaining: ${userHealth}`)
        }

    }else{
        generateItem = Math.floor(Math.random() * 100 - 1) + 1;
        if(generateItem < 10){
            inventory.push(itemsToFind[0])
            console.log('You have found a heart container and gained health')
            userHealth = userHealth + 50
        }else if(generateItem < 25){
            inventory.push(itemsToFind[1])
            console.log('You have found a fairy and gained some health')
            userHealth = userHealth + 30
        }else if(generateItem < 50){
            inventory.push(itemsToFind[2])
            console.log('You have found a potion and gained a little health')
            userHealth = userHealth + 15
        }else if(generateItem < 75){
            inventory.push(itemsToFind[3])
            console.log('Oh no, not Dubious Food! yuck...')
            userHealth = userHealth - 100
        }else if (generateItem < 100){
            inventory.push(itemsToFind[4])
            console.log('You have found a Magic Apple and gained a tiny bit of health')
            userHealth = userHealth + 10
        }
    }

}

function fighting(){
    while(enemy.health > 0 && userHealth > 0){
        var attackPower = userDamage
        enemy.health = enemy.health - attackPower
        console.log('You have attacked ' + enemy.name + ' and this much of their hp remains ' + enemy.health)
        var enemyPower = Math.floor(Math.random() * enemy.damage - 5);
        userHealth = userHealth - enemyPower
        console.log('You have been attacked by ' + enemy.name + ' and this much of your hp remains ' + userHealth)
            }  if(userHealth < 0){
        console.log('You have Died')
            } else if(enemy.health <= 0){
        console.log('You have defeated the ' + enemy.name)
    }
}



function running(){
    var escapeChance = Math.floor(Math.random() * 1 - 0)+ 1
    if(escapeChance > .5){
        console.log('You ran from the ' + enemy.name)
        walking()
    }else {
        console.log('You were unable to run away.')
        var enemyPower = Math.floor(Math.random() * (enemy.damage - 5) + (enemy.damage - 5))
        userHealth = userHealth - enemyPower
        console.log('You have been attacked by ' + enemy.name + ' and only this much of your hp remains. ' + userHealth)
        if(userHealth <= 0){
            console.log('You have died.')
        }if(enemy.health <= 0){
            console.log(`The ${enemy.name} has been defeated.`)    
        }else{
            fighting()
        }
    }
}
    function quitting(){
       console.log(`Goodbye, ${user}! Until we meet again then.`)
       userHealth = 0
       return
    }

}

