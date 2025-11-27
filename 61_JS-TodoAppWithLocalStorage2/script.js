let todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []    // getting data from localstorage if the data is there otherwise assign empty array
const todoList = document.getElementById("todoList")

function showTodos() {

    todos.forEach(function (todo, index) {
        const todoItem = document.createElement('li')
        todoItem.innerHTML = `<span onclick='completeToggle(${index})'>${todo.task}</span>`
        // add edit btn
        const ebtn = document.createElement('button')
        ebtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>'
        ebtn.setAttribute('onclick', `editTodo(task='${todo.task}',${index})`)
        // add delete btn
        const dbtn = document.createElement('button')
        dbtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
        dbtn.setAttribute('onclick', `deleteTodo(${index})`)

        // btn-wrapper 
        const btnwraper = document.createElement('span')

        // console.log('run ho rha')
        btnwraper.appendChild(ebtn)
        btnwraper.appendChild(dbtn)
        todoItem.appendChild(btnwraper)
        todoList.appendChild(todoItem)
    })
    document.getElementById("invalue").focus()

}
showTodos()

function addTodo() {
    let invalue = document.getElementById("invalue").value
    if (invalue === '') {
        alert("Todo can't be empty!")
    } else {
        const newTodo = { task: invalue, isCompleted: false }  // creating the new todo obj
        todos.push(newTodo)   // pushing the new todo in the array
        localStorage.setItem('todos', JSON.stringify(todos))  // adding data to local storage
        todoList.textContent = ''  // making empty that ul tag in html
        document.getElementById("invalue").value = ''
        showTodos() // showing the new array of all todo
        document.getElementById("invalue").focus()
    }
}

function deleteAll() {
    localStorage.clear()  // clear all the data from localstorage
    window.location.reload()  // refresh the page after clearing the data
}

function deleteTodo(index) {
    const newTodo = todos.splice(index, 1)
    localStorage.setItem('todos', JSON.stringify(todos))
    todoList.textContent = ''
    showTodos()
}

function submitTodo(e) {
    e.preventDefault();
    addTodo()
}

function editTodo(task, index){
    const editArea = document.getElementById("editArea")

    const newInput = document.createElement('input')
    newInput.setAttribute('id','newInvalue')
    newInput.setAttribute('value', task)

    const newBtn = document.createElement('button')
    newBtn.textContent='Save'
    newBtn.setAttribute('onclick', `saveEditedTodo(${index})`)

    editArea.appendChild(newInput)
    editArea.appendChild(newBtn)

}

function saveEditedTodo(index){
    const newInvalue = document.getElementById("newInvalue").value 
    const newTodo = todos.map((todo, ind)=>{
        if (ind === index) {
           return {...todo, task: newInvalue}
        }
        return todo;
    })
    localStorage.setItem('todos', JSON.stringify(newTodo))
    window.location.reload()
}