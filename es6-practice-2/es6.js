const button = document.getElementById('button')
const output = document.getElementById('output')
const input = document.getElementById('input')


button.addEventListener('click', () => {
  output.innerText = "You've submitted: " +  input.value
})



function collectAnimals(...animals){
  return animals
}
collectAnimals("dog", 'cat', 'mouse', 'jackalope', 'platypus')


function unshift(array, ...second) {
  return[...second, ...array];
}
console.log(unshift())