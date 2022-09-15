var button = document.getElementById('submitItem')
submitItem.innerHTML = 'Submit'//Submit Button
var list = document.getElementById('list')//this it the ul id

var form = document.getElementById('formList');
form.addEventListener('submit' , (e) => {
    e.preventDefault()
    addItem()
})
var addItem = function() {
    var text = inputValu.value;
    inputValu.value = '';
    var li = document.createElement('li');
    li.innerHTML = text;
    var br = document.createElement('br')
    list.appendChild(li)
    li.append(br)

    var deleteButton = document.createElement('button')
    deleteButton.addEventListener('click' , deleteItem)

    function deleteItem(){
        li.remove()
    }
    deleteButton.innerHTML = 'X'
    var editButton = document.createElement('button')
    editButton.setAttribute('id' , makeItemEditable)
    editButton.addEventListener('click' , makeItemEditable)
    editButton.innerHTML = 'Edit'
    deleteButton.style.height= '30px'
        deleteButton.style.width = '43.09px'
        deleteButton.style.backgroundColor = 'red'
        editButton.style.height = '30px'
        editButton.style.width = '43.09px'
        editButton.style.backgroundColor = 'blue'
    li.appendChild(deleteButton)
    li.appendChild(editButton)
editButton.onclick = makeItemEditable;
  var makeItemEditable = function(){
        var inputEdit= document.createElement('input')
        inputEdit.onclick = editFunction;
        inputEdit.customPropery = li.value

        function editFunction(e){
            var listItem = e.currentTarget
            listItem.value = listItem.customProperty;
            editButton.value = 'Save'
        }
       document.getElementById('inputValu') 
    }
}