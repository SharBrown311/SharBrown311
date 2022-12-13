
const list = document.getElementById('list')

axios.get('https://api.vschool.io/sharonbrown/todo/').then((response)=>{
    const todos = response.data
    for(let i = 0; i < todos.length; i++){
        makeTodo(todos[i])
    }
})

function makeTodo(todo){
    const container = document.createElement('div')
    const h1 = document.createElement('h1')
    const p = document.createElement('p')
    const img = document.createElement('img')
    const h2 = document.createElement('h2')
    const check = document.createElement('input')
    const button = document.createElement('button')
    const button2 = document.createElement('button')
    const editForm = document.createElement('form')
    const input1 = document.createElement('input')
    const input2 = document.createElement('input')
    const input3 = document.createElement('input')
    const input4 = document.createElement('input')
    const button3 = document.createElement('button')
    h1.textContent = todo.title
    p.textContent = todo.description
    img.src = todo.imgUrl
    h2.textContent = todo.price
    check.type = 'checkbox'
    button.type = 'submit'
    button.innerHTML="<i class = 'fas fa-trash-can'>"
    button2.innerHTML = "<i class = 'fas fa-pen'></i>"
    editForm.id = 'editForm'
    input1.type = 'text'
    input1.value = todo.title
    input1.id = 'title'
    input2.type = 'text'
    input2.value = todo.description
    input2.id = 'description'
    input3.type = 'text'
    input3.value = todo.imgUrl
    input3.id = 'imgUrl'
    input4.type = 'number'
    input4.value = todo.price
    input4.id = 'price'
    button3.type = 'submit'
    button3.innerHTML= "<i class = 'fas fa-check'>"
    container.style.display = 'inline-block'
    container.appendChild(h1)
    container.appendChild(p)
    container.appendChild(img)
    container.appendChild(h2)
    container.appendChild(check)
    container.appendChild(button)
    container.appendChild(button2)
    editForm.style.display = 'none'
    editForm.appendChild(input1)
    editForm.appendChild(input2)
    editForm.appendChild(input3)
    editForm.appendChild(input4)
    editForm.appendChild(button3)
    container.addEventListener('change', (e)=> {
        e.preventDefault()
        if(check.checked === true){
            axios.put(`https://api.vschool.io/sharonbrown/todo/${todo._id}`, {completed: true}).then( response =>{   
                response.data
                h1.style.textDecoration = 'line-through'
            })
        }else if(check.checked === false) {
            axios.put(`https://api.vschool.io/sharonbrown/todo/${todo._id}`, {completed: false}).then( response =>{   
                response.data
                h1.style.textDecoration = 'none'
            })
        }
    })
    button.addEventListener('click', ()=>{
        axios.delete(`https://api.vschool.io/sharonbrown/todo/${todo._id}`).then( response =>{
            response.data
            container.remove()
            alert(response.data.msg)
        })
    })
    button2.addEventListener('click', ()=>{
        container.style.display = 'none'
        editForm.style.display = 'inline-block'

    })
    editForm.addEventListener('submit', (e)=>{
        e.preventDefault()
        const edit = {
            title: editForm.title.value,
            description: editForm.description.value,
            imgUrl: editForm.imgUrl.value,
            price: editForm.price.value
        }
        axios.put(`https://api.vschool.io/sharonbrown/todo/${todo._id}`, edit).then( response =>{
            response.data
            editForm.style.display = 'none'
            container.style.display = 'inline-block'
            document.location.reload(true)
        })
    })
    list.appendChild(container)
    list.appendChild(editForm)
}

newTodo.addEventListener('submit', (e)=> {
    e.preventDefault()
    const another = {
        title: newTodo.title.value,
        description: newTodo.description.value,
        imgUrl: newTodo.imgUrl.value,
        price: newTodo.price.value
    }
    axios.post('https://api.vschool.io/sharonbrown/todo/', another).then( response =>{
        makeTodo(response.data)
    })
})