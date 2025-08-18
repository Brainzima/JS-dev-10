// Loops controls:
// 1. for-loop 
// 2. while loop 
// 3. do-while loop 
// 4. foreach loop ----Array

// for loop syntax 
// for (initialization; condition; increment/decrement) {
//     statement
// }

// print hello world 50 times with loop
// for(let i = 1; i <= 50; i++){
//     document.writeln("Hello World <br>")
// }

// lets take number variable having any number and display it's table

// solution without loop
let number = 8796
document.writeln(`
    ${number * 1} <br>
    ${number * 2} <br>
    ${number * 3} <br>
    ${number * 4} <br>
    ${number * 5} <br>
    ${number * 6} <br>
    ${number * 7} <br>
    ${number * 8} <br>
    ${number * 9} <br>
    ${number * 10} <br>
    `)

// solution with loop
let num = 3
for (let i=1; i<=10; i++) {
    document.writeln(`${num*i}<br>`)    
}



// take a vaiable having number and display the sum from 0 to that number
let numb = 100
let sum = 0
for(let i=0; i<=numb; i++){
    // sum = sum + i
    sum += i
}
document.writeln(`${sum}`)