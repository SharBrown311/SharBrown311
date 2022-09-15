var h1 = document.createElement("h1");
      var spanName = document.createElement('span')
    
        var h2 = document.createElement('h2');


var header = document.getElementById("header")
    header.appendChild(h1).textContent = "JavaScript made this!!"
    h2.innerHTML = `<span class = "name">Sharon Brown</span> made the JavaScript`
    header.appendChild(h2)
    
    
                h1.style.display = "inline-flex";
                h1.style.position = "relative";
                h1.style.paddingLeft = "34%";
                
//array of messages to replace with  new text content 
    const messages = document.getElementsByClassName('messages')[0].children;
    messages[0].textContent = 'My wife accused me of being immature today';
    messages[1].textContent  = 'Really? What did you say to her?';
    messages[2].textContent = 'I told her to get out of my fort!!!!';
    messages[3].textContent = "Seriously, no girls allowed!";

//button to clear out contents of messages - after hitting
//send all content reappears
//BRONZE
var clearButton = document.getElementById('clear-button')

clearButton.addEventListener('click', (e) =>{
        clearContent();
    })
    function clearContent(){
     messages[0].textContent = "";
     messages[1].textContent = "";
     messages[2].textContent = "";
     messages[3].textContent = "";
    }
    //change color of divs on selected option
    //SILVER
    const dropdown = document.getElementById('themeDropDown')
    dropdown.addEventListener('change', activateToggle)
    function activateToggle(){
        let theme =  themeDropDown.value;
        if(theme === "themeOne"){
            let messagesLeft = document.getElementsByClassName('messagesLeft')
            for(let i = 0; i < messagesLeft.length; i ++){
                messagesLeft[i].style.backgroundColor = 'brown';
            }
            let messagesRight = document.getElementsByClassName('messagesRight')
            for(let i = 0; i < messagesRight.length; i ++){
                messagesRight[i].style.backgroundColor = 'blue'
            }
        }else if(theme === "themeTwo"){
            let messagesLeft = document.getElementsByClassName('messagesLeft')
            for(let i = 0; i < messagesLeft.length; i ++){
                messagesLeft[i].style.backgroundColor = 'red';
            }
            let messagesRight = document.getElementsByClassName('messagesRight')
            for(let i = 0; i < messagesRight.length; i ++){
                messagesRight[i].style.backgroundColor = 'black'
                messagesRight[i].style.color = 'white';
            }
        }else if(theme === 'themeThree'){
            let messagesLeft = document.getElementsByClassName('messagesLeft')
            for(let i = 0; i < messagesLeft.length; i ++){
                messagesLeft[i].style.backgroundColor = 'green';
            }
            let messagesRight = document.getElementsByClassName('messagesRight')
            for(let i = 0; i < messagesRight.length; i ++){
                messagesRight[i].style.backgroundColor = 'gold'
            }
        }else if(theme === 'themeFour'){
            let messagesLeft = document.getElementsByClassName('messagesLeft')
            for(let i = 0; i < messagesLeft.length; i ++){
                messagesLeft[i].style.backgroundColor = 'orange';
            }
            let messagesRight = document.getElementsByClassName('messagesRight')
            for(let i = 0; i < messagesRight.length; i ++){
                messagesRight[i].style.backgroundColor = 'yellow'
            }
        }else if(theme === 'default'){
            let messagesLeft = document.getElementsByClassName('messagesLeft')
            for(let i = 0; i < messagesLeft.length; i ++){
                messagesLeft[i].style.backgroundColor = 'aquamarine';
            }
            let messagesRight = document.getElementsByClassName('messagesRight')
            for(let i = 0; i < messagesRight.length; i ++){
                messagesRight[i].style.backgroundColor = 'coral'
            }
        }
    
    }

    // //Gold 
    // const button = document.message.querySelector('button')
    // button.addEventListener('click' , newMessage)
    // function newMessage(e){
    //     e.preventDefault()
    //     let newMessageBlock = document.createElement('div')
    //         newMessageBlock.textContent = e.target.parentNode.input.value
    //         if(messages.lastElementChild.className === 'messagesRight'){
    //             newMessageBlock.className = 'messagesLeft'
    //         }else{
    //             newMessageBlock.className = 'messagesRight'
    //         }
    //         if(messages.childElementCount >= 8){
    //             while(messages.childElementCount >= 8){
    //                 messages.removeChild(messages.firstChild)
    //             }
    //         }
    //         messages.appendChild(newMessageBlock)
    //         activateToggle()
    //         e.target.parentNode.input.value = '';
    // }













  

   



