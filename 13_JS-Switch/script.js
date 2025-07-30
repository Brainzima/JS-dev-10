// Switch syntax 
// switch(variable){
//     case 1:
//         statement here ... 
//         break;
//     case 2:
//         statement...
//         break;
//     default:
//         statement... 
//         break;
// }


// let a vaiable to store the number of the day and display its dayname.
let dayNumber = 0
let dayName;
switch (dayNumber) {
    case 1:
        dayName = "Monday"
        break;
    case 2:
        dayName = "Tuesday"
        break;
    case 3:
        dayName = "Wedenesday"
        break;
    case 4:
        dayName = "Thursday"
        break;
    case 5:
        dayName = "Friday"
        break;
    case 6:
        dayName = "Saturday"
        break;
    case 7:
        dayName = "Sunday"
        break;
    default:
        dayName = "Invalid Day (Days are 1-7 only)"
        break;
}
document.writeln(`The day ${dayNumber} is ${dayName}.`)

//
// if (dayNumber==1) {
//     dayName="monday"
// }else if(dayNumber==2)