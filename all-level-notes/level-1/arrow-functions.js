


// const h1 = document.getElementById("clickable")
// h1.addEventListener("click", (e) => {
//     h1.textContent = "clicked"    
// })
// if you have 1 argument remove the parentheses from the event
//if you have 0 arguments leave the paretheses 

const h1 = document.getElementById("clickable")
h1.addEventListener("click", e => {
  h1.textContent = "clicked"
})




const birds = ["robin", "pelican", "goose"]

const bigBirds = birds.map(bird =>  "big " + bird)

//implicit return ^

const addTwo = (first, second) => first + second

//implicit return with two properties