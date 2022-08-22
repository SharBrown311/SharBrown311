var h1 = document.createElement("h1");
      var spanName = document.createElement('span')
        // spanName.setAttribute ('class', 'spanName');//doesn't work
        var h2 = document.createElement('h2');


var header = document.getElementById("header")
    header.appendChild(h1).textContent = "JavaScript made this!!"
    header.appendChild(h2).textContent = ' made the JavaScript'
    h2.prepend(span = 'Sharon')
    
    
                h1.style.display = "inline-flex";
                h1.style.position = "relative";
                h1.style.paddingLeft = "34%";
                // h2.spanName.style.color = "orange"//-doesn't work


//array of messages to replace with  new text content 
    const messages = document.getElementsByClassName('messages')[0].children;
    messages[0].textContent = 'My wife accused me of being immature today';
    messages[1].textContent  = 'Really? What did you say to her?';
    messages[2].textContent = 'I told her to get out of my fort!!!!';
    messages[3].textContent = "Seriously, no girls allowed!";

//button to clear out contents of messages - after hitting
//send all content reappears
var clearButton = document.getElementById('clear-button')

clearButton.addEventListener('click', (event) => {
        clearContent();
    })
    function clearContent(){
     messages[0].textContent = "";
     messages[1].textContent = "";
     messages[2].textContent = "";
     messages[3].textContent = "";
    }
var brownBlue = true;
var redBlack = false;
var greenGold = false;
var yellowOrange = false;
var themeDropDown = document.getElementById('themeDropDown')
     themeDropDown.addEventListener('click' , (event) => {
            var messageContainer = document.querySelector('#main')
            var messages = document.querySelectorAll('.messages')
            var messageRight = document.querySelectorAll('.messageRight')
            var messageLeft = document.querySelectorAll('.messageLeft')
                // const listItems = 
                // [listItems[0].messages.style.backgroundColor = 'brown',
                //  listItems[1].messages.style.backgroundColor = 'red',
                //  listItems[2].messages.style.backgroundColor = 'gold',
                //  listItems[3].messages.style.backgroundColor = 'orange'
                // ]
            if (brownBlue = true) {
                messageRight.style.backgroundColor = 'brown'
                messageLeft.style.backgroundColor = 'blue'
                brownBlue = true;
                redBlack = false;
                greenGold = false;
                yellowOrange = false;
            }else if(redBlack = true) {
                messageRight.style.backgroundColor = 'black'
                messageRight.style.color = 'white'
                messageLeft.style.backgroundColor = 'red'
                brownBlue = false;
                redBlack = true;
                greenGold = false;
                yellowOrange = false; 
            }else if(greenGold = true){
                messageRight.style.backgroundColor = 'green'
                messageLeft.style.backgroundColor = 'gold'
                brownBlue = false;
                redBlack = false;
                greenGold = true;
                yellowOrange = false;
            }else if(yellowOrange = true){
                messageRight.style.backgroundColor = 'yellow'
                messageLeft.style.backgroundColor = 'orange'
                brownBlue = false;
                redBlack = false;
                greenGold = false;
                yellowOrange = true;
            }
    })

   


//
