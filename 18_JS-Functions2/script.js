function add(num1, num2) {
    document.writeln(`${num1} + ${num2} = ${num1+num2} <br>`)
}

function sub(num1, num2) {
    document.writeln(`${num1} - ${num2} = ${num1-num2} <br>`)
}

function mul(num1, num2) {
    document.writeln(`${num1} x ${num2} = ${num1*num2} <br>`)
}

function div(num1, num2) {
    document.writeln(`${num1} / ${num2} = ${num1/num2}<br>`)
}

sub(500,400)
add(500,400)
mul(500,400)
div(52,4854)

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

bodmas(500,200,'+')
bodmas(500,200,'-')
bodmas(500,200,'*')
bodmas(500,200,'/')