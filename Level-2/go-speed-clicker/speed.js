
let numClicked = 0;

if (localStorage.getItem('click') !== null) {
    numClicked = Number(localStorage.click);
}
setTimeout(function(){
const pageClicked = () => {
    numClicked++;
    localStorage.setItem("click",numClicked);
    console.log(numClicked);
}

window.addEventListener("click", pageClicked)

function stopPageClicked(){
    clearTimeout(timeoutID)
}
var timeoutID = setInterval(stopPageClicked, 30000)
})

var display = document.getElementById('time-display')
function getTime(){
    var now = new Date()
    var hour = now.getHours()
    var min = now.getMinutes()
    var sec = now.getSeconds()
    display.textContent = `${hour}: ${min}: ${sec}`
}
setInterval(getTime, 30000)