// let attendance = 69
// if(attendance >= 70){
//     document.writeln(`Your attendance is <span class='green'>${attendance}%</span> which is greater then 70%. So you are allowed for the exam.`)
// }else{
//     document.writeln(`Your attendance is <span class='red'>${attendance}%</span> which is lesser then 70%. So you are not allowed for the exam.`)
// }


//2way
// let ar = 80
// document.writeln(`Your attendance is <span class='${ar>=70?'green':'red'}'>${ar}%</span> which is ${ar>=70?'greater':'less'} then 70%. So you are ${ar>=70?'':'not'} allowed for the exam.`)


// js alert 
let age = parseInt(prompt("Enter your age:"))
if (age == 0) {
    alert("Age can not be 0.")
} else {
    if (age >= 18) {
        document.writeln("You are adult!")
    } else {
        document.writeln("You are minor!")
    }
}