var goombaInput = document.getElementById('goombaInput') 
var bobombInput = document.getElementById('bobombInput')
var cheepCheepInput = document.getElementById('cheepCheepInput')

goombaInput.addEventListener("change",  (e) =>{
    e.preventDefault()
    function addGoomba(){
    var goombaInput = document.getElementById('goombaInput').value
    var bobombInput = document.getElementById('bobombInput').value 
    var cheepCheepInput = document.getElementById('cheepCheepInput').value 

    var total = +goombaInput * 5 + +bobombInput * 7 + +cheepCheepInput * 11
    var result = document.getElementById('result')
    result.innerHTML = total + " coins owed"
}
addGoomba()
}
)

bobombInput.addEventListener("change", (e)=>{
    e.preventDefault()
    function addBobomb(){
    var goombaInput = document.getElementById('goombaInput').value
    var bobombInput = document.getElementById('bobombInput').value 
    var cheepCheepInput = document.getElementById('cheepCheepInput').value 

    var total = +goombaInput * 5 + +bobombInput * 7 + +cheepCheepInput * 11
    var result = document.getElementById('result')
    result.innerHTML = total + " coins owed"
}
addBobomb()
})

cheepCheepInput.addEventListener('change' , (e)=>{
    e.preventDefault()
    function addCheepCheep(){
    var goombaInput = document.getElementById('goombaInput').value
    var bobombInput = document.getElementById('bobombInput').value 
    var cheepCheepInput = document.getElementById('cheepCheepInput').value 

    var total = +goombaInput * 5 + +bobombInput * 7 + +cheepCheepInput * 11
    var result = document.getElementById('result')
    result.innerHTML = total + " coins owed"  
}
addCheepCheep()
})