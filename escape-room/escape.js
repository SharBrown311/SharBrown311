const readline = require("readline-sync");
const name = readline.question("What is your name? ");

const enter = ('Welcome to Hell, ' + name + ', would you like a muffin? YOU ENTER THE ROOM AND IN FRONT OF YOU STANDS A 16 FOOT DOUBLE DOOR WITH FLEUR DE LI\'S DESIGNS AROUND THE EDGING. AND THEN YOU SEE THE FACES AND YOU HEAR THE CRIES OF ALL THE DAMNED SOULS WHO TRIED TO CROSS THE THRESHOLD BEFORE YOU, BUT PERISHED. YOU THEN NOTICE THAT THE DOOR HAS A SUPRISINGLY SMALL KEYHOLE, THAT YOU COULD HAVE EASILY OVERLOOKED. FEELING FEAR, YOU LINGER AWAY FROM THE DOOR AND FIND A PICTURE HANGING ON THE WALL THAT HAS BEEN SHREDDED, BUT STILL SHOWS EITHER A MAN OR A WOMAN WITH A MICHEVIOUS GRIN ON THEIR FACE. YOU TAKE THE PICTURE OFF THE WALL AND TOSS IT AWAY, FINDING A HOLE IN THE WALL ,HIDING BEHIND IT. WHAT WILL YOU DO NOW? CHOOSE CAREFULLY...YOUR LIFE DEPENDS ON IT.')
console.log(enter)

const options = ['Put your hand in the hole?', 'Look for the key to the door elsewhere?' , 'Jiggle the handle of the door?'];
let aftermath = '';
const death = "You died! Straight through the Gates of Hell you go!"
const escape = 'You open the door, and become blinded by a white light,  and discover your back in your living room, asleep on the couch. What a wild dream.'



while(!aftermath){
    let optionsIndex = readline.keyInSelect(options)
    if(optionsIndex === 0){
        console.log('You put your hand in the hole, and now have no more hand. You are bleeding out... ' + death)
        aftermath = death;
    }else if(optionsIndex === 1){
        console.log('You look elsewhere for the key to the door and discover it randomly in your back pocket. *Mysterious Music Plays* ' + escape)
        aftermath = escape;
    }else if(optionsIndex === 2){
        console.log('You seriously thought that would work? When have you ever been that lucky? *Psh*')

    }else{
        console.log('Do you want to start the madness again?')
    }
}