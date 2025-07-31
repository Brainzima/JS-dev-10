// let name = prompt("Enter Your Name?")
// document.writeln(name)

//take name and age of user and display user is adult or not
// let username = prompt("Enter your Name?")
// let age = prompt("Enter your age?")
// if(age >= 18){
//     document.writeln(`Hey ${username} your age is ${age}. So you are adult.`)
// }else{
//     document.writeln(`Hey ${username} your age is ${age}. So you are not adult.`)
// }



//take two numbers from the user and display it's sum
// let num1 = parseInt(prompt("Enter 1st number:"))
// let num2 = parseInt(prompt("Enter 2nd number:"))
// document.writeln(`Sum of ${num1} and ${num2} is ${num1+num2}`)


// take two numbers and what-to-do and display its result
let num1 = parseInt(prompt("Enter 1st number:"))
let num2 = parseInt(prompt("Enter 2nd number:"))
let task = prompt("Enter what to do with numbers:(add/sub/product/division)")
let result;
switch(task){
    case "add":
        result=num1+num2
        break;
    case "sub":
         result=num1-num2
        break;
    case "product":
        result=num1*num2
        break;
    case "division":
        result=num1/num2
        break;
    default:
        result="Invalid Task!"
        break;
}
document.writeln(`
    1st Number = ${num1} <br>
    2nd Number = ${num2} <br>
    Task = ${task} <br>
    ******************* <br>
    Result = ${result}
    `)