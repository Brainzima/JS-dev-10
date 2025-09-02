let para = prompt("Enter your paragraph:")
let splitter = prompt("Enter the Splitter:")

console.log(para)
console.log(splitter)
console.log(para.split(splitter))

let paraArray = para.split(splitter)
console.log(paraArray)

paraArray.forEach(function(item){
    document.writeln(item + "<br>")
})