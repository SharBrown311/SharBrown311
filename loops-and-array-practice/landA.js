//Question #1
var numofComputers = 0;

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
for(var i=0;i<officeItems.length;i++){
    if(officeItems[i] === "computer")
       numofComputers++;
}
console.log(numofComputers) 


//Question #2
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]
  
for(let i = 0 ; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i ++){
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        console.log('Old Enough')
    }else{
        console.log('Not Old Enough')
    }
}   

//Optional Bonus Challenges for problem #2
    //1.
    var peopleWhoWantToSeeMadMaxFuryRoad = [
        {
          name: "Mike",
          age: 12,
          gender: "male"
        },{
          name: "Madeline",
          age: 80,
          gender: "female"
        },{
          name: "Cheryl",
          age: 22,
          gender: "female"
        },{
          name: "Sam",
          age: 30,
          gender: "male"
        },{
          name: "Suzy",
          age: 4,
          gender: "female"
        }
      ]
      
    for(let i = 0 ; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i ++){
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
            console.log('Old Enough')
        }else{
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + "is not old enough")
        }
    }
    


    //optional part 2
    var p = [
        {
          name: "Mike",
          age: 12,
          gender: "male"
        },{
          name: "Madeline",
          age: 80,
          gender: "female"
        },{
          name: "Cheryl",
          age: 22,
          gender: "female"
        },{
          name: "Sam",
          age: 30,
          gender: "male"
        },{
          name: "Suzy",
          age: 4,
          gender: "female"
        }
      ]
  for(let i = 0 ; i < p.length; i ++){
        if(p[i].age >= 18){
            console.log('Old Enough')
            console.log(p[0].name +' is not old enough to see Mad Max Fury so don\'t\ let him in')
    }
}
    

    //Optional Bonus

    var switches = [2,1]
    var lights = false;
    [2, 5, 435, 4, 3]
    [1, 1, 1, 1, 3]  
    [9, 3, 4, 2]      
    
    for(var i = 0; i < switches.length; i ++) {
      for(var j = 0; j < switches[i]; j++) {
            lights = !lights;
        }
    }
    console.log(lights);

