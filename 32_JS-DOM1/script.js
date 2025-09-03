// function sayHi() {
//     document.writeln("Good Morning Aliens!")
// }

function sayHi() {
    document.getElementById("hi").innerText="Good Morning Aliens"
}


function sum() {
    const num1 = document.getElementById("num1").value
    const num2 = document.getElementById("num2").value
    let result = parseInt(num1) + parseInt(num2)
    document.getElementById("result").innerText=result
}