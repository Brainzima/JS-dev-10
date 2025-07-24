// HW- Take five subjects as variable and display the division
// above = 300 - 1st  
// above = 225 - 2nd 
// above =150 -3rd 
// below 150- Fail

//simple way

// let math = 52
// let sc = 63
// let ssc = 52
// let hnd = 65
// let eng = 63
// let total = math + sc + ssc + hnd + eng
// if (total >= 300) {
//     document.writeln("1st Division.")
// } else if (total >= 225) {
//     document.writeln("2nd Division.")
// }else if(total >= 150){
//     document.writeln("3rd Division.")
// }else{
//     document.writeln("Fail.")
// }


// Pro way 
// let math = 80
// let sc = 80
// let ssc = 80
// let hnd = 65
// let eng = 63
// let div;
// let total = math + sc + ssc + hnd + eng
// if (total >= 300) {
//     div = "1st"
// } else if (total >= 225) {
//     div = "2nd"
// }else if(total >= 150){
//     div = "3rd"
// }else{
//     div = "Fail"
// }
// document.writeln(`
//     Marks With Subjects:<br>
//     Maths = ${math} <br>
//     Science = ${sc} <br>
//     Social Science = ${ssc} <br>
//     Hindi = ${hnd} <br>
//     English = ${eng} <br>
//     ******************** <br>
//     Total Marks = ${total} <br>
//     Division = ${div} <br>
//     ********************
//     `)


// Pro way but if any subject's marks is lower than 30 than it should be Fail

let math = 80
let sc = 80
let ssc = 80
let hnd = 65
let eng = 30
let div;
let total = math + sc + ssc + hnd + eng

if (math < 30 || sc < 30 || ssc < 30 || hnd < 30 || eng < 30) {
    div = "Fail"
} else {
    if (total >= 300) {
        div = "1st"
    } else if (total >= 225) {
        div = "2nd"
    } else if (total >= 150) {
        div = "3rd"
    } else {
        div = "Fail"
    }
}

document.writeln(`
    Marks With Subjects:<br>
    Maths = ${math} <br>
    Science = ${sc} <br>
    Social Science = ${ssc} <br>
    Hindi = ${hnd} <br>
    English = ${eng} <br>
    ******************** <br>
    Total Marks = ${total} <br>
    Division = ${div} <br>
    ********************
    `)