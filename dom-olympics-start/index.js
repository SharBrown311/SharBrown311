var h1 = document.createElement("h1"),
        h4 = document.createElement('h4'),
            h3 = document.createElement('h3');

h1.textContent = ("JavaScript Made this!!"),
    h4.textContent = ("Sharon"),
        h3.textContent = ("wrote the JavaScript");

        document.getElementById("header").appendChild(h1);
            h1.className = "header";
                header.appendChild(h4);
                header.appendChild(h3);
                
                
                h1.style.display = "inline-flex";
                h1.style.position = "relative";
                h1.style.paddingLeft = "34%";
                h4.style.position = "absolute";
                h4.style.fontWeight = "bold"
                h4.style.fontSize = '23px'
                h4.style.display = 'flex';
                h4.style.paddingLeft = "34.5%";
                h4.style.marginTop = "1%";
                h4.style.paddingTop = "-20%";
                h4.style.alignItems = 'flex';
                h3.style.display = "flex";
                h3.style.fontSize = "23px";
                h3.style.paddingLeft = "39.5%";
                h3.style.marginTop =  "1%";
                h3.style.alignItems = "flex";
                h3.style.position = "absolute";


             
const messages = document.getElementsByClassName('messages')[0].children;
    console.log(document.getElementsByClassName('messages'))
    messages[0].textContent = 'My wife accused me of being immature today';
    messages[1].textContent  = 'Really? What did you say to her?';
    messages[2].textContent = 'I told her to get out of my fort!!!!';
    messages[3].textContent = "Seriously, no girls allowed!";
    

var clearButton = document.getElementById('clear-button')

clearButton.addEventListener('click', function(event){
  clearContent()  
})
    function clearContent(){
     messages[0].textContent = "";
     messages[1].textContent = "";
     messages[2].textContent = "";
     messages[3].textContent = "";
    }

var select =document.getElementById('themeDropDown');
    console.log(themeDropDown)













// var select = document.getElementById('themeDropDown');
// var option = document.getElementsByTagName("option");
// var value = document.getElementsByTagName("themeOne", "themeTwo").children;
//     var value = document.getElementById('listItemOne', 'listItemTwo');
//       var onchange = document.getElementById('listItemOne') 
//       listItemOne.addEventListener('onchange', function(event){
//          onchange()   
//             listItemOne[0].messages.style.backgroundColor = 'blue', 'brown';
      
//       }
//       )

//     var onchange =document.getElementById('listItemTwo')
//     listItemTwo.addEventListener('onchange', function(event){
//         onchange()
//         listItemTwo[1].messages.style.backgroundColor = 'red' , 'black';
//     }
    
// for themeDropDown

            
            
    // )