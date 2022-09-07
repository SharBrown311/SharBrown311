//mouse hovered over square
document.getElementById("square").addEventListener('mouseover', function(){
    console.log(square.style.backgroundColor = "blue");
})
//mouse moved out of square
document.getElementById('square').addEventListener('mouseout' , function(){
    console.log(square.style.backgroundColor = "white");
})
//when mouse button is held down
document.getElementById('square').addEventListener('mousedown' , function(){
    console.log(square.style.backgroundColor = "red");
})
//when mouse button is let go
document.getElementById('square').addEventListener('mouseup' , function (){
    console.log(square.style.backgroundColor = "yellow");
})
//mouse button is double clicked
document.getElementById('square').addEventListener( 'dblclick' , function (){
    console.log (square.style.backgroundColor = "green");
})
//mouse wheel is spun
window.addEventListener("wheel", function (event){
    square.style.backgroundColor = "orange"
})


// window.document.getElementById("square").addEventListener("keypress", myFunction);
// function myFunction() {
//     document.getElementById("square").style.backgroundColor = "red";
//   }
document.addEventListener("keydown", function(event){
    if (event.key == 'b'){
        square.style.backgroundColor = "blue" //blue 
    }else if (event.key == 'g'){
        square.style.backgroundColor = 'green'//green
    }else if (event.key == 'y'){
        square.style.backgroundColor = 'yellow'//yellow
    }else if (event.key == 'o'){
        square.style.backgroundColor = 'orange'//orange
    }else if (event.key == 'r'){
        square.style.backgroundColor = 'red'//red
    }else if (event.key =='w'){
        
    }
}
)