// function name(){

// }

// name()=>{

// }

// function(){

// }

// ()=>{

// }

// // normal function 
// setTimeout(function(){
//     console.log("Hello Aliens!")
// },5000)

// // arrow function 
// setTimeout(()=>{
//     console.log("After 10sec Hellloooooooo")
// },10000)

// setInterval(()=>{
//     console.log("Palat...")
// },2000)

setTimeout(()=>{
    document.getElementById("box").style.borderRadius="50%"
},5000)

// console.log(ct)
setInterval(()=>{
    ct = new Date().toLocaleTimeString("en-US")
    document.getElementById("time").innerText=ct
},1000)