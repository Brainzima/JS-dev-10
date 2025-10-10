// bulit in math functions 
// console.log(-500)
// console.log(Math.abs(-500))
// console.log(Math.floor(5.99))
// console.log(Math.ceil(5.1))
// console.log(Math.round(5.5))
// console.log(Math.pow(50,2))
// console.log(Math.min(10,20,50,40,5,10))
// console.log(Math.max(10,20,50,40,5,10))
// console.log(Math.sqrt(58456))
// console.log(Math.PI)
// console.log(Math.random(0,100))
// console.log(Math.random(0,100) * 10)
// console.log(Math.round(Math.random(0,100) * 10))

// otp gen 
// let otp = ""
// for (let i = 1; i <= 6; i++) {
//     console.log(otp)
//     let genDigit = Math.floor(Math.random(0,9)*10)
//     otp = otp + genDigit   
// }
// console.log(otp)

function genOtp() {
    let otp = ""
    for (let i = 1; i <= 6; i++) {
        let genDigit = Math.floor(Math.random(0,9)*10)
        otp = otp + genDigit   
    }
    document.getElementById("otp").innerText=otp
}