// declaration of function
// function name() {
//     statement/conditions
// }

//calling of function
// name()

// simple function 
function hello(){
    document.writeln("Hello World!<br>")
}

hello()


// declaration of function with params
function hi(name){
    document.writeln(`Hello ${name}! <br>`)
}

// calling of function with arguments
hi("Akash")


//problem
// num1 = 10
// num2 = 20
// add = num1 + num2
// document.writeln(add)
// num1 = 50
// num2 = 20
// add = num1 + num2
// document.writeln(add)
// num1 = 100
// num2 = 20
// add = num1 + num2
// document.writeln(add)
// num1 = 10
// num2 = 20
// add = num1 + num2
// document.writeln(add)
// num1 = 10
// num2 = 20
// add = num1 + num2
// document.writeln(add)

// solution using function 
// create a function to add two numbers
function add(num1, num2){
    document.writeln(`${num1} + ${num2} = ${num1+num2} <br>`) 
}
add(10,20)
add(100,500)
add(4546,4646)
add(8465456,416546464)