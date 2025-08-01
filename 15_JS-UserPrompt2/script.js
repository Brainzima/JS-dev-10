// Pro way but if any subject's marks is lower than 30 than it should be Fail

// let math = parseInt(prompt("Enter the marks of Math:"))
// let sc = parseInt(prompt("Enter the marks of Science:"))
// let ssc = parseInt(prompt("Enter the marks of Social Science:"))
// let hnd = parseInt(prompt("Enter the marks of Hindi:"))
// let eng = parseInt(prompt("Enter the marks of English:"))
// let div;
// let total = math + sc + ssc + hnd + eng

// if (math < 30 || sc < 30 || ssc < 30 || hnd < 30 || eng < 30) {
//     div = "Fail"
// } else {
//     if (total >= 300) {
//         div = "1st"
//     } else if (total >= 225) {
//         div = "2nd"
//     } else if (total >= 150) {
//         div = "3rd"
//     } else {
//         div = "Fail"
//     }
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



//Simple Invoice Generator
let item = prompt("Enter the name of Item:")
let rate = parseFloat(prompt("Enter the Rate of Item:"))
let qnty = parseInt(prompt("Enter the Quantity of Item:"))
let discount = parseFloat(prompt("Enter the Rate of Discount(in %):"))
let gt = rate * qnty
let nt = gt - (gt*discount/100)
document.writeln(`
    *********************** <br>
    BI-MALL - Invoice Memo <br>
    *********************** <br>
    Item Name : ${item} <br>
    Rate : ${rate} <br>
    Quantity : ${qnty} <br>
    Discount Rate : ${discount}% <br>
    ***********************  <br>
    Gross Total : ${gt} <br>
    Savings     : ${gt-nt} <br>
    <span class='net'>Net Total : ${nt}</span> <br>
    *********************** <br>
    Thanks:) Visit Again. <br>
    ***********************
    `)