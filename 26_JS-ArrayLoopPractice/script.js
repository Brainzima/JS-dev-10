// Write a program to ask the user how many data he wants to enter the ask the data of how many he wanted to enter and display all the entered data

let len = parseInt(prompt("How many data you want to enter:"))
//empty array
let datas = [] 
for(let i=1; i<=len; i++){
    let data = prompt(`Enter the data ${i}:`)
    //pushing data to array so that data will be added to array
    datas.push(data)
}
// console.log(datas)

//to display the data using forEach loop
datas.forEach(function(data){
    document.writeln(data + "<br>")
})