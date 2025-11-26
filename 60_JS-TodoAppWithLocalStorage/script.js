let todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []    // getting data from localstorage if the data is there otherwise assign empty array
const todoList = document.getElementById("todoList")

function showTodos(){
    
    todos.forEach(function (todo, index){
        const todoItem = document.createElement('li')
        todoItem.innerHTML = `<span onclick='completeToggle(${index})'>${todo.task}</span>`
        // add delete btn
        const dbtn = document.createElement('button')
        dbtn.textContent = 'Delete'
        dbtn.setAttribute('onclick', `deleteTodo(${index})`)
        // console.log('run ho rha')
        todoItem.appendChild(dbtn)
        todoList.appendChild(todoItem)
    })

}
showTodos()

function addTodo(){
    let invalue = document.getElementById("invalue").value 
    const newTodo = {task: invalue, isCompleted: false}  // creating the new todo obj
    todos.push(newTodo)   // pushing the new todo in the array
    localStorage.setItem('todos', JSON.stringify(todos))  // adding data to local storage
    todoList.textContent = ''  // making empty that ul tag in html
    document.getElementById("invalue").value = ''
    showTodos() // showing the new array of all todo
}

function deleteAll(){
    localStorage.clear()  // clear all the data from localstorage
    window.location.reload()  // refresh the page after clearing the data
}

function deleteTodo(index){
    const newTodo = todos.splice(index,1)
    localStorage.setItem('todos', JSON.stringify(todos))
    todoList.textContent = ''
    showTodos()
}

// function completeToggle(index){
//     todos[index].isCompleted = true
//     localStorage.setItem('todos', JSON.stringify(todos))
// }