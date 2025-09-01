let title = "BrAInZimA CoMPUteR"

document.writeln(title)

console.log(title)

// convert to uppercase
console.log(title.toUpperCase())

//convert to lowercase
console.log(title.toLowerCase())

//replace a character or word  - single
console.log(title.replace('A', 'K'))

//replace a character or word - all
console.log(title.replaceAll('A', 'K'))


// slicing a range 
console.log(title.slice(0,9))

// split from anywhere 
let para = "Ritesh, Katihar, 7979797970, ritesh@gmail.com"
console.log(para)
console.log(para.split(','))

// access any single data
let paraa = para.split(',')
console.log(paraa)
console.log(paraa[0])
console.log(paraa[2])
console.log(paraa[3])