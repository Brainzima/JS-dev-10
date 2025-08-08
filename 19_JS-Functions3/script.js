function bodmas(num1,num2,op) {
    switch(op){
        case '+':
            result = num1+num2
            break;
        case '-':
            result = num1-num2
            break;
        case '*':
            result = num1*num2
            break;
        case '/':
            result = num1/num2
            break;
        default:
            result = 'Invalid'
            break; 
    }
    document.writeln(`${num1} ${op} ${num2} = ${result}<br>`)
}

// num1 = parseInt(prompt("Enter the 1st Number:"))
// num2 = parseInt(prompt("Enter the 2nd Number:"))
// op = prompt("Enter the operator( + - * / ):")
// bodmas(num1,num2,op)


function areaOfRect() {
    w = parseFloat(prompt("Enter the width of Rectangle:"))
    h = parseFloat(prompt("Enter the height of Rectangle:"))
    document.writeln(`
        Width of Rectangle : ${w} <br>
        Height of Rectangle : ${w} <br>
        Area of Rectangle : ${w*h} <br>
        `)
}
function areaOfCircle() {
    r = parseFloat(prompt("Enter the radius of Circle:"))
    document.writeln(`
        Radius of Circle : ${r} <br>
        Value of Pie : 3.14 <br>
        Area of Circle : ${3.14*r*r} <br>
        `)
}



userin = prompt("What do you want to calculate area of Rectangle or Circle:")
if (userin == 'rectangle') {
    areaOfRect()
}else if(userin == 'circle'){
    areaOfCircle()
}else{
    alert("Invalid! Please enter between Rectangle & Circle.")
}