let num1 = 500
let num2 = 500

document.writeln(`<br>Result is: ${num1}`)

//plus assign op
// num1 = num1 + num2
num1 += num2
document.writeln(`<br>Result is: ${num1}`)

//minus assign op
// num1 = num1 - num2
num1 -= num2
document.writeln(`<br>Result is: ${num1}`)

//product assign op
// num1 = num1 * num2
num1 *= num2
document.writeln(`<br>Result is: ${num1}`)

//div assign op
// num1 = num1 / num2
num1 /= num2
document.writeln(`<br>Result is: ${num1}`)

//comparison op
document.writeln(`<br>Result is: ${num1 == num2}`)
document.writeln(`<br>Result is: ${num1 != num2}`)
document.writeln(`<br>Result is: ${num1 > num2}`)
document.writeln(`<br>Result is: ${num1 < num2}`)
let num3 = 501
let num4 = "500"
document.writeln(`<br>Result is: ${num3 == num4}`)
document.writeln(`<br>Result is: ${num3 === num4}`)
document.writeln(`<br>Result is: ${num3 !== num4}`)

// bitwise
document.writeln(`<br>Result is: ${num1==num2 && num2==num3}`)


//Ternory op
let age = 17
document.writeln(`<br>Result is: ${age>=18?"You can vote":"You cant vote"}`)


