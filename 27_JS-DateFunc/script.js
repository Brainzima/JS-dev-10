let cd = new Date()
console.log(cd)
document.writeln(cd + "<br>")

document.writeln(cd.getFullYear() + "<br>")
document.writeln(cd.getDate() + "<br>")

document.writeln(cd.getDay() + "<br>")
let days = ["Sunday","Monday","Tuesday","Wedenesday","Thursday","Friday","Saturday"]
document.writeln(days[cd.getDay()] + "<br>")

document.writeln(cd.getHours() + "<br>")
document.writeln(cd.getMinutes() + "<br>")
document.writeln(cd.getSeconds() + "<br>")
document.writeln(cd.getMilliseconds() + "<br>")


document.writeln(cd.getMonth() + "<br>")
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
document.writeln(months[cd.getMonth()] + "<br>")


document.writeln(cd.toDateString() + "<br>")
document.writeln(cd.toLocaleDateString() + "<br>")
document.writeln(cd.toLocaleString() + "<br>")
document.writeln(cd.toLocaleTimeString() + "<br>")
document.writeln(cd.toISOString() + "<br>")
