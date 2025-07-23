// we have three numbers now find the largest among them
let num1 = 5
let num2 = 55
let num3 = 5
if(num1 > num2 && num1 > num3){
    document.writeln(`The number1 = ${num1} is the largest number among the numbers ${num1}, ${num2}, ${num3} .`)
}else if(num2 > num1 && num2 > num3){
    document.writeln(`The number2 = ${num2} is the largest number among the numbers ${num1}, ${num2}, ${num3} .`)
}else if(num3 > num1 && num3 > num2){
    document.writeln(`The number3 = ${num3} is the largest number among the numbers ${num1}, ${num2}, ${num3} .`)
}else{
    document.writeln(`All the numbers ${num1}, ${num2}, ${num3} are equals.`)
}


// HW- Take five subjects as variable and display the division
// above = 300 - 1st  
// above = 225 - 2nd 
// above =150 -3rd 
// below 150- Fail