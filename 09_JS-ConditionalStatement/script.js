//syntax
// if(condition){
    // statement if true
// }else{
    //statement if false
// }


// Program1: to display either user can vote or not according the age
let age = 17
if(age >= 18){
    document.writeln(`Your age is ${age} so that you can vote.`)
}else{
    document.writeln(`Your age is ${age} so that you can not vote.`)
}

//Program2: find the year is leap or not
let year = 2028
if(year % 4 == 0){
    document.writeln(`<br>The year ${year} is a leap year.`)
}else{
    document.writeln(`<br>The year ${year} is not a leap year.`)
}

//Program3: Find the number is even or odd
let number = 955
if(number % 2 == 0){
    document.writeln(`<br>The number ${number} is a even number.`)
}else{
    document.writeln(`<br>The number ${number} is a odd number.`)
}