// for multiple values in one variable we have to define array

// method 1 
let names = ["Amit", "Ritesh","Jitesh","Naresh"]
document.writeln(names)
console.log(names)
document.writeln("<br>")

// method 2 
let cities = []
cities[0] = "Alloo"
cities[1] = "Paneer"
cities[2] = "Matar"
document.writeln(cities)
console.log(cities)
document.writeln("<br>")

// method 3
let states = new Array("Ankit", "Lokesh")
document.writeln(states)



// Accessing the data of array by its index number which starts from 0
document.writeln("<br>")
document.writeln(names[1])
