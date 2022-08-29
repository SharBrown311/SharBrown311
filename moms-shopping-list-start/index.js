var button = document.getElementById('submitItem')
submitItem.innerHTML = 'Submit'//submit button
var list = document.getElementById('list')//ul

                                                            
var form = document.getElementById('listForm')
// 1. console.log contents of variables that store returns from dom manipulation 
console.log("form var: ", form)
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    addItem()
})//form element

// var testFn = function() {
//     // e.preventDefault()
//     console.log("The form was submitted")
// }

// var exampleForm = document.getElementById("exampleForm")
// console.log(exampleForm)

var addItem = function () {

    var text = txtValu.value;
    txtValu.value = "";
    var li = document.createElement('li');
    li.innerHTML = text;
    var br = document.createElement('br')
    list.appendChild(li);
    li.append(br)

    var buttonDelete = document.createElement('button')
    buttonDelete.addEventListener('click' , deleteItem)

    // named function definition
    function deleteItem(e){
        console.log("delete was called")
        li.remove()
    }
    var buttonEdit = document.createElement('button')
    buttonDelete.innerHTML = "X"
    buttonEdit.innerHTML = 'Edit'
    buttonDelete.style.height= '30px'
        buttonDelete.style.width = '43.09px'
        buttonDelete.style.backgroundColor = 'red'
        buttonEdit.style.height = '30px'
        buttonEdit.style.width = '43.09px'
        buttonEdit.style.backgroundColor = 'blue'
    li.appendChild(buttonDelete)
    li.appendChild(buttonEdit)
}

// edit value of input and be able to save afterwards
// var editItem = document.querySelector('editItem').addEventListener('click' , update)

// var update = function(){
//     var txtValu = document.getElementById('txtValu')
//     var listItem = document.getElementById (txtValu.value)
//     form.addEventListener("submit",(e)=>{
//         e.preventDefault()
//         addItem()
//     })//form element

// }

var button = document.createElement('button')
button.className = "buttonEdit"
var buttonEdit  = document.getElementById('buttonEdit')
buttonEdit.addEventListener('click' , update )
console.log('button clicked');

function update(){
var input = document.getElementById['txtValu'];
console.log(input.value);
txtValu.setAttribute('value','newValue');
console.log(txtValu.value);
}